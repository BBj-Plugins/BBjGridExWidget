/*
* This file is part of the grid project
* (c) Basis Europe <eu@Basis.AgGridComponents.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_setQuickFilter(id, filter) {
  const options = gw_getGrid(id).options;
  options.api.setQuickFilter(filter);
}

export function gw_expandAll(id) {
  const options = gw_getGrid(id).options;
  options.api.expandAll();
}

export function gw_collapseAll(id) {
  const options = gw_getGrid(id).options;
  options.api.collapseAll();
}

export function gw_setVisibleRow(id, index, position) {
  const options = gw_getGrid(id).options;
  options.api.ensureIndexVisible(index, position);
}

export function gw_navigateToNextRow(id, params) {

  const options = gw_getGrid(id).options;
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
      options.api.forEachNode((node) => {
        if (previousCell.rowIndex + 1 === node.rowIndex) {
          node.setSelected(true);
        }
      });
      return suggestedNextCell;
    case KEY_UP:
      previousCell = params.previousCellDef;
      // set selected cell on current cell - 1
      options.api.forEachNode((node) => {
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

export function gw_getRowNodeId(id, data) {
  return data[gw_getGrid(id).options.context.getRowNodeId];
}

export function gw_setRowsData(id, json) {
  const options = gw_getGrid(id).options;

  options.api.setRowData(json);
  options.rowData = json;
  options.api.refreshClientSideRowModel('group');
}

export function gw_setRowData(id, row) {
  const options = gw_getGrid(id).options;

  options.api.updateRowData({ update: [row] });
  options.api.refreshClientSideRowModel('group');
}

export function gw_removeRows(id, indexes) {
  const options = gw_getGrid(id).options;
  let items = [];

  indexes.forEach(index => {
    items.push(options.api.getRowNode(index).data);
  });

  options.api.updateRowData({ remove: items });
  options.api.refreshClientSideRowModel('group');
}

export function gw_addRows(id, index, rows) {
  const options = gw_getGrid(id).options;

  options.api.updateRowData({ add: rows, addIndex: index });
  options.api.refreshClientSideRowModel('group');
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
  options.api.onRowHeightChanged()
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
    options.api.onRowHeightChanged()
  } else {
    console.warn(`Failed to set height for row ${index}. Row can not be found`);
  }
}

export function gw_setSelectedRows(id, rows) {
  const options = gw_getGrid(id).options;

  options.api.forEachNodeAfterFilterAndSort(node => {
    if (rows.indexOf(node.rowIndex) > -1) {
      node.setSelected(true);
      node.expanded = true;
    }
  });
  options.api.onGroupExpandedOrCollapsed();
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

  return '';
}

/**
 * Get Range Selections
 * 
 * The method will create a range model json which can be parsed in BBj side.
 * 
 * @param {Number} id grid's id
 * 
 * @returns {String} selected row as JSON
 */
export function gw_getRangeSelections(id) {
  const options = gw_getGrid(id).options;
  const context = options.context;
  const api = options.api;
  const ranges = api.getRangeSelections();
  const model = api.getModel();
  let result = [];

  ranges.forEach(range => {

    const start = {
      row: gw_parseNode(model.getRow(range.start.rowIndex), options.context),
      column: range.start.column.colId
    };

    const end = {
      row: gw_parseNode(model.getRow(range.end.rowIndex), options.context),
      column: range.end.column.colId
    };

    if (start.row !== false && end.row !== false) {
      const columns = range.columns.reduce((accumulator, current) => {
  
        if ("ag-Grid-AutoColumn" !== current.colId) {
          accumulator.push(current.colId);
        }
  
        return accumulator;
      }, []).filter(Boolean);
  
      const starIndex = Math.min(range.start.rowIndex, range.end.rowIndex);
      const endIndex = Math.max(range.start.rowIndex, range.end.rowIndex);
      const rows = [];

      for (let rowIndex = starIndex; rowIndex <= endIndex; rowIndex++) {
        const node = model.getRow(rowIndex);
  
        rows.push(gw_parseNode(node, context));
      }

      result.push({ start, end, rows, columns });
    }
  });

  return JSON.stringify(result);
}