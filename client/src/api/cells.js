/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { gw_getGrid } from "./utilities";

/**
 * Start cell editing
 * 
 * @param {String} id The grid's id 
 * @param {String|number} row The row index
 * @param {String} colKey The column's key
 * @param {String|Number} key  Key press
 * @param {String} char 
 */
export function gw_startEditingCell(id, row, colKey, key, char) {
  const options = gw_getGrid(id).options;

  options.api.setFocusedCell(Number(row), colKey);
  options.api.startEditingCell({
    rowIndex: Number(row),
    colKey: colKey,
    keyPress: Number(key),
    charPress: char
  });
}

/**
 * Stop cell editing 
 * 
 * @param {String} id The grid's id 
 * @param {Boolean} cancel when true cancel edits , save edits otherwise
 */
export function gw_stopEditing(id, cancel) {
  gw_getGrid(id)
    .options
    .api
    .stopEditing(cancel);
}

export function gw_editNextCell(id) {
  gw_getGrid(id)
    .options
    .api
    .tabToNextCell();
};

export function gw_editPreviousCell(id) {
  gw_getGrid(id)
    .options
    .api
    .tabToPreviousCell();
}

/**
 * Set Focus on the given row and column
 * 
 * @param {String} id The grid's id 
 * @param {String|Number} row The row's index/id
 * @param {String} column The column id
 */
export function gw_setFocusedCell(id, row, column) {
  const options = gw_getGrid(id).options;
  const r = !row ? 0 : (Number.isInteger(+row) ? +row : options.api.getRowNode(row).rowIndex);
  const c = column ? column : options.columnApi.getAllGridColumns()[0].colId;
  console.log(c,r)
  gw_getGrid(id)
    .options
    .api
    .setFocusedCell(r, c);
}