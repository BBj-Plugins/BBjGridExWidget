/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

/**
 * Send an event to BBj side 
 * 
 * The function will trigger a custom click event on the `event-bridge-${id}` div
 * then the div will use basisDispatchCustomEvent to dispatch the event to BBj
 * 
 * @param {string} id the grid id
 * @param {*} payload the event payload
 */
export function gw_sendEvent(id, payload) {
  const div = gw_getDocument().getElementById(`event-bridge-${id}`);
  const event = new CustomEvent('click');
  event.payload = payload;
  div.dispatchEvent(event);
}

/**
 * @typedef {Object} GW_NODE
 * @property {number} id 
 * @property {number} index 
 * @property {number} parentKey 
 * @property {number} childIndex 
 * @property {boolean} selected 
 */

/**
 * Parse node from event 
 * 
 * The function will retund a node object from the passed grid event 
 * 
 * @param {Object} e 
 * @returns {GW_NODE}
 */
export function gw_parseNodeFromEvent(e) {

  if (true === e.node.group) return false; // we do not manage groups

  let detail = {
    id: !e.context.getRowNodeId && e.node.data.__ROW_INDEX ? e.node.data.__ROW_INDEX : e.node.id,
    index: e.node.data.__ROW_INDEX ? e.node.data.__ROW_INDEX : "",
    parentKey: e.node.hasOwnProperty('parent') && e.node.parent.hasOwnProperty('key') ? e.node.parent.key : '',
    childIndex: e.node.childIndex,
    selected: Boolean(e.node.selected),
  };

  return detail;
}
