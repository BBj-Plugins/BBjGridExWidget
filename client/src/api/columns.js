/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@Basis.AgGridComponents.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_getGrid } from './utilities'
import { gw_executeExpression } from '../expression'
const { deepParseJson } = require('deep-parse-json')

/**
 * Extend the column definitions
 *
 * Extend the column definitions with options which can not be handled in BBj
 * (ex: attaching callbacks)
 *
 * @param {Array} definitions array of column definitions
 */
export function gw_extendColumnDefinitions(definitions) {
  for (let i in definitions) {
    const def = definitions[i]

    def.checkboxSelection = def.checkboxSelection || gw_isShowSelectionCheckbox
    def.headerCheckboxSelection =
      def.headerCheckboxSelection || gw_isHeaderCheckboxSelection

    const tooltipValueGetterExpression = def.tooltipValueGetter
    if (tooltipValueGetterExpression) {
      def.tooltipValueGetter = params =>
        gw_executeExpression(tooltipValueGetterExpression, params)
    }

    def.tooltipComponent = 'HTMLTooltip'

    // eslint-disable-next-line no-prototype-builtins
    if (def.hasOwnProperty('editable') && typeof def.editable === 'string') {
      const editable = def.editable
      def.editable = params => gw_executeExpression(editable, params)
    }

    // eslint-disable-next-line no-prototype-builtins
    if (def.hasOwnProperty('rowSpan') && typeof def.rowSpan === 'string') {
      const rowSpan = def.rowSpan
      def.rowSpan = params => gw_executeExpression(rowSpan, params)
    }

    // eslint-disable-next-line no-prototype-builtins
    if (def.hasOwnProperty('colSpan') && typeof def.colSpan === 'string') {
      const colSpan = def.colSpan
      def.colSpan = params => gw_executeExpression(colSpan, params)
    }

    // eslint-disable-next-line no-prototype-builtins
    if (def.hasOwnProperty('children')) {
      gw_extendColumnDefinitions(def.children)
    }
  }
}

/**
 * Update the column definitions
 *
 * @param {String} id The grid id
 * @param {Array} definitions array of column definitions
 */
export function gw_setColumnDefinitions(id, definitions) {
  const grid = gw_getGrid(id)
  const deepParsedDefinitions = deepParseJson(JSON.stringify(definitions))

  gw_extendColumnDefinitions(deepParsedDefinitions)

  grid.options.api.setColumnDefs(deepParsedDefinitions)
  grid.options.columnDefs = deepParsedDefinitions
}

/**
 * Make the currently visible columns fit the screen
 *
 * @param {String} id The grid's id
 * @param {Number} the width to use to fit all columns in
 */
export function gw_sizeColumnsToFit(id, width) {
  const options = gw_getGrid(id).options
  const api = options.api
  const columnsAPI = options.columnApi
  if (width) {
    columnsAPI.sizeColumnsToFit(Number(width))
  } else {
    api.sizeColumnsToFit()
  }
}

/**
 * Work out the best width to fit the contents of the cells in the column.
 *
 * @param {String} id The grid's id
 * @param {Boolean} [skipHeader=false] when true indicate that the header content (headerName) should not be considered when
 *                             calculating the width of the column
 * @param {Array|null} [columns=null] an array of columns ids to auto size or null to auto size all columns
 */
export function gw_autoSizeColumns(id, skipHeader = false, columns = null) {
  const options = gw_getGrid(id).options
  const columnsAPI = options.columnApi

  if (!(columns && columns.length)) {
    const allColumnIds = []

    columnsAPI.getAllColumns().forEach(column => {
      allColumnIds.push(column.colId)
    })

    columnsAPI.autoSizeColumns(allColumnIds, Boolean(skipHeader))
  } else {
    columnsAPI.autoSizeColumns(columns, Boolean(skipHeader))
  }
}
/**
 * Ensures the column is visible, scrolling the table if needed.
 *
 * @param {String} id  the grid's id
 * @param {String} columnId  the column id
 */
export function gw_ensureColumnVisible(id, columnId) {
  gw_getGrid(id).options.api.ensureColumnVisible(columnId)
}

/**
 * Set Column Width
 *
 * @param {String} id The grid id
 * @param {String} columnId The column id
 * @param {Number|String} width The new column width
 */
export function gw_setColumnWidth(id, columnId, width) {
  gw_getGrid(id).options.columnApi.setColumnWidth(columnId, Number(width))
}

/**
 * Pin Column
 *
 * Pin a column to a specific direction
 *
 * @param {String} id The grid id
 * @param {String} columnId The column id
 * @param {String} pin The pin direction
 */
export function gw_pinColumn(id, columnId, pin) {
  gw_getGrid(id).options.columnApi.setColumnPinned(columnId, pin)
}

/**
 * Move Column
 *
 * Move column to a specific index
 *
 * @param {String} id The grid id
 * @param {String} columnId The column id
 * @param {Number|String} toIndex The new column index
 */
export function gw_moveColumn(id, columnId, toIndex) {
  gw_getGrid(id).options.columnApi.moveColumn(columnId, toIndex)
}

/**
 * Show / Hide selection checkbox based on the first column
 *
 * The function make sure that the selection checkbox is always shown on the
 * first column
 *
 * @param {Object} param
 *
 * @return {Boolean} true when first column , false if not the first column or if the
 *                   grid's `Context.showSelectionCheckbox` is false
 */
export function gw_isShowSelectionCheckbox(param) {
  if (!param.context.showSelectionCheckbox) {
    return false
  }

  const columns = param.columnApi.getAllGridColumns()

  return columns[0].colDef.field === param.colDef.field
}

