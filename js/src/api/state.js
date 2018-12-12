/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_setState(state) {
  try {
    gw_options.columnApi.setColumnState(state.columns);
    gw_options.columnApi.setColumnGroupState(state.groups);
    gw_options.api.setSortModel(state.sort);
    gw_options.api.setFilterModel(state.filters);
  } catch (e) {
    console.warn('Failed to parse grid state from JSON', e);
  }
}

export function gw_getState() {

  const columns = gw_options.columnApi.getColumnState();
  const groups = gw_options.columnApi.getColumnGroupState();
  const sort = gw_options.api.getSortModel();
  const filters = gw_options.api.getFilterModel();

  try {
    return JSON.stringify({
      columns,
      groups,
      sort,
      filters
    });
  } catch (e) {
    console.warn('Failed to convert the grid state to json', e);
  }
}