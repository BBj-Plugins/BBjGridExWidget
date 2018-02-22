/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_cellStyler(params) {

  let cdef = params.column.colDef.cellStyleDefaults || {};

  var meta = {};

  if (params.data.meta)
    meta = params.data.meta[params.column.colId] || {};

  let colStyle = {};

  if (meta["FGCOLOR"])
    colStyle.color = meta["FGCOLOR"];
  else
    if (cdef["FGCOLOR"])
      colStyle["color"] = cdef["FGCOLOR"];

  if (meta["BGCOLOR"])
    colStyle["background-color"] = meta["BGCOLOR"];
  else
    if (cdef["BGCOLOR"])
      colStyle["background-color"] = cdef["BGCOLOR"];

  if (meta["ALIGN"])
    colStyle["text-align"] = meta["ALIGN"];
  else
    if (cdef["ALIGN"])
      colStyle["text-align"] = cdef["ALIGN"];

  if (colStyle.color || colStyle["background-color"] || colStyle["text-align"]) {
    return colStyle;
  }
  else {
    return null;
  }
}

export function gw_sizeColumnsToFit() {
  gw_options.api.sizeColumnsToFit();
}

export function gw_setSelectedRows(rows) {

  gw_options.api.forEachNodeAfterFilterAndSort(function (node) {
    if (rows.indexOf(node.rowIndex) > -1) {
      node.setSelected(true);
      node.expanded = true;
    }
  }.bind(this));

  gw_options.api.onGroupExpandedOrCollapsed()
}

export function gw_selectAll(filtered) {

  if (1 === filtered) {
    gw_options.api.selectAllFiltered();
  } else {
    gw_options.api.selectAll();
  }
}

export function gw_deselectAll(filtered) {

  if (1 === filtered) {
    gw_options.api.deselectAllFiltered();
  } else {
    gw_options.api.deselectAll();
  }
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

export function gw_setVisibleColumn(columnId) {
  gw_options.api.ensureColumnVisible(columnId);
}

export function gw_setColumnWidth(columnid, width) {
  gw_options.api.setColumnWidth(columnid, Number(width));
}

export function gw_pinColumn(columnid, pin) {
  gw_options.columnApi.setColumnPinned(columnid, pin);
}

export function gw_moveColumn(columnid, toIndex) {
  gw_options.columnApi.moveColumn(columnid, toIndex);
}

export function gw_setQuickFilter(filter) {
  gw_options.api.setQuickFilter(filter);
}

export function gw_setState(state) {
  gw_options.columnApi.setColumnState(state);
}

export function gw_getState() {

  const state = gw_options.columnApi.getColumnState();
  try {
    return JSON.stringify(state);
  } catch (e) {
    console.warn('Failed to parse state', e)
  }
}
