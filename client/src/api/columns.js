/*
* This file is part of the grid project
* (c) Basis Europe <eu@Basis.AgGridComponents.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_sizeColumnsToFit(id) {
  const options = gw_getGrid(id).options;
  options.api.sizeColumnsToFit();
}

export function gw_setVisibleColumn(id, columnId) {
  const options = gw_getGrid(id).options;
  options.api.ensureColumnVisible(columnId);
}

export function gw_setColumnWidth(id, columnid, width) {
  const options = gw_getGrid(id).options;
  options.columnApi.setColumnWidth(columnid, Number(width));
}

export function gw_pinColumn(id, columnid, pin) {
  const options = gw_getGrid(id).options;
  options.columnApi.setColumnPinned(columnid, pin);
}

export function gw_moveColumn(id, columnid, toIndex) {
  const options = gw_getGrid(id).options;
  options.columnApi.moveColumn(columnid, toIndex);
}

export function gw_groupColumns(columns, columnDefs) {

  for (const i in columns) {

    if (!columns || !columns.hasOwnProperty(i)) continue;

    const column = JSON.parse(columns[i]);

    const children = column.children.split(',');
    let newChildren = [];
    let newColumnDef = [];


    children.forEach(child => {

      for (let x = 0; x < columnDefs.length; x++) {

        const def = columnDefs[x];

        if (def && def.hasOwnProperty("field") && def.field === child) {
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

  if(!param.context.showSelectionCheckbox) return false;

  const columns = param.columnApi.getAllDisplayedVirtualColumns();

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

  const context = param.api.gridOptionsWrapper.gridOptions.context;

  if(!context.showHeaderSelectionCheckbox) return false;

  const columns = param.columnApi.getAllDisplayedVirtualColumns();

  return columns[0].colDef.field === param.colDef.field
}


