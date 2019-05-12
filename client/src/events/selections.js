/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

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
export function gw_onRowDoubleClicked( e) {
  console.log(e);
  const context = e.api.gridOptionsWrapper.gridOptions.context;
  gw_sendEvent(context.id, {
    'type': 'gw.rowDoubleClick',
    'detail': ''
  });  
}

/**
 * A handler for the grid `selectionChanged` event
 * 
 * @param {Object} e 
 * 
 * @listens agGrid.selectionChanged
 * @fires gw.rowSelecte
 */
export function gw_onSelectionChanged(e) {
  const context = e.api.gridOptionsWrapper.gridOptions.context;
  gw_sendEvent(context.id, {
    'type': 'gw.rowSelect',
    'detail': ''
  });
}

/**
 * A handler for the grid `rangeSelectionChanged` event
 * 
 * @param {Object} e 
 * 
 * @listens agGrid.rangeSelectionChanged
 * @fires gw.rangeSelection
 */
export function gw_onRangeSelectionChanged(e){
  const context = e.api.gridOptionsWrapper.gridOptions.context;
  if(e.finished) {
    gw_sendEvent(context.id, {
      'type': 'gw.rangeSelection',
      'detail': ''
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