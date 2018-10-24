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

      valueFormatter: Basis.AgGridComponents.BasicNumbersValueFormatter.format,

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

      valueFormatter: Basis.AgGridComponents.BasicDateTimesValueFormatter.format,

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

      valueFormatter: Basis.AgGridComponents.BasicDateTimesValueFormatter.format,

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
    // 'BasicNumbersRenderer': Basis.AgGridComponents.BasicNumbersRenderer,
    'BasicNumbersEditor': Basis.AgGridComponents.BasicNumbersEditor,

    // Dates
    'BasicDateTimesEditor': Basis.AgGridComponents.BasicDateTimesEditor,
    // 'BasicDateTimesRenderer': Basis.AgGridComponents.BasicDateTimesRenderer,
    'BasicDateTimesFilter': Basis.AgGridComponents.BasicDateTimesFilter,

    // Images
    'BasicImagesRenderer': Basis.AgGridComponents.BasicImagesRenderer,
  };
}

export function gw_init(container, license, data, defaultOptions = {}) {

  if (agGrid.LicenseManager && license) agGrid.LicenseManager.setLicenseKey(license);

  let types = gw_getSupportedColumnTypes();

  let options = Object.assign(defaultOptions, {

    rowData: data,
    getDocument: () => gw_getDocument(),
    components: gw_getDefaultComponents(),
    columnTypes: types,

    onRowDoubleClicked: gw_onRowDoubleClicked,
    onRowSelected: gw_onRowSelected,
    onSelectionChanged: gw_onSelectionChanged,

    onCellEditingStarted: gw_onCellEditingsEvent,
    onCellEditingStopped: gw_onCellEditingsEvent,
    onCellValueChanged: gw_onCellEditingsEvent,

    onRowEditingStarted: gw_onRowEditingsEvent,
    onRowEditingStopped: gw_onRowEditingsEvent,
    onRowValueChanged: gw_onRowEditingsEvent,
    onCellClicked: gw_onCellClickEvent,
    onCellDoubleClicked: gw_onCellClickEvent,
  
    getRowNodeId: gw_getRowNodeId,

    rememberGroupStateWhenNewData: true,
    getContextMenuItems: gw_getContextMenu
  });

  if (
    options.hasOwnProperty('__isTree') &&
    true === options.__isTree
  ) {
    options.getNodeChildDetails = gw_getNodeChildDetails;
  }

  if (
    options.hasOwnProperty("__navigateToNextCell") &&
    options.__navigateToNextCell
  ) {
    options.navigateToNextCell = gw_navigateToNextRow;
  }

  for (let i in options.columnDefs) {

    const def = options.columnDefs[i];
    const field = def.field;

    //override numbers group and decimal separators
    if (def.hasOwnProperty('type') && 'basic-number' === def.type) {
      if (gw_meta && gw_meta.hasOwnProperty('field')) {
        if (!gw_meta[field].hasOwnProperty('RENDERER_GROUP_SEPARATOR'))
          def['RENDERER_GROUP_SEPARATOR'] = defaultOptions.__numberGroupSep;
        if (!gw_meta[field].hasOwnProperty('RENDERER_DECIMAL_SEPARATOR'))
          def['RENDERER_DECIMAL_SEPARATOR'] = defaultOptions.__numberDecimalSep;
      }
    }

    def.cellStyle = gw_cellStyler;
    def.cellClass = gw_getCellClass;
    def.toolPanelClass = gw_getToolPanelClass;

    def.cellClassRules = gw_getGlobalMeta(field, 'CELL_CLASS_RULES', null, true);

    const rowGroup = Number(gw_getGlobalMeta(field, 'ROW_GROUP'));
    const enableValue = Number(gw_getGlobalMeta(field, 'ENABLE_VALUE'));
    const footerValueGetter = gw_getGlobalMeta(field, 'FOOTER_VALUE_GETTER');

    def.rowGroup = rowGroup;
    def.enableRowGroup = rowGroup ? true : def.enableRowGroup;
    def.rowGroupIndex = rowGroup ? Number(gw_getGlobalMeta(field, 'ROW_GROUP_INDEX')) : null;
    def.enableValue = enableValue > 0 ? true : false;
    def.showRowGroup = gw_getGlobalMeta(field, 'SHOW_ROW_GROUP', gw_getGlobalMeta(field, "LABEL"));
    def.aggFunc = gw_getGlobalMeta(field, 'AGG_FUNC');
    def.allowedAggFuncs = gw_getGlobalMeta(field, 'ALLOWED_AGG_FUNCS', 'sum,min,max,count,avg,first,last').split(',');
    def.valueGetter = gw_getGlobalMeta(field, 'VALUE_GETTER');
    def.valueSetter = gw_getGlobalMeta(field, 'VALUE_SETTER');
    def.hide = def.headerName.startsWith('__') || gw_getGlobalMeta(field, 'HIDE', gw_getGlobalMeta(field, 'HIDDEN', false));
    def.suppressToolPanel = def.headerName.startsWith('__');
    def.editable = param => {

      const global = gw_getGlobalMeta(field, 'EDITABLE', false) === "1" ? true : false;
      if(!param.data.hasOwnProperty('meta')) return global;

      const path = param.data.meta[param.column.colId];
      return path.hasOwnProperty('EDITABLE') ? (path.EDITABLE === "1" ? true : false) : global;
    };

    if (footerValueGetter) {
      def.cellRenderer = 'agGroupCellRenderer';
      def.cellRendererParams = Object.assign({}, def.cellRendererParams, {
        footerValueGetter: footerValueGetter
      });
    }
  }

  gw_groupColumns(JSON.parse(options.__columnsGroup), options.columnDefs);

  return new agGrid.Grid(container, options);
}

export function gw_setData(json, options, license) {

  const container = gw_getDocument().getElementById('grid');
  container.innerHTML = '';

  window.gw_meta = json[0].meta;
  window.AGridComponentsMetaConfig = gw_meta;

  console.log(options);
  window.gw_options = options;
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
