/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@basis.cloud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_getGrid } from './utilities'
import { gw_parseNode } from 'events/utilities'
import { gw_getRows } from './rows'

const { deepParseJson } = require('deep-parse-json')

/**
 * Start cell editing
 *
 * @param {String} id The grid's id
 * @param {String|number} row The row index or key
 * @param {String} colKey The column's key
 * @param {String|Number} keyPress  Key press
 * @param {String} charPress
 * @param {String} rowPinned Set to 'top' or 'bottom' to started editing a pinned row
 */
export function gw_startEditingCell(
  id,
  row,
  colKey,
  keyPress,
  charPress,
  rowPinned
) {
  const options = gw_getGrid(id).options
  const api = options.api
  const node = api.getRowNode(row) || api.getDisplayedRowAtIndex(row)

  console.log(row, node)

  options.api.startEditingCell({
    rowIndex: node ? node.rowIndex : row,
    keyPress: Number(keyPress),
    colKey,
    charPress,
    rowPinned,
  })
}

/**
 * Stop cell editing
 *
 * @param {String} id The grid's id
 * @param {Boolean} cancel when true cancel edits , save edits otherwise
 */
export function gw_stopEditing(id, cancel) {
  gw_getGrid(id).options.api.stopEditing(cancel)
}

/**
 * Navigates the grid focus to the next cell, as if tabbing.
 *
 * @param {String} id  the grid id
 */
export function gw_tabToNextCell(id) {
  gw_getGrid(id).options.api.tabToNextCell()
}

/**
 * Navigates the grid focus to the previous cell, as if shift-tabbing.
 *
 * @param {String} id  the grid id
 */
export function gw_tabToPreviousCell(id) {
  gw_getGrid(id).options.api.tabToPreviousCell()
}

/**
 * Set Focus on the given row and column
 *
 * @param {String} id The grid's id
 * @param {String|Number} row The row's index/id
 * @param {String} column The column id
 * @param {String} floating null, 'top', or 'bottom'.
 */
export function gw_setFocusedCell(id, row, column, floating = null) {
  const options = gw_getGrid(id).options
  const grid = gw_getGrid(id)

  // ignore focus calls if editing
  if (options.api.getEditingCells().length > 0) {
    return
  }

  if (!JSON.parse(gw_getRows(id, 'forEachNodeAfterFilterAndSort', '')).length) {
    grid.container.focus()
    return
  }

  let r, c, f
  if (row == -1) {
    // try to retain the focus
    const lastFocusedCell = options.api.getFocusedCell()

    if (lastFocusedCell) {
      r = lastFocusedCell.rowIndex
      c = lastFocusedCell.column.colId
      f = lastFocusedCell.rowPinned
    } else {
      r = 0
      c = options.columnApi.getAllGridColumns()[0].colId
      f = floating
    }
  } else {
    r = !row
      ? 0
      : Number.isInteger(+row)
      ? +row
      : options.api.getRowNode(row).rowIndex
    c = column ? column : options.columnApi.getAllGridColumns()[0].colId
    f = floating
  }

  gw_getGrid(id).options.api.setFocusedCell(r, c, f)
}

/**
 * Get Range Selections
 *
 * The method will create a range json model for each range which can be parsed in BBj side.
 *
 * @param {Number} id grid's id
 *
 * @returns {String} selected ranges as JSON
 */
export function gw_getRangeSelections(id) {
  const options = gw_getGrid(id).options
  const context = options.context
  const api = options.api
  const ranges = api.getCellRanges()
  const model = api.getModel()
  let result = []

  ranges.forEach(range => {
    // const start = gw_parseNode(model.getRow(range.startRow.rowIndex), options.context);
    // const end = gw_parseNode(model.getRow(range.endRow.rowIndex), options.context);

    //if (start !== false && end !== false) {
    const columns = range.columns
      .reduce((accumulator, current) => {
        if ('ag-Grid-AutoColumn' !== current.colId) {
          accumulator.push(current.colId)
        }

        return accumulator
      }, [])
      .filter(Boolean)

    const starIndex = Math.min(range.startRow.rowIndex, range.endRow.rowIndex)
    const endIndex = Math.max(range.startRow.rowIndex, range.endRow.rowIndex)
    const rows = []

    for (let rowIndex = starIndex; rowIndex <= endIndex; rowIndex++) {
      const node = model.getRow(rowIndex)
      if (node) {
        const parsedNode = gw_parseNode(node, context)
        if (parsedNode) {
          rows.push(parsedNode)
        }
      }
    }

    if (rows.length && columns.length) {
      result.push({ r: rows, c: columns })
    }
    //}
  })

  return JSON.stringify(result)
}

/**
 * Parse the cells range in a format the grid can understand when it is passed
 * to `api.addCellRange`
 *
 * @param {Object} options The grid's options
 * @param {Object} range  bounded or unbounded range model
 */
export function gw_parseAddCellRange(options, range) {
  const pr = deepParseJson(JSON.stringify(range))
  const start = !(pr.start || null)
    ? 0
    : Number.isInteger(+pr.start)
    ? +pr.start
    : options.api.getRowNode(pr.start).rowIndex
  const end = !(pr.end || null)
    ? options.rowData.length - 1
    : Number.isInteger(+pr.end)
    ? +pr.end
    : options.api.getRowNode(pr.end).rowIndex

  return {
    rowStartIndex: Math.abs(start),
    rowEndIndex: Math.abs(end),
    columns: pr.columns,
  }
}
/**
 * Add new cell range
 *
 * @param {Number} id grid's id
 * @param {Object} range  bounded or unbounded range model
 */
export function gw_addCellRange(id, range) {
  const options = gw_getGrid(id).options
  options.api.addCellRange(gw_parseAddCellRange(options, range))
}

/**
 * Clears the selected range.
 *
 * @param {Number} id grid's id
 */
export function gw_clearRangeSelection(id) {
  gw_getGrid(id).options.api.clearRangeSelection()
}
