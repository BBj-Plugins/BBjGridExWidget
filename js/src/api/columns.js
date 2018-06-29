/*
* This file is part of the grid project
* (c) Basis Europe <eu@Basis.AgGridComponents.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

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

  gw_options.api.onGroupExpandedOrCollapsed();
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

export function gw_setVisibleColumn(columnId) {
  gw_options.api.ensureColumnVisible(columnId);
}

export function gw_setColumnWidth(columnid, width) {
  gw_options.columnApi.setColumnWidth(columnid, Number(width));
}

export function gw_pinColumn(columnid, pin) {
  gw_options.columnApi.setColumnPinned(columnid, pin);
}

export function gw_moveColumn(columnid, toIndex) {
  gw_options.columnApi.moveColumn(columnid, toIndex);
}

export function gw_groupColumns(columns, columnDefs) {

  for (const i in columns) {

    if (!columns.hasOwnProperty(i)) continue;

    const column = JSON.parse(columns[i]);
    
    const children = column.children.split(',');
    let newChildren = [];
    let newColumnDef = [];


    children.forEach(child => {

      for (let x = 0; x < columnDefs.length; x++) {

        const def = columnDefs[x];

        if(def && def.hasOwnProperty("field") && def.field === child) {
          newChildren.push(def);
          columnDefs.splice(x, 1);
          break;
        }
      }
    });

    column.children = newChildren;
    columnDefs.unshift(column);
  }
}
