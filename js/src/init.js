/*
* This file is part of the grid project
* (c) Basis Europe <eu@Basis.AgGridComponents.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_getSupportedColumnTypes() {

  return {
    "basic-string": {
      cellEditor: 'agTextCellEditor'
    },

    "basic-text": {
      cellEditor: 'agLargeTextCellEditor'
    },

    "basic-boolean": {
      cellRenderer: 'BasicBooleansRenderer',
      cellRendererParams: {
        'RENDERER_TRUE': '&#x2714;',
        'RENDERER_FALSE': '&#x2718;'
      },
      cellEditor: 'BasicBooleansEditor',
      filter: 'BasicBooleansFilter'
    },

    "basic-number": {
      cellRenderer: 'BasicNumbersRenderer',
      cellEditor: 'BasicNumbersEditor',
      filter: 'agNumberColumnFilter',
      filterParams: {
        inRangeInclusive: true,
      },
      floatingFilter: 'agNumberColumnFilter',
      floatingFilterParams: {
        inRangeInclusive: true,
      },
    },

    "basic-date": {

      cellRenderer: 'BasicDateTimesRenderer',
      cellRendererParams: {
        'RENDERER_MASK': '%Y/%Mz/%Dz'
      },

      cellEditor: 'BasicDateTimesEditor',
      cellEditorParams: {
        'EDITOR_MASK': '%Y/%Mz/%Dz',
        'EDITOR_ALLOW_INPUT': true,
      },

      filter: 'BasicDateTimesFilter',
      filterParams: {
        'FILTER_MASK': '%Y/%Mz/%Dz',
        'FILTER_ALLOW_INPUT': true,
      },
    },

    "basic-timestamp": {

      cellRenderer: 'BasicDateTimesRenderer',
      cellRendererParams: {
        'RENDERER_MASK': '%Y/%Mz/%Dz %Hz:%mz:%sz'
      },

      cellEditor: 'BasicDateTimesEditor',
      cellEditorParams: {
        'EDITOR_MASK': '%Y/%Mz/%Dz %Hz:%mz:%sz',
        'EDITOR_ENABLE_TIME': true,
        'EDITOR_ALLOW_INPUT': true,
      },

      filter: 'BasicDateTimesFilter',
      filterParams: {
        'FILTER_MASK': '%Y/%Mz/%Dz %Hz:%mz:%sz',
        'FILTER_ENABLE_TIME': true,
        'FILTER_ALLOW_INPUT': true,
      }
    },

    "basic-image": {
      cellRenderer: 'BasicImagesRenderer',
      suppressMenu: true,
      suppressFilter: true,
      cellRendererParams: {
        'IMAGE_WIDTH': '25px',
        'IMAGE_HEIGHT': '25px',
      },
    },

    "basic-image-filterable": {
      cellRenderer: 'BasicImagesRenderer',
      cellRendererParams: {
        'IMAGE_WIDTH': '25px',
        'IMAGE_HEIGHT': '25px',
      },
    }
  };
}

export function gw_getDefaultComponents() {

  return {
    // Booleans
    'BasicBooleansRenderer': Basis.AgGridComponents.BasicBooleansRenderer,
    'BasicBooleansEditor': Basis.AgGridComponents.BasicBooleansEditor,
    'BasicBooleansFilter': Basis.AgGridComponents.BasicBooleansFilter,

    // Numbers
    'BasicNumbersRenderer': Basis.AgGridComponents.BasicNumbersRenderer,
    'BasicNumbersEditor': Basis.AgGridComponents.BasicNumbersEditor,

    // Dates
    'BasicDateTimesEditor': Basis.AgGridComponents.BasicDateTimesEditor,
    'BasicDateTimesRenderer': Basis.AgGridComponents.BasicDateTimesRenderer,
    'BasicDateTimesFilter': Basis.AgGridComponents.BasicDateTimesFilter,

    // Images
    'BasicImagesRenderer': Basis.AgGridComponents.BasicImagesRenderer,
  }
}

export function gw_init(container, license, data, defaultOptions = {}) {

  if (agGrid.LicenseManager && license) agGrid.LicenseManager.setLicenseKey(license);

  let options = Object.assign(defaultOptions, {

    rowData: data,
    getDocument: () => $doc,
    columnTypes: gw_getSupportedColumnTypes(),
    components: gw_getDefaultComponents(),

    onRowDoubleClicked: gw_onRowDoubleClicked,
    onRowSelected: gw_onRowSelected,
    onSelectionChanged: gw_onSelectionChanged,

    onCellEditingStarted: gw_onCellEditingsEvent,
    onCellEditingStopped: gw_onCellEditingsEvent,
    onCellValueChanged: gw_onCellEditingsEvent,

    onRowEditingStarted: gw_onRowEditingsEvent,
    onRowEditingStopped: gw_onRowEditingsEvent,
    onRowValueChanged: gw_onRowEditingsEvent,
    rememberGroupStateWhenNewData: true
  });

  if (
    gw_options.hasOwnProperty('__isTree') &&
    true === gw_options.__isTree
  ) {
    options.getNodeChildDetails = rowItem => {

      const key = rowItem[gw_options["__getParentNodeId"]];
      if (rowItem.__node__children) {
        return {
          group: true,
          expanded: false,
          // provide ag-Grid with the children of this group
          children: rowItem.__node__children,
          // the key is used by the default group cellRenderer
          key: key ? key : -1
        };
      } else {
        return false;
      }
    }
  }

  if (gw_options.hasOwnProperty('__getRowNodeId')) {

    options.getRowNodeId = data => {
      let id = data[gw_options['__getRowNodeId']];
      id = id ? id : Math.random();
      return id;
    };
  }

  if (
    gw_options.hasOwnProperty("__navigateToNextCell") &&
    gw_options.__navigateToNextCell
  ) {
    options.navigateToNextCell = gw_navigateToNextRow
  }

  for (let i in options.columnDefs) {

    const def = options.columnDefs[i];
    const field = def.field;

    def.cellStyle = gw_cellStyler;
    def.cellClass = gw_getCellClass;
    def.toolPanelClass = gw_getToolPanelClass;

    def.cellClassRules = gw_getGlobalMeta(field, 'CELL_CLASS_RULES', null , true);

    const rowGroup = Number(gw_getGlobalMeta(field, 'ROW_GROUP'));
    def.rowGroup = rowGroup
    def.enableRowGroup = rowGroup ? true: def.enableRowGroup;
    def.rowGroupIndex = rowGroup ? Number(gw_getGlobalMeta(field, 'ROW_GROUP_INDEX')) : null;
    def.showRowGroup = gw_getGlobalMeta(field, 'SHOW_ROW_GROUP' , gw_getGlobalMeta(field,"LABEL"));
    def.valueGetter = gw_getGlobalMeta(field, 'VALUE_GETTER');
    def.valueSetter = gw_getGlobalMeta(field, 'VALUE_SETTER');
    def.hide = gw_getGlobalMeta(field, 'HIDE' , gw_getGlobalMeta(field, 'HIDDEN' , false));
  }

  return new agGrid.Grid(container, options);
}

export function gw_setData(json, options, license) {

  const container = $doc.getElementById('grid');
  container.innerHTML = '';

  window.gw_meta = json[0].meta;
  window.AGridComponentsMetaConfig = gw_meta;

  console.log(options);
  window.gw_options = options
  window.gw_instance = gw_init(container, license, json, options);

  if (gw_options.hasOwnProperty('__enterKeyBehavior')) {

    const behavior = gw_options.__enterKeyBehavior;

    switch (behavior) {
      case 'next':
        container.addEventListener('keydown', gw_onMoveToNextCell);
        break;
      default:
        break;
    }
  }
}
