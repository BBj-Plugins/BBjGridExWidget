/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { gw_sendEvent, gw_debounce } from "./utilities";
import { gw_getGrid } from "api/utilities";
import {
  GW_EVENT_GRID_STATE_CHANGE
} from "./constants";

/**
 * On Ready Event 
 * 
 * The method will ignore first ready event and then register a debounced state
 * callback to send state events to BBj
 * 
 * @param {String} id The grid's id
 * @param {Object} e  The event payload
 */
export function gw_onReadyEvent(id, e) {

  // register state debounce monitor 
  const stateDebounce = gw_debounce(changeEvent => {

    // We skip the first render state changes
    // if (!gw_getGrid(id).hasOwnProperty('isFirstRender')) {
    // 	gw_getGrid(id).isFirstRender = true;
    // 	return;
    // }

    gw_onStateChanged(id, changeEvent);
  }, 500);

  [
    'sortChanged',
    'filterChanged',
    'columnVisible',
    'columnPinned',
    'columnResized',
    'columnMoved',
    'newColumnsLoaded',
    'gridColumnsChanged',
    'displayedColumnsChanged',
    'virtualColumnsChanged',
    'columnEverythingChanged',
    //'gridSizeChanged',
    'expandOrCollapseAll',
    //'toolPanelVisibleChanged'
  ].forEach(event => {
    gw_getGrid(id).options.api.addEventListener(event, stateDebounce);
  });
}

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