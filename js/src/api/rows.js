/*
* This file is part of the grid project
* (c) Basis Europe <eu@Basis.AgGridComponents.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_setQuickFilter(filter) {
  gw_options.api.setQuickFilter(filter);
}

export function gw_expandAll() {
  gw_options.api.expandAll();
}

export function gw_collapseAll() {
  gw_options.api.collapseAll();
}

export function gw_setVisibleRow(index, position) {
  gw_options.api.ensureIndexVisible(index, position);
}
