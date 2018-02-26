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
  
  let value;
  if(type === 'cellValueChanged') {
    value = { value: e.newValue , oldValue : e.oldValue };
  } else {
    value = {value: e.value};
  }

  console.log({ row: parsed , ...value })
  if (parsed) {
    
    gw_sendEvent({
      'type': e.type,
      'detail': [[
        { row: parsed , ...value , column: colId}
      ]]
    });
  }
}

export function gw_onRowEditingsEvent(e) {
  
  const parsed = gw_parseNodeFromEvent(e);
  
  if (parsed) {
    gw_sendEvent({
      'type': e.type,
      'detail': [[parsed]]
    });
  }
}
