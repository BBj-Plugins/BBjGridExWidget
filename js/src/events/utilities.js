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

  const div = gw_getDocument().getElementById('eventTransporterDiv');
  const event = new CustomEvent('click');
  event.payload = payload;
  div.dispatchEvent(event);
}

export function gw_parseNodeFromEvent(e) {

  if (true === e.node.group) return false; // we do not manage groups

  let detail = {
    id: !gw_options.__getRowNodeId && e.node.data.__ROW_INDEX ? e.node.data.__ROW_INDEX : e.node.id,
    childIndex: e.node.childIndex,
    selected: Boolean(e.node.selected),
    index: e.node.data.__ROW_INDEX ? e.node.data.__ROW_INDEX : "",
    parentKey: e.node.hasOwnProperty('parent') && e.node.parent.hasOwnProperty('key') ? e.node.parent.key : '',
  };

  return detail;
}
