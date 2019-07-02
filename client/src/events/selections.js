/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { gw_sendEvent, gw_parseNodeFromEvent } from "./utilities";
import { gw_escape, gw_getGrid } from "api/utilities";
import {
  GW_EVENT_ROW_CLICK,
  GW_EVENT_ROW_DOUBLE_CLICK,
  GW_EVENT_CELL_CLICK,
  GW_EVENT_CELL_DOUBLE_CLICK
} from "./constants";

/**
 * An handler for the grid `rowDoubleClicked` event
 * 
 * The function will send a bbj event with `GW_NODE` as payload
 * 
 * @param {Object} e The event's payload
 * 
 * @listens agGrid.rowDoubleClicked
 * @fires gw.rowDoubleClick
 */
export function gw_onRowDoubleClicked(e) {
  const context = e.api.gridOptionsWrapper.gridOptions.context;
  gw_sendEvent(context, {
    'type': 'gw.rowDoubleClick',
    'detail': ''
  }, [GW_EVENT_ROW_DOUBLE_CLICK]);
}

/**
 * A handler for the grid `selectionChanged` event
 * 
 * @param {Object} e  The event payload
 * 
 * @listens agGrid.selectionChanged
 * @fires gw.rowSelect
 */
export function gw_onSelectionChanged(e) {
  const context = e.api.gridOptionsWrapper.gridOptions.context;
  gw_sendEvent(context, {
    'type': 'gw.rowSelect',
    'detail': ''
  }, [GW_EVENT_ROW_CLICK]);
}

/**
 * A handler for the grid `cellClickEvent` & `cellDoubleClicked` event
 * 
 * @param {String} id The grid's id
 * @param {Object} e  The event payload
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
    gw_sendEvent(gw_getGrid(id).options.context, {
      'type': `gw.${e.type}`,
      'detail': JSON.stringify({
        row: parsed,
        value: gw_escape(e.value),
        oldValue: gw_escape(e.value),
        column: e.column.colId
      })
    }, [GW_EVENT_CELL_CLICK, GW_EVENT_CELL_DOUBLE_CLICK]);
  }
}
