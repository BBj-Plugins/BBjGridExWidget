/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@basis.cloud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_getGrid } from './utilities'

export function gw_setState(id, state) {
  const options = gw_getGrid(id).options

  try {
    options.columnApi.applyColumnState({
      state: state.columns,
      applyOrder: true,
    })
    options.columnApi.setColumnGroupState(state.groups)
    options.api.setFilterModel(state.filters)
  } catch (e) {
    console.warn('Failed to parse grid state from JSON', e)
  }
}

export function gw_getState(id) {
  const options = gw_getGrid(id).options
  const columns = options.columnApi.getColumnState()
  const groups = options.columnApi.getColumnGroupState()
  const filters = options.api.getFilterModel()

  try {
    return JSON.stringify({
      columns,
      groups,
      filters,
    })
  } catch (e) {
    console.warn('Failed to convert the grid state to json', e)
  }
}
