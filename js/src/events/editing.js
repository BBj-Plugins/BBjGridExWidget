/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_onCellEditingsEvent(e) {

  const parsed = gw_parseNodeFromEvent(e);
  const type = e.type;
  const colId = e.column.colId;

  window.gw_editing = type === 'cellEditingStopped' ? false : true;

  let value;
  if (type === 'cellValueChanged') {
    value = { value: e.newValue, oldValue: e.oldValue };
  } else {
    value = { value: e.value };
  }

  if (parsed) {

    gw_sendEvent({
      'type': e.type,
      'detail': [[
        { row: parsed, ...value, column: colId }
      ]]
    });
  }
}

export function gw_onRowEditingsEvent(e) {

  const parsed = gw_parseNodeFromEvent(e);
  const type = e.type;

  window.gw_editing = type === 'rowEditingStopped' ? false : true;

  if (parsed) {
    gw_sendEvent({
      'type': e.type,
      'detail': [[parsed]]
    });
  }
}

export function gw_onMoveToNextCell(e) {

  const key = e.which || e.keyCode;
  if (gw_editing && key === 13) { // enter

    const currentCell = gw_options.api.getFocusedCell();
    const finalRowIndex = gw_options.api.paginationGetRowCount() - 1;

    // If we are editing the last row in the grid, don't move to next line
    if (currentCell.rowIndex === finalRowIndex) {
      return;
    }

    gw_options.api.stopEditing();
    gw_options.api.clearFocusedCell();

    gw_options.api.startEditingCell({
      rowIndex: currentCell.rowIndex + 1,
      colKey: currentCell.column.colId
    });
  }
}


