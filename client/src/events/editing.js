/* eslint-disable no-prototype-builtins */
/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@basis.cloud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_sendEvent, gw_parseNodeFromEvent } from './utilities'
import { gw_escape, gw_getGrid } from 'api/utilities'
import {
  GW_EVENT_CELL_EDITING_STARTED,
  GW_EVENT_CELL_EDITING_STOPPED,
  GW_EVENT_CELL_VALUE_CHANGED,
  GW_EVENT_ROW_EDITING_STARTED,
  GW_EVENT_ROW_EDITING_STOPPED,
  GW_EVENT_ROW_VALUE_CHANGED,
} from './constants'

const CELL_EDITING_EVENTS_MAP = {
  cellEditingStarted: GW_EVENT_CELL_EDITING_STARTED,
  cellEditingStopped: GW_EVENT_CELL_EDITING_STOPPED,
  cellValueChanged: GW_EVENT_CELL_VALUE_CHANGED,
}

const ROW_EDITING_EVENTS_MAP = {
  rowEditingStarted: GW_EVENT_ROW_EDITING_STARTED,
  rowEditingStopped: GW_EVENT_ROW_EDITING_STOPPED,
  rowValueChanged: GW_EVENT_ROW_VALUE_CHANGED,
}

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
  const value = e.hasOwnProperty('newValue')
    ? gw_escape(e.newValue)
    : gw_escape(e.value)
  const oldValue = e.hasOwnProperty('oldValue')
    ? gw_escape(e.oldValue)
    : e.hasOwnProperty('newValue')
    ? gw_escape(e.newValue)
    : gw_escape(e.value)

  if (value == oldValue && e.type === 'cellValueChanged') {
    return
  }

  const parsed = gw_parseNodeFromEvent(e)
  const type = e.type
  const colId = e.column.colId

  if (parsed) {
    gw_sendEvent(
      gw_getGrid(id).options.context,
      {
        type: `gw.${type}`,
        detail: JSON.stringify({
          r: { ...parsed, ...{ cr: e.data } }, // row (we always include the client row data)
          v: value, // new value
          o: oldValue, // old value
          c: colId, // column
        }),
      },
      CELL_EDITING_EVENTS_MAP[type]
    )
  }
}

/**
 * An handler for the grid `rowEditingStarted` , `rowEditingStopped` and `rowValueChanged` events
 *
 * @param {String} id The grid's id
 * @param {Object} e  The event payload
 *
 * @listens agGrid.rowEditingStarted
 * @listens agGrid.rowEditingStopped
 * @listens agGrid.rowValueChanged
 *
 * @fires gw.rowEditingStarted
 * @fires gw.rowEditingStopped
 * @fires gw.rowValueChanged
 */
export function gw_onRowEditingEvent(id, e) {
  const parsed = gw_parseNodeFromEvent(e)

  if (parsed) {
    const type = e.type
    gw_sendEvent(
      gw_getGrid(id).options.context,
      {
        type: `gw.${e.type}`,
        detail: JSON.stringify({ ...parsed, ...{ cr: e.data } }), // row (we always include the client row data)
      },
      ROW_EDITING_EVENTS_MAP[type]
    )
  }
}
