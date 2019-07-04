/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { gw_getGrid } from "./utilities";

/**
 * Show loading overlay
 * 
 * @param {String} id the grid id
 */
export function gw_showLoadingOverlay(id) {
  gw_getGrid(id)
    .options
    .api
    .showLoadingOverlay();
}

/**
 * Show 'no rows' overlay
 * 
 * @param {String} id the grid id
 */
export function gw_showNoRowsOverlay(id) {
  gw_getGrid(id)
    .options
    .api
    .showNoRowsOverlay();
}

/**
 * Clear all overlays
 * 
 * @param {String} id the grid id
 */
export function gw_hideOverlay(id) {
  gw_getGrid(id)
    .options
    .api
    .hideOverlay();
}