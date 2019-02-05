/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

/**
 * An array of selected rows collected 
 * be firing the grid `rowSelected` event 
 */
export let gw_selectedRowsStack = [];

/**
 * A handler for the grid `rowSelected` event.
 * 
 * The function will add all selected or deselected rows to the 
 * `gw_selectedRowsStack` stack.
 * 
 * @param {Object} e 
 * 
 * @listens agGrid.rowSelected
 */
export function gw_onRowSelected(id, e) {
  gw_selectedRowsStack.push(e);
}

/**
 * An handler for the grid `rowDoubleClicked` event
 * 
 * The function will send a bbj event with `GW_NODE` as payload
 * 
 * @param {Objecr} e 
 * 
 * @listens agGrid.rowDoubleClicked
 * @fires gw.rowDoubleClick
 */
export function gw_onRowDoubleClicked(id, e) {
  const node = gw_parseNodeFromEvent(e);

  if (node) {
    gw_sendEvent(id, {
      'type': 'gw.rowDoubleClick',
      'detail': [[node]]
    });
  }
}

/**
 * A handler for the grid `selectionChanged` event
 * 
 * @param {Object} e 
 * 
 * @listens agGrid.selectionChanged
 * @fires gw.rowSelecte
 */
export function gw_onSelectionChanged(id, e) {
  let details = [];

  gw_selectedRowsStack.forEach(r => {
    const detail = gw_parseNodeFromEvent(r);
    if (detail) details.push(detail);
  });

  if (details.length) {
    // empty the stack
    gw_selectedRowsStack = [];
    gw_sendEvent(id, {
      'type': 'gw.rowSelecte',
      'detail': [details]
    });
  }
}

/**
 * A handler for the grid `cellClickEvent` & `cellDoubleClicked` event
 * 
 * @param {Object} e 
 * 
 * @listens agGrid.cellClickEvent
 * @listens agGrid.cellDoubleClicked
 * 
 * @fires gw.cellClicked
 * @fires gw.cellDoubleClicked
 */
export function gw_onCellClickEvent(id, e) {
  const parsed = gw_parseNodeFromEvent(e);

  if (parsed) {
    gw_sendEvent(id, {
      'type': `gw.${e.type}`,
      'detail': [[
        { row: parsed, value: gw_escape(e.value), column: e.column.colId }
      ]]
    });
  }
}
