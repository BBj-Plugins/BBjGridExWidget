/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { gw_getGrid } from "api/utilities";
import { gw_parseAddCellRange } from "api/cells";

const { deepParseJson } = require("deep-parse-json");

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

/**
 * Add new chart range
 * 
 * @param {Number} id grid's id
 * @param {Object} range  bounded or unbounded range model
 */
export function gw_addChartRange(id, range) {
  const pr = deepParseJson(JSON.stringify(range));
  const options = gw_getGrid(id).options;

  pr.cellRange = gw_parseAddCellRange(options , pr.cellRange);
  options.api.chartRange(pr);
}