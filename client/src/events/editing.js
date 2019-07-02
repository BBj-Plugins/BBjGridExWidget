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
  GW_EVENT_CELL_EDITING_STARTED,
  GW_EVENT_CELL_EDITING_STOPPED,
  GW_EVENT_CELL_VALUE_CHANGED,
  GW_EVENT_ROW_EDITING_STARTED,
  GW_EVENT_ROW_EDITING_STOPPED
} from "./constants";

/**
 * An handler for the grid `cellEditingStarted` , `cellEditingStopped` and 
 * `cellValueChanged` events
 * 
 * @param {String} id The grid's id
 * @param {Object} e  The event payload
 * 
 * @listens agGrid.cellEditingStarted
 * @listens agGrid.cellEditingStopped
 * @listens agGrid.cellValueChanged
 * 
 * @fires gw.cellEditingStarted
 * @fires gw.cellEditingStopped
 * @fires gw.cellValueChanged
 */
export function gw_onCellEditingEvent(id, e) {

  const value = gw_escape(e.newValue) || gw_escape(e.value);
  const oldValue = gw_escape(e.oldValue) || gw_escape(e.newValue) || gw_escape(e.value);

  if (value === oldValue) return;

  const parsed = gw_parseNodeFromEvent(e);
  const type = e.type;
  const colId = e.column.colId;

  if (parsed) {
    gw_sendEvent(
      gw_getGrid(id).options.context,
      {
        'type': `gw.${e.type}`,
        'detail': JSON.stringify({
          row: parsed,
          value,
          oldValue,
          column: colId
        })
      },
      [
        GW_EVENT_CELL_EDITING_STARTED,
        GW_EVENT_CELL_EDITING_STOPPED,
        GW_EVENT_CELL_VALUE_CHANGED
      ]
    );
  }
}

/**
 * An handler for the grid `rowEditingStarted` , `rowEditingStopped` events
 * 
 * @param {String} id The grid's id
 * @param {Object} e  The event payload
 * 
 * @listens agGrid.rowEditingStarted
 * @listens agGrid.rowEditingStopped
 * 
 * @fires gw.rowEditingStarted
 * @fires gw.rowEditingStopped
 */
export function gw_onRowEditingEvent(id, e) {
  const parsed = gw_parseNodeFromEvent(e);

  if (parsed) {
    gw_sendEvent(
      gw_getGrid(id).options.context,
      {
        'type': `gw.${e.type}`,
        'detail': JSON.stringify(parsed)
      },
      [
        GW_EVENT_ROW_EDITING_STARTED,
        GW_EVENT_ROW_EDITING_STOPPED
      ]
    );
  }
}