/**
 * Show / Hide header selection checkbox based on the first column
 *
 * The function make sure that the header selection checkbox is always shown on the
 * first column
 *
 * @param {Object} param
 *
 * @return {Boolean} true when first column , false if not the first column or if the
 *                   grid's `Context.showHeaderSelectionCheckbox` is false
 */
export function gw_isHeaderCheckboxSelection(param) {
  const context = param.api.gridOptionsWrapper.gridOptions.context

  if (!context.showHeaderSelectionCheckbox) {
    return false
  }

  const columns = param.columnApi.getAllGridColumns()

  return columns[0].colDef.field === param.colDef.field
}

/**
 * Enable row grouping for columns
 *
 * @param {String} id the grid id
 * @param {String} columns  a comma separated string of columns
 * @param {Boolean} set  When true , `setRowGroupColumns` will be used , `addRowGroupColumns` otherwise
 */
export function gw_addRowGroupColumn(id, columns, set) {
  gw_getGrid(id).options.columnApi[
    set ? 'setRowGroupColumns' : 'addRowGroupColumns'
  ](columns.split(',').map(i => i.trim()))
}

/**
 * Disable row grouping for columns
 *
 * @param {String} id the grid id
 * @param {String} columns  a comma separated string of columns
 */
export function gw_removeRowGroupColumn(id, columns) {
  gw_getGrid(id).options.columnApi.removeRowGroupColumns(
    columns.split(',').map(i => i.trim())
  )
}

export function gw_getPivotMode(id) {
  return gw_getGrid(id).options.columnApi.isPivotMode()
}

/**
 * Enable / disbale pivot mode
 *
 * @param {String} id the grid id
 * @param {Boolean} mode when true
 */
export function gw_setPivotMode(id, mode) {
  gw_getGrid(id).options.columnApi.setPivotMode(!!Number(mode))
}

/**
 * Enable pivot for columns
 *
 * @param {String} id the grid id
 * @param {String} columns  a comma separated string of columns
 * @param {Boolean} set  When true , `addPivotColumns` will be used , `setPivotColumns` otherwise
 */
export function gw_addPivotColumns(id, columns, set) {
  gw_getGrid(id).options.columnApi[set ? 'setPivotColumns' : 'addPivotColumns'](
    columns.split(',').map(i => i.trim())
  )
}

/**
 * Disable pivot for columns
 *
 * @param {String} id the grid id
 * @param {String} columns  a comma separated string of columns
 */
export function gw_removePivotColumns(id, columns) {
  gw_getGrid(id).options.columnApi.removePivotColumns(
    columns.split(',').map(i => i.trim())
  )
}

/**
 * Enable value for columns
 *
 * @param {String} id the grid id
 * @param {String} columns  a comma separated string of columns
 */
export function gw_addValueColumns(id, columns) {
  gw_getGrid(id).options.columnApi.addValueColumns(
    columns.split(',').map(i => i.trim())
  )
}

/**
 * Disable value for columns
 *
 * @param {String} id the grid id
 * @param {String} columns  a comma separated string of columns
 */
export function gw_removeValueColumns(id, columns) {
  gw_getGrid(id).options.columnApi.removeValueColumns(
    columns.split(',').map(i => i.trim())
  )
}

/**
 * Set the column sorting model
 *
 * @param {String} id the grid id
 * @param {String} model model as json array
 */
export function gw_setSortModel(id, model) {
  const asArray = JSON.parse(model)
  const parsedModel = []
  asArray.forEach(i => {
    for (const key in i) {
      parsedModel.push({
        colId: key,
        sort: i[key],
      })
    }
  })

  gw_getGrid(id).options.api.setSortModel(parsedModel)
}

/**
 * Redraws the header. Useful if a column name changes,
 * or something else that changes how the column header is displayed.
 *
 * @param {String} id grid's id
 */
export function gw_refreshHeader(id) {
  gw_getGrid(id).options.api.redrawRows()
}

/**
 * Update column viability
 *
 * @param {String} id grid's id
 * @param {String} columns  a comma separated list of column ids
 * @param {Boolean} visible true to make the columns visible , false to hide
 */
export function gw_setColumnVisible(id, columns, visible) {
  gw_getGrid(id).options.columnApi.setColumnsVisible(
    columns.split(','),
    Boolean(visible)
  )
}

/**
 * Align two grid together
 *
 * @param {String} id The current grid's id
 * @param {String} gridId The target grid's id
 */
export function gw_addAlignedGrid(id, gridId) {
  const currentGridOption = gw_getGrid(id).options
  const register = () => {
    const targetGridOption = gw_getGrid(gridId).options
    currentGridOption.alignedGrids.push(targetGridOption)
  }

  try {
    register()
  } catch (err) {
    currentGridOption.alignedGrids.push(gridId)
    window.addEventListener(`${gridId}-ready`, () => {
      const indexOf = currentGridOption.alignedGrids.indexOf(gridId)
      if (indexOf > -1) {
        currentGridOption.alignedGrids.splice(indexOf, 1)
        register()
      }
    })
  }
}

/**
 * Remove aligned grids
 *
 * @param {String} id The current grid's id
 * @param {String} gridId The target grid's id
 */
export function gw_removeAlignedGrid(id, gridId) {
  const currentGridOption = gw_getGrid(id).options
  const alignedGrids = currentGridOption.alignedGrids
  for (let x = 0; x < alignedGrids.length; x++) {
    const grid = alignedGrids[x]
    if (
      (typeof grid === 'string' && grid === gridId) ||
      grid.context.id === gridId
    ) {
      alignedGrids.splice(x, 1)
    }
  }
}
