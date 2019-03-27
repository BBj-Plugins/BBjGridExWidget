/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

/** https://davidwalsh.name/javascript-debounce-function */
export function gw_debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

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
 * @typedef {Object} BBjGridExWidgetRow
 * 
 * @property {number} id 
 * @property {number} index 
 * @property {number} parentKey 
 * @property {number} childIndex 
 * @property {boolean} selected 
 */

/**
 * Parse a node as BBjGridExWidgetRow
 * 
 * @param {Object} node ag grid node
 * @param {Object} context  ag grid context
 * 
 * @returns {BBjGridExWidgetRow|Boolean} object formatted as BBjGridExWidgetRow.
 *                                       false if the node is for group node
 */
export function gw_parseNode(node, context) {

  if (true === node.group) return false; // we do not manage groups

  const rowNodeId = context.hasOwnProperty('getRowNodeId')
    && node.data[context.getRowNodeId] ?
    node.data[context.getRowNodeId] : '';

  return {
    id: rowNodeId ? rowNodeId : node.id,
    index: rowNodeId,
    parentKey: node.hasOwnProperty('parent') && node.parent.hasOwnProperty('key') ?
      node.parent.key : '',
    childIndex: node.childIndex,
    selected: Boolean(node.selected),
  };
}

/**
 * Parse node from event 
 * 
 * Parse node in the pased event as BBjGridExWidgetRow
 * 
 * @param {Object} e
 * 
 * @returns {BBjGridExWidgetRow}
 */
export function gw_parseNodeFromEvent(e) {
  return gw_parseNode(e.node, e.context);
}
