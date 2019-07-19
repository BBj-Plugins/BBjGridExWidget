/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

/**
 * Return the chart toolbar items defined in the grid's context 
 * 
 * @param {Object} params 
 * @returns {Array} array of supported chart items
 */
export function gw_getChartToolbarItems(params) {
  return params
    .api
    .gridOptionsWrapper
    .gridOptions
    .context
    .chartToolbarItems || [];
}