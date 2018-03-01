/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_postEvent(ev) {
  window.basisDispatchCustomEvent(ev, ev.payload);
}

export function gw_sendEvent(payload) {

  const d = $doc.getElementById('eventTransporterDiv');
  const event = new CustomEvent('click');
  event.payload = payload;
  d.dispatchEvent(event);
}

export function gw_parseNodeFromEvent(e) {

  if (true === e.node.group) return false; // we do not manage groups

  let detail = {
    id: e.node.id, // auto generated id by ag-gird (can be changed , but we will not change it)
    childIndex: e.node.childIndex, // row index when it is a child in a group 
    // childrenCount: e.node.group ? e.node.allChildrenCount : 0,
    selected: Boolean(e.node.selected),
    data: e.node.data,
    // level: e.node.level, // the group level 

    // hasParent: hasParent,
    // parentId: hasParent ? e.node.parent.id : -1,
    parentKey: e.node.hasOwnProperty('parent') ? e.node.parent.key : '',
  };

  return detail
}
