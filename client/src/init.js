/*
 * This file is part of the grid project
 * (c) Basis Europe <eu@Basis.AgGridComponents.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export function gw_setData(json, options, license) {

  const id   = options.context.id;
  const meta = json[0].meta;
  const container     = gw_getDocument().getElementById(options.context.id);
  const grid = gw_addGrid(id, {
    container,
    options,
    meta,
  });

  // TODO: use ag grid destroy
  container.innerHTML = '';

  // set the license key for enterprise version
  if (agGrid.LicenseManager && license)
    agGrid.LicenseManager.setLicenseKey(license);
  
  const debounceDuration =  250;
  options = Object.assign(options, {
    getDocument:          ()      => gw_getDocument(),
    onRowDoubleClicked:   gw_debounce(gw_onRowDoubleClicked , debounceDuration ),
    onSelectionChanged:   gw_debounce(gw_onSelectionChanged , debounceDuration ),
    onRangeSelectionChanged: gw_debounce(gw_onRangeSelectionChanged , debounceDuration ),
    onCellEditingStarted: e       => { gw_onCellEditingsEvent(id, e) },
    onCellEditingStopped: e       => { gw_onCellEditingsEvent(id, e) },
    onCellValueChanged:   e       => { gw_onCellEditingsEvent(id, e) },
    onRowEditingStarted:  e       => { gw_onRowEditingsEvent(id, e) },
    onRowEditingStopped:  e       => { gw_onRowEditingsEvent(id, e) },
    onRowValueChanged:    e       => { gw_onRowEditingsEvent(id, e) },
    onCellClicked:        e       => { gw_onCellClickEvent(id, e) },
    onCellDoubleClicked:  e       => { gw_onCellClickEvent(id, e) },
    onGridReady:          e       => { gw_onReadyEvent(id,e) },
    getRowNodeId:         data    => gw_getRowNodeId(id, data),
    getContextMenuItems:  params  => gw_getContextMenu(id, params),
    rowData: json,
    defaultColDef: {
      sortable: true,
      resizable: true
    },
    columnTypes: {
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
        filter: false,
        cellRendererParams: {
          'IMAGE_WIDTH': '25px',
          'IMAGE_HEIGHT': '25px',
        },
      },

      "basic-image-filterable": {
        cellRenderer: 'BasicImagesRenderer',
        filter: true,
        cellRendererParams: {
          'IMAGE_WIDTH': '25px',
          'IMAGE_HEIGHT': '25px',
        },
      }
    },
    components: {
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
    },
    popupParent: gw_getDocument().body,
    rememberGroupStateWhenNewData: true,
    allowContextMenuWithControlKey: true,
    suppressSetColumnStateEvents: true,
  });

  options.context = Object.assign(options.context, {
    AGridComponentsMetaConfig: json[0].meta
  });

  options.sideBar = JSON.parse(options.sideBar);
  options.sideBar.toolPanels = JSON.parse(options.sideBar.toolPanels);
  
  options.statusBar = JSON.parse(options.statusBar);
  options.statusBar.statusPanels = JSON.parse(options.statusBar.statusPanels);

  if(options.localeText && options.localeText.length) {
    options.localeText = JSON.parse(options.localeText);
  }

  if (
    options.context.hasOwnProperty("navigateToNextCell") &&
    options.context.navigateToNextCell
  ) {
    options.navigateToNextCell = params => {
      return gw_navigateToNextRow(id, params);
    };
  }

  for (let i in options.columnDefs) {

    const def               = options.columnDefs[i];
    const field             = def.field;

    def.cellStyle           = gw_cellStyler;
    def.cellClass           = gw_getCellClass;
    def.toolPanelClass      = gw_getToolPanelClass;
    def.checkboxSelection   = def.checkboxSelection || gw_isShowSelectionCheckbox;
    def.headerCheckboxSelection = def.headerCheckboxSelection || gw_isHeaderCheckboxSelection;

    def.cellClassRules      = gw_getGlobalMeta(id, field, 'CELL_CLASS_RULES', null, true);

    const rowGroup          = Number(gw_getGlobalMeta(id, field, 'ROW_GROUP'));
    const enableValue       = Number(gw_getGlobalMeta(id, field, 'ENABLE_VALUE'));
    const footerValueGetter = gw_getGlobalMeta(id, field, 'FOOTER_VALUE_GETTER');

    def.rowGroup            = rowGroup;
    def.enableRowGroup      = rowGroup ? true : def.enableRowGroup;
    def.rowGroupIndex       = rowGroup ? Number(gw_getGlobalMeta(id, field, 'ROW_GROUP_INDEX')) : null;
    def.enableValue         = enableValue > 0 ? true : false;
    def.showRowGroup        = gw_getGlobalMeta(id, field, 'SHOW_ROW_GROUP', gw_getGlobalMeta(id, field, "LABEL"));
    def.aggFunc             = gw_getGlobalMeta(id, field, 'AGG_FUNC');
    def.allowedAggFuncs     = gw_getGlobalMeta(id, field, 'ALLOWED_AGG_FUNCS', 'sum,min,max,count,avg,first,last').split(',');
    def.valueGetter         = gw_getGlobalMeta(id, field, 'VALUE_GETTER');
    def.valueSetter         = gw_getGlobalMeta(id, field, 'VALUE_SETTER');
    def.hide                = def.headerName.startsWith('__') || gw_getGlobalMeta(id, field, 'HIDE', gw_getGlobalMeta(id, field, 'HIDDEN', false));
    def.suppressToolPanel   = def.headerName.startsWith('__');

    if (footerValueGetter) {
      def.cellRenderer        = 'agGroupCellRenderer';
      def.cellRendererParams  = Object.assign({}, def.cellRendererParams, {
        footerValueGetter: footerValueGetter
      });
    }
  }

  gw_groupColumns(
    JSON.parse(options.context.columnsGroup),
    options.columnDefs
  );

  const enterKeyBehavior = options.context.enterKeyBehavior;

  switch (enterKeyBehavior) {
    case 'next':
      container.addEventListener('keydown', e => {
        gw_onMoveToNextCell(options.context.id, e);
      });
      break;
    default:
      break;
  }

  const instance = new agGrid.Grid(container, options);
  grid.instance = instance;
  grid.options = options;

  console.log(
    `%c Grid [${id}] settings : `
    , 'background: #222; color: #bada55'
    , options
  )
}