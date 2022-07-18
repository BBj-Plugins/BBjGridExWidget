/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@Basis.AgGridComponents.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_getGrid } from './utilities'
import { gw_parseNode } from 'events/utilities'
import { gw_executeExpression } from '../expression'

export function gw_setQuickFilter(id, filter) {
  gw_getGrid(id).options.api.setQuickFilter(filter)
}

export function gw_expandAll(id) {
  gw_getGrid(id).options.api.expandAll()
}

export function gw_collapseAll(id) {
  gw_getGrid(id).options.api.collapseAll()
}
/**
 * Ensures the row index is visible by vertically scrolling the grid
 *
 * @param {String} id  the grid's id
 * @param {String|Number} index the row index or key
 * @param {String} position {'top', 'middle', 'bottom', undefined/null}
 */
export function gw_ensureIndexVisible(id, index, position) {
  const api = gw_getGrid(id).options.api
  const node = api.getRowNode(index)

  if (node) {
    api.ensureNodeVisible(node, position)
  } else {
    api.ensureIndexVisible(Number(index), position)
  }
}

export function gw_navigateToNextRow(id, params) {
  const options = gw_getGrid(id).options
  let previousCell = params.previousCellPosition
  let suggestedNextCell = params.nextCellPosition

  const KEY_UP = 'ArrowUp'
  const KEY_DOWN = 'ArrowDown'
  const KEY_LEFT = 'ArrowLeft'
  const KEY_RIGHT = 'ArrowRight'

  switch (params.key) {
    case KEY_DOWN:
      // set selected cell on current cell + 1
      if (suggestedNextCell && !suggestedNextCell.rowPinned) {
        if (previousCell.rowPinned) {
          const row = options.api.getDisplayedRowAtIndex(
            options.api.getFirstDisplayedRow()
          )
          if (row) {
            row.setSelected(true)
          }
        } else {
          options.api.forEachNode(node => {
            if (previousCell.rowIndex + 1 === node.rowIndex) {
              node.setSelected(true)
            }
          })
        }
      }

      return suggestedNextCell
    case KEY_UP:
      // set selected cell on current cell - 1
      if (suggestedNextCell && !suggestedNextCell.rowPinned) {
        if (previousCell.rowPinned) {
          const row = options.api.getDisplayedRowAtIndex(
            options.api.getLastDisplayedRow()
          )
          if (row) {
            row.setSelected(true)
          }
        } else {
          options.api.forEachNode(node => {
            if (previousCell.rowIndex - 1 === node.rowIndex) {
              node.setSelected(true)
            }
          })
        }
      }
      return suggestedNextCell
    case KEY_LEFT:
    case KEY_RIGHT:
      return suggestedNextCell
    default:
      throw new Error('You have super strange keyboard')
  }
}

/**
 * Returns a row based on `getRowNodeId` config defined in the grid context
 *
 * @param {String} id the grid's id
 * @param {Object} grid  the grid object
 */
export function gw_getRowNodeId(_id, grid) {
  const rowNodeId = grid.api.gridOptionsWrapper.gridOptions.context.getRowNodeId
  return grid.data[rowNodeId]
}

/**
 * Update the grid's data set
 *
 * @param {String} id the grid's id
 * @param {Object} json json object which contains the new dataset to update the grid
 */
export function gw_setRowData(id, json) {
  const options = gw_getGrid(id).options

  options.api.setRowData(json)
  options.rowData = json
}

/**
 * Update the grid with a transaction object
 *
 * @param {String} id  the grid id
 * @param {Object} transaction
 */
export function gw_updateRowData(id, transaction, batchUpdate) {
  const options = gw_getGrid(id).options

  if (transaction.remove.length) {
    let items = []

    transaction.remove.forEach(index => {
      items.push(options.api.getRowNode(index).data)
    })

    transaction.remove = items
  }

  if (transaction.add.length) {
    transaction.add = transaction.add.reverse()
  }

  if (!batchUpdate) {
    options.api.applyTransaction(transaction)
  } else {
    options.api.applyTransactionAsync(transaction)
  }
}

/**
 * Set the height of all rows
 *
 * @param {String} id the grid id
 * @param {Number} height the row height
 */
export function gw_setRowsHeight(id, height) {
  const options = gw_getGrid(id).options
  const api = options.api

  api.forEachNode(row => {
    row.setRowHeight(height)
  })

  api.onRowHeightChanged()
}

/**
 * Set the given row height
 *
 * @param {String} id the grid id
 * @param {Number|String} index the row index or key
 * @param {Number} height the new height
 */
