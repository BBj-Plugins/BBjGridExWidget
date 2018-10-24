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

export function gw_navigateToNextRow(params) {

  let previousCell = params.previousCellDef;
  let suggestedNextCell = params.nextCellDef;

  const KEY_UP = 38;
  const KEY_DOWN = 40;
  const KEY_LEFT = 37;
  const KEY_RIGHT = 39;

  switch (params.key) {
    case KEY_DOWN:
      previousCell = params.previousCellDef;
      // set selected cell on current cell + 1
      gw_options.api.forEachNode((node) => {
        if (previousCell.rowIndex + 1 === node.rowIndex) {
          node.setSelected(true);
        }
      });
      return suggestedNextCell;
    case KEY_UP:
      previousCell = params.previousCellDef;
      // set selected cell on current cell - 1
      gw_options.api.forEachNode((node) => {
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

export function gw_getRowNodeId(data) {
  return data[gw_options.__getRowNodeId];
}

export function gw_getNodeChildDetails(rowItem) {

  const key = rowItem[gw_options.__getParentNodeId];
  if (rowItem.__node__children) {
    return {
      group: true,
      expanded: false,
      // provide ag-Grid with the children of this group
      children: rowItem.__node__children,
      // the key is used by the default group cellRenderer
      key: key ? key : -1
    };
  } else {
    return false;
  }
}

export function gw_setRowsData(json) {
  
  gw_options.api.setRowData(json);
  gw_options.rowData = json;
  gw_options.api.refreshClientSideRowModel('group');
}

export function gw_setRowData(row) {

  console.log(row)
  gw_options.api.updateRowData({update: [row]});
  gw_options.api.refreshClientSideRowModel('group');
}

export function gw_removeRows(indexes) {
  
  let items = [];
  indexes.forEach( index => {
    items.push(gw_options.api.getRowNode(index).data);
  });

  gw_options.api.updateRowData({remove: items});
  gw_options.api.refreshClientSideRowModel('group');
}

export function gw_addRows(index,rows) {
  
  gw_options.api.updateRowData({add: rows, addIndex: index});
  gw_options.api.refreshClientSideRowModel('group');
}
