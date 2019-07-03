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
  const grid = gw_getGrid(id);

  if (grid) {
    const options = gw_getGrid(id).options;
    options.api.showLoadingOverlay()
  }
}

/**
 * Show 'no rows' overlay
 * 
 * @param {String} id the grid id
 */
export function gw_showNoRowsOverlay(id) {
  const grid = gw_getGrid(id);

  if (grid) {
    const options = gw_getGrid(id).options;
    options.api.showNoRowsOverlay()
  }
}

/**
 * Clear all overlays
 * 
 * @param {String} id the grid id
 */
export function gw_hideOverlay(id) {
  const grid = gw_getGrid(id);

  if (grid) {
    const options = gw_getGrid(id).options;
    options.api.hideOverlay()
  }
}