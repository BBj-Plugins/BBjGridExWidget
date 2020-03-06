/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@Basis.AgGridComponents.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_getGrid } from "./utilities";
import { gw_parseNode } from "events/utilities";

const { deepParseJson } = require("deep-parse-json");

export function gw_setQuickFilter(id, filter) {
  gw_getGrid(id).options.api.setQuickFilter(filter);
}

export function gw_expandAll(id) {
  gw_getGrid(id).options.api.expandAll();
}

export function gw_collapseAll(id) {
  gw_getGrid(id).options.api.collapseAll();
}
/**
 * Ensures the row index is visible by vertically scrolling the grid
 *
 * @param {String} id  the grid's id
 * @param {String|Number} index the row index or key
 * @param {String} position {'top', 'middle', 'bottom', undefined/null}
 */
export function gw_ensureIndexVisible(id, index, position) {
  const api = gw_getGrid(id).options.api;
  const node = api.getRowNode(index);

  if (node) api.ensureNodeVisible(node, position);
  else api.ensureIndexVisible(Number(index), position);
}

export function gw_navigateToNextRow(id, params) {
  const options = gw_getGrid(id).options;
  let previousCell = params.previousCellPosition;
  let suggestedNextCell = params.nextCellPosition;

  const KEY_UP = 38;
  const KEY_DOWN = 40;
  const KEY_LEFT = 37;
  const KEY_RIGHT = 39;

  switch (params.key) {
    case KEY_DOWN:
      // set selected cell on current cell + 1
      options.api.forEachNode(node => {
        if (previousCell.rowIndex + 1 === node.rowIndex) {
          node.setSelected(true);
        }
      });
      return suggestedNextCell;
    case KEY_UP:
      // set selected cell on current cell - 1
      options.api.forEachNode(node => {
        if (previousCell.rowIndex - 1 === node.rowIndex) {
          node.setSelected(true);
        }
      });
      return suggestedNextCell;
    case KEY_LEFT:
    case KEY_RIGHT:
      return suggestedNextCell;
    default:
      throw new Error("You have super strange keyboard");
  }
}

/**
 * Returns a row based on `getRowNodeId` config defined in the grid context
 *
 * @param {String} id the grid's id
 * @param {Object} data  the data row
 */
export function gw_getRowNodeId(id, data) {
  return data[gw_getGrid(id).options.context.getRowNodeId];
}

/**
 * Update the grid's data set
 *
 * @param {String} id the grid's id
 * @param {Object} json json object which contains the new dataset to update the grid
 */
export function gw_setRowsData(id, json) {
  const options = gw_getGrid(id).options;

  options.api.setRowData(json);
  options.rowData = json;
}

/**
 * Update a row on the grid
 *
 * @param {String} id the grid's id
 * @param {Object} row  a row data
 */
export function gw_setRowData(id, row) {
  const options = gw_getGrid(id).options;

  options.api.updateRowData({ update: [row] });
}

/**
 * Remove one or more rows from the grid
 *
 * @param {String} id the grid's id
 * @param {Array} indexes  an array of rows indexes or an array of rows keys
 */
export function gw_removeRows(id, indexes) {
  const options = gw_getGrid(id).options;
  let items = [];

  indexes.forEach(index => {
    items.push(options.api.getRowNode(index).data);
  });

  options.api.updateRowData({ remove: items });
}

/**
 * Add a row to grid at the given index
 *
 * @param {String} id the grid's id
 * @param {Number} index  The insertion position
 * @param {Array} rows  An array of rows to add
 */
export function gw_addRows(id, index, rows) {
  const options = gw_getGrid(id).options;

  options.api.updateRowData({ add: rows, addIndex: index });
}

/**
 * Set the height of all rows
 *
 * @param {String} id the grid id
 * @param {Number} height the row height
 */
export function gw_setRowsHeight(id, height) {
  const options = gw_getGrid(id).options;

  options.api.forEachNode(row => {
    row.setRowHeight(height);
  });
  options.api.onRowHeightChanged();
}

/**
 * Set the given row height
 *
 * @param {String} id the grid id
 * @param {Number} index the row index
 * @param {Number} height the new height
 */
export function gw_setRowHeight(id, index, height) {
  const options = gw_getGrid(id).options;
  const row = options.api.getDisplayedRowAtIndex(index);

  if (row) {
    row.setRowHeight(height);
    options.api.onRowHeightChanged();
  } else {
    console.warn(`Failed to set height for row ${index}. Row can not be found`);
  }
}

/**
 * Select row or more based on the row id or index
 *
 * @param {String} id the grid's id
 * @param {Array} rows an array of row keys and indexes to select
 */
export function gw_setSelectedRows(id, rows) {
  const options = gw_getGrid(id).options;
  const api = options.api;

  api.forEachNodeAfterFilterAndSort(node => {
    if (
      rows.indexOf(String(node.rowIndex)) > -1 ||
      rows.indexOf(String(node.id)) > -1
    ) {
      node.setSelected(true);
      node.expanded = true;
    }
  });

  api.onGroupExpandedOrCollapsed();
}

export function gw_selectAll(id, filtered) {
  const options = gw_getGrid(id).options;

  if (1 === filtered) {
    options.api.selectAllFiltered();
  } else {
    options.api.selectAll();
  }
}

export function gw_deselectAll(id, filtered) {
  const options = gw_getGrid(id).options;

  if (1 === filtered) {
    options.api.deselectAllFiltered();
  } else {
    options.api.deselectAll();
  }
}

/**
 * Get the current selected rows
 *
 * @param {Number} id grid's id
 *
 * @returns {String}  selected rows as JSON
 */
export function gw_getSelectedRows(id) {
  const options = gw_getGrid(id).options;
  const nodes = options.api.getSelectedNodes();
  let parsed = [];

  nodes.forEach(node => {
    parsed.push(gw_parseNode(node, options.context));
  });

  return JSON.stringify(parsed);
}

/**
 * Get the last selected row
 *
 * @param {Number} id grid's id
 *
 * @returns {String} selected row as JSON
 */
export function gw_getSelectedRow(id) {
  const rows = JSON.parse(gw_getSelectedRows(id));

  if (rows.length) {
    return JSON.stringify(rows[rows.length - 1]);
  }

  return "";
}