export function gw_setRowHeight(id, index, height) {
  const options = gw_getGrid(id).options
  const api = options.api
  const row = api.getRowNode(index) || api.getDisplayedRowAtIndex(index)

  if (row) {
    row.setRowHeight(height)
    options.api.onRowHeightChanged()
  } else {
    console.warn(`Failed to set height for row ${index}. Row cannot be found`)
  }
}

/**
 * Reset the row height
 *
 * @param {String} id  the grid id
 */
export function gw_resetRowHeights(id) {
  gw_getGrid(id).options.api.resetRowHeights()
}

/**
 * Select row or more based on the row id or index
 *
 * @param {String} id the grid's id
 * @param {Array} rows an array of row keys and indexes to select
 */
export function gw_setSelectedRows(id, rows) {
  const options = gw_getGrid(id).options
  const api = options.api

  api.forEachNodeAfterFilterAndSort(node => {
    if (
      rows.indexOf(String(node.rowIndex)) > -1 ||
      rows.indexOf(String(node.id)) > -1
    ) {
      node.setSelected(true)
      node.expanded = true
    }
  })

  api.onGroupExpandedOrCollapsed()
}

export function gw_selectAll(id, filtered) {
  const options = gw_getGrid(id).options

  if (1 === filtered) {
    options.api.selectAllFiltered()
  } else {
    options.api.selectAll()
  }
}

export function gw_deselectAll(id, filtered) {
  const options = gw_getGrid(id).options

  if (1 === filtered) {
    options.api.deselectAllFiltered()
  } else {
    options.api.deselectAll()
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
  const options = gw_getGrid(id).options
  const nodes = options.api.getSelectedNodes()
  let parsed = []

  nodes.forEach(node => {
    parsed.push(gw_parseNode(node, options.context))
  })

  return JSON.stringify(parsed)
}

/**
 * Get the last selected row
 *
 * @param {Number} id grid's id
 *
 * @returns {String} selected row as JSON
 */
export function gw_getSelectedRow(id) {
  const rows = JSON.parse(gw_getSelectedRows(id))

  if (rows.length) {
    return JSON.stringify(rows[rows.length - 1])
  }

  return ''
}

/**
 * Get the row by its id or index
 *
 * @param {String} id grid's id
 * @param {String|Number} index
 *
 * @return {String} row as JSON
 */
export function gw_getRow(id, index) {
  const options = gw_getGrid(id).options
  return JSON.stringify(
    gw_parseNode(options.api.getRowNode(index), options.context)
  )
}

/**
 * Get rows from the grid
 *
 * @param {String} id The grid's id
 * @param {String} phase The rows phase
 * @param {String} filterExpression A filter expression
 *
 * @return {String} Json stringified array of rows
 */
export function gw_getRows(id, phase, filterExpression) {
  const options = gw_getGrid(id).options
  const parsed = []

  options.api[phase](node => {
    if (!node.group) {
      if (filterExpression) {
        const canProcess = gw_executeExpression(filterExpression, {
          value: node.data,
          context: options.context,
          oldValue: null,
          newValue: null,
          node: node,
          data: node.data,
          colDef: null,
          rowIndex: node.rowIndex,
          api: node.gridApi,
          columnApi: node.columnApi,
          getValue: () => node.data,
          column: null,
          columnGroup:
            // eslint-disable-next-line no-prototype-builtins
            node.hasOwnProperty('parent') && node.parent.hasOwnProperty('key')
              ? node.parent.key
              : '',
        })

        if (canProcess) {
          parsed.push(gw_parseNode(node, options.context))
        }
      } else {
        parsed.push(gw_parseNode(node, options.context))
      }
    }
  })

  return JSON.stringify(parsed)
}

/**
 * Gets the grid to remove a row from the DOM and recreate it again from scratch.
 *
 * @param {String} id grid's id
 */
export function gw_redrawRows(id) {
  gw_getGrid(id).options.api.redrawRows()
}

/**
 * Pin an array of tow to the top of the grid
 *
 * @param {String} id the grid's id
 * @param {Array} data array of rows
 */
export function gw_setPinnedTopRowData(id, data) {
  gw_getGrid(id).options.api.setPinnedTopRowData(data)
}

/**
 * Pin an array of tow to the bottom of the grid
 *
 * @param {String} id the grid's id
 * @param {Array} data array of rows
 */
export function gw_setPinnedBottomRowData(id, data) {
  gw_getGrid(id).options.api.setPinnedBottomRowData(data)
}
