/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@Basis.AgGridComponents.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_getContextMenu } from "./menus";
import { gw_getGrid, gw_getDocument } from "./utilities";
import {
  gw_onRowDoubleClicked,
  gw_onSelectionChanged,
  gw_onCellClickEvent,
  gw_onCellEditingEvent,
  gw_onRowEditingEvent,
  gw_onReadyEvent,
  gw_debounce
} from "events";

const { deepParseJson } = require("deep-parse-json");
const template = require('lodash/template');

/**
 * Parse Column Definitions 
 * 
 * Parse the column definitions string and return 
 * an object which can be passed to the grid
 * 
 * @param {String} definitions Column definitions as JsonString
 * 
 * @return {Object} options object
 */
export function gw_parseColumnDefinitions(definitions) {
  const deepParsedDefinitions = deepParseJson(JSON.stringify(definitions));
  const id                    = deepParsedDefinitions.context.id;
  const debounceDuration      = 250;
  const options = {
    // deep parse the definitions for any nested json
    ...deepParsedDefinitions ,
    ...{
      deltaColumnMode:                    true,
      getDocument:            ()     =>   gw_getDocument(),
      popupParent:                        gw_getDocument().body,
      onRowDoubleClicked:                 gw_debounce(gw_onRowDoubleClicked, debounceDuration),
      onSelectionChanged:                 gw_debounce(gw_onSelectionChanged, debounceDuration),
      onCellEditingStarted:   e      => { gw_onCellEditingEvent(id, e) },
      onCellEditingStopped:   e      => { gw_onCellEditingEvent(id, e) },
      onCellValueChanged:     e      => { gw_onCellEditingEvent(id, e) },
      onRowEditingStarted:    e      => { gw_onRowEditingEvent(id, e)  },
      onRowEditingStopped:    e      => { gw_onRowEditingEvent(id, e)  },
      onRowValueChanged:      e      => { gw_onRowEditingEvent(id, e)  },
      onCellClicked:          e      => { gw_onCellClickEvent(id, e)   },
      onCellDoubleClicked:    e      => { gw_onCellClickEvent(id, e)   },
      onGridReady:            e      => { gw_onReadyEvent(id, e)       },
      getRowNodeId:           data   =>   gw_getRowNodeId(id, data),
      getContextMenuItems:    params =>   gw_getContextMenu(id, params),
      components: {
        "BasicBooleansRenderer"       : Basis.AgGridComponents.BasicBooleansRenderer,
        "BasicBooleansEditor"         : Basis.AgGridComponents.BasicBooleansEditor,
        "BasicBooleansFilter"         : Basis.AgGridComponents.BasicBooleansFilter,
        "BasicNumbersEditor"          : Basis.AgGridComponents.BasicNumbersEditor,
        "BasicDateTimesEditor"        : Basis.AgGridComponents.BasicDateTimesEditor,
        "BasicDateTimesFilter"        : Basis.AgGridComponents.BasicDateTimesFilter,
        "BasicImagesRenderer"         : Basis.AgGridComponents.BasicImagesRenderer,
        // lodash template render
        "GWCustomHTMLTemplateRenderer": params => {
          const compiled = template(params.__TEMPLATE__);
          return compiled({ params: params });
        }
      }
    }
  };

  if (
    options.context.hasOwnProperty("navigateToNextCell") &&
    options.context.navigateToNextCell
  ) {
    options.navigateToNextCell = params => { return gw_navigateToNextRow(id, params) };
  }

  for (let i in options.columnDefs) {
    const def = options.columnDefs[i];

    def.checkboxSelection       = def.checkboxSelection       || gw_isShowSelectionCheckbox;
    def.headerCheckboxSelection = def.headerCheckboxSelection || gw_isHeaderCheckboxSelection;
  }

  return options;
}

export function gw_sizeColumnsToFit(id) {
  const options = gw_getGrid(id).options;
  options.api.sizeColumnsToFit();
}

export function gw_setVisibleColumn(id, columnId) {
  const options = gw_getGrid(id).options;
  options.api.ensureColumnVisible(columnId);
}

/**
 * Set Column Width
 *
 * @param {String} id The grid id
 * @param {String} columnId The column id
 * @param {Number|String} width The new column width
 */
export function gw_setColumnWidth(id, columnId, width) {
  const grid = gw_getGrid(id);

  if (grid) {
    const options = gw_getGrid(id).options;
    options.columnApi.setColumnWidth(columnId, Number(width));
  }
}
/**
 * Pin Column
 *
 * Pin a column to a specific direction
 *
 * @param {String} id The grid id
 * @param {String} columnId The column id
 * @param {String} pin The pin direction
 */
export function gw_pinColumn(id, columnId, pin) {
  const grid = gw_getGrid(id);

  if (grid) {
    const options = gw_getGrid(id).options;
    options.columnApi.setColumnPinned(columnId, pin);
  }
}

/**
 * Move Column
 *
 * Move column to a specific index
 *
 * @param {String} id The grid id
 * @param {String} columnId The column id
 * @param {Number|String} toIndex The new column index
 */
export function gw_moveColumn(id, columnId, toIndex) {
  const grid = gw_getGrid(id);

  if (grid) {
    const options = gw_getGrid(id).options;
    options.columnApi.moveColumn(columnId, toIndex);
  }
}

/**
 * Show / Hide selection checkbox based on the first column
 *
 * The function make sure that the selection checkbox is always shown on the
 * first column
 *
 * @param {Object} param
 *
 * @return {Boolean} true when first column , false if not the first column or if the
 *                   grid's `Context.showSelectionCheckbox` is false
 */
export function gw_isShowSelectionCheckbox(param) {
  if (!param.context.showSelectionCheckbox) return false;

  const columns = param.columnApi.getAllDisplayedVirtualColumns();

  return columns[0].colDef.field === param.colDef.field;
}

/**
 * Show / Hide header selection checkbox based on the first column
 *
 * The function make sure that the header selection checkbox is always shown on the
 * first column
 *
 * @param {Object} param
 *
 * @return {Boolean} true when first column , false if not the first column or if the
 *                   grid's `Context.showHeaderSelectionCheckbox` is false
 */
export function gw_isHeaderCheckboxSelection(param) {
  const context = param.api.gridOptionsWrapper.gridOptions.context;

  if (!context.showHeaderSelectionCheckbox) return false;

  const columns = param.columnApi.getAllDisplayedVirtualColumns();

  return columns[0].colDef.field === param.colDef.field;
}