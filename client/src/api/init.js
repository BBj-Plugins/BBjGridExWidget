/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@Basis.AgGridComponents.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import 'expose-loader?Basis.AgGridComponents!ag-grid-components/dist/agc-basic.bundle.js';
import { gw_getContextMenu } from "./menus"
import {
  gw_isShowSelectionCheckbox,
  gw_isHeaderCheckboxSelection
} from "./columns"
import {
  gw_getRowNodeId,
  gw_navigateToNextRow
} from "./rows"
import {
  gw_getDocument,
  gw_addGrid
} from "./utilities"
import {
	gw_onRowDoubleClicked,
	gw_onSelectionChanged,
	gw_onCellClickEvent,
	gw_onCellEditingEvent,
	gw_onRowEditingEvent,
	gw_onReadyEvent,
	gw_debounce
} from "events";


const { deepParseJson } = require('deep-parse-json')
const template = require('lodash/template');

export function gw_setData(json, options, license) {

  // first we deep parse the options for any nested json
  options = deepParseJson(JSON.stringify(options));

  const id = options.context.id;
  const meta = Array.isArray(json) && json.length ? json[0].meta : {};
  const container = gw_getDocument().getElementById(options.context.id);
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

  const debounceDuration = 250;
  options = Object.assign(options, {
    getDocument: () => gw_getDocument(),
    onRowDoubleClicked: gw_debounce(gw_onRowDoubleClicked, debounceDuration),
    onSelectionChanged: gw_debounce(gw_onSelectionChanged, debounceDuration),
    onCellEditingStarted: e => { gw_onCellEditingEvent(id, e) },
    onCellEditingStopped: e => { gw_onCellEditingEvent(id, e) },
    onCellValueChanged: e => { gw_onCellEditingEvent(id, e) },
    onRowEditingStarted: e => { gw_onRowEditingEvent(id, e) },
    onRowEditingStopped: e => { gw_onRowEditingEvent(id, e) },
    onRowValueChanged: e => { gw_onRowEditingEvent(id, e) },
    onCellClicked: e => { gw_onCellClickEvent(id, e) },
    onCellDoubleClicked: e => { gw_onCellClickEvent(id, e) },
    onGridReady: e => { gw_onReadyEvent(id, e) },
    getRowNodeId: data => gw_getRowNodeId(id, data),
    getContextMenuItems: params => gw_getContextMenu(id, params),
    deltaColumnMode: true,
    rowData: json,
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

      // lodash template render
      'GWCustomHTMLTemplateRenderer': (params) => {
        const compiled = template(params.__TEMPLATE__);
        return compiled({ params: params });
      }
    },
    popupParent: gw_getDocument().body
  });

  if (
    options.context.hasOwnProperty("navigateToNextCell") &&
    options.context.navigateToNextCell
  ) {
    options.navigateToNextCell = params => {
      return gw_navigateToNextRow(id, params);
    };
  }

  for (let i in options.columnDefs) {

    const def = options.columnDefs[i];
    const field = def.field;

    def.checkboxSelection = def.checkboxSelection || gw_isShowSelectionCheckbox;
    def.headerCheckboxSelection = def.headerCheckboxSelection || gw_isHeaderCheckboxSelection;
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