/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { gw_getGrid, gw_uuid } from "api/utilities";
import { gw_parseAddCellRange } from "api/cells";

const { deepParseJson } = require("deep-parse-json");

/**
 * The array contains references to created charts from BBj.
 * Every reference is a ChartRef object which provides the application with the 
 * destroyChart() method that is required when the application wants to dispose the chart.
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

/**
 * Add new chart range
 * 
 * @param {String} id grid's id
 * @param {Object} range  bounded or unbounded range model
 * 
 * @return {String} a unique id for the generate chart
 */
export function gw_addChartRange(id, range) {
  const grid = gw_getGrid(id);
  const options = grid.options;
  const pr = deepParseJson(JSON.stringify(range));

  pr.cellRange = gw_parseAddCellRange(options, pr.cellRange);

  const ref = options.api.chartRange(pr);
  const uuid = gw_uuid();
  
  grid.created_charts = grid.created_charts || {};
  grid.created_charts[uuid] = ref;
  
  return uuid;
}

/**
 * Destroy created charts
 * 
 * Destroy already created chart by id or all created charts 
 * when the `uuid` is omitted.
 * 
 * @param {String} id grid's id
 * @param {String} uuid The chart's id
 */
export function gw_destroyChart(id, uuid) {
  const grid = gw_getGrid(id);
  
  if (uuid) {
    if (grid.hasOwnProperty('created_charts') && grid.created_charts.hasOwnProperty(uuid)) {
      grid.created_charts[uuid].destroyChart();
    }
  } else {
  
    if (grid.hasOwnProperty('created_charts')) {
      for (const i in grid.created_charts) {
        if (grid.created_charts.hasOwnProperty(i)) {
          const chart = grid.created_charts[i];
          chart.destroyChart();
        }
      }
    }
  }
}