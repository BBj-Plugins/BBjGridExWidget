/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@Basis.AgGridComponents.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_getGrid } from "./utilities";

const { deepParseJson } = require("deep-parse-json");

/**
 * Extend the column definitions
 * 
 * Extend the column definitions with options which can not be handled in BBj
 * (ex: attaching callbacks)
 * 
 * @param {Array} definitions array of column definitions
 */
export function gw_extendColumnDefinitions(definitions) {

  for (let i in definitions) {
    const def = definitions[i];

    def.checkboxSelection       = def.checkboxSelection       || gw_isShowSelectionCheckbox;
    def.headerCheckboxSelection = def.headerCheckboxSelection || gw_isHeaderCheckboxSelection;
  }
}

/**
 * Update the column definitions 
 * 
 * @param {String} id The grid id
 * @param {Array} definitions array of column definitions
 */
export function gw_setColumnDefinitions(id, definitions) {
  const grid = gw_getGrid(id);

  if (grid) {
    const deepParsedDefinitions = deepParseJson(JSON.stringify(definitions));
    gw_extendColumnDefinitions(deepParsedDefinitions);
    
    grid.options.api.setColumnDefs(deepParsedDefinitions);
    grid.options.columnDefs = deepParsedDefinitions;
  }
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

/**
 * Enable row grouping for columns
 * 
 * @param {String} id the grid id
 * @param {String} columns  a comma separated string of columns
 * @param {Boolean} set  When true , `setRowGroupColumns` will be used , `addRowGroupColumns` otherwise
 */
export function gw_addRowGroupColumn(id, columns ,set) {
  const grid = gw_getGrid(id);

  if (grid) {
    const options = gw_getGrid(id).options;
    const method = set ? "setRowGroupColumns" : "addRowGroupColumns";
    options.columnApi[method](
      columns.split(",").map(i => i.trim())
    );
  }
}

/**
 * Disable row grouping for columns
 * 
 * @param {String} id the grid id
 * @param {String} columns  a comma separated string of columns
 */
export function gw_removeRowGroupColumn(id, columns) {
  const grid = gw_getGrid(id);

  if (grid) {
    const options = gw_getGrid(id).options;
    options.columnApi.removeRowGroupColumns(
      columns.split(",").map(i => i.trim())
    );
  }
}