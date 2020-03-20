/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_debounce } from './utilities'
import { gw_onStateChanged } from './state'
import { gw_onKeydown } from './keyboard'
import { gw_getGrid } from 'api/utilities'

/**
 * On Ready Event
 *
 * The method will ignore first ready event and then register a debounced state
 * callback to send state events to BBj
 *
 * @param {String} id The grid's id
 * @param {Object} e  The event payload
 */
// eslint-disable-next-line no-unused-vars
export function gw_onReadyEvent(id, _e) {
  const grid = gw_getGrid(id)

  // register state debounce monitor
  const stateDebounce = gw_debounce(changeEvent => {
    gw_onStateChanged(id, changeEvent)
  }, 500)

  ;[
    'sortChanged',
    'filterChanged',
    'columnVisible',
    'columnPinned',
    'columnResized',
    'columnMoved',
    'newColumnsLoaded',
    'gridColumnsChanged',
    'displayedColumnsChanged',
    'virtualColumnsChanged',
    'columnEverythingChanged',
    //'gridSizeChanged',
    'expandOrCollapseAll',
    //'toolPanelVisibleChanged'
  ].forEach(event => {
    grid.options.api.addEventListener(event, stateDebounce)
  })

  // register keyboard debounce monitor
  const keyboardDebounce = gw_debounce(keydownEvent => {
    gw_onKeydown(id, keydownEvent)
  }, 500)

  grid.container.addEventListener('keydown', keyboardDebounce)
}
