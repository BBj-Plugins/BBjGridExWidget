/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { gw_sendEvent } from "./utilities";
import { gw_getGrid } from "api/utilities";
import {
  GW_EVENT_GRID_STATE_CHANGE
} from "./constants";

/**
 * An handler for the grid `stateChanged` events
 * 
 * @param {String} id The grid's id
 * @param {Object} e  The event payload
 * 
 * @listens agGrid.stateChanged
 * @listens agGrid.rowEditingStopped
 * 
 * @fires gw.stateChanged
 */
export function gw_onStateChanged(id, e) {
  gw_sendEvent(
    gw_getGrid(id).options.context,
    {
      'type': 'gw.stateChanged',
      'detail': []
    },
    GW_EVENT_GRID_STATE_CHANGE
  );
}