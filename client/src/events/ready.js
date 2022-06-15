/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@basis.cloud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_debounce, gw_sendEvent } from './utilities'
import { gw_onStateChanged } from './state'
import { gw_onKeydown } from './keyboard'
import { gw_getGrid } from 'api/utilities'
import { GW_EVENT_READY } from './constants'

/**
 * On Ready Event
 *
 * The method will ignore first ready event and then register a debounced state
 * callback to send state events to BBj
 *
 * @param {String} id The grid's id
 * @param {Object} e  The event payload
 *
 * @listens agGrid.gridReady
 * @fires gw.ready
 */
// eslint-disable-next-line no-unused-vars
export function gw_onReadyEvent(id, _e) {
  const grid = gw_getGrid(id)

  gw_sendEvent(
    grid.options.context,
    {
      type: 'gw.gridReady',
      detail: {},
    },
    GW_EVENT_READY
  )

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

  // collect key downs information to be reported with other events
  grid.container.addEventListener('keydown', keydownEvent => {
    grid.keys = {
      c: keydownEvent.key,
      kc: keydownEvent.which || Number(keydownEvent.keyCode),
      ak: keydownEvent.altKey,
      sk: keydownEvent.shiftKey,
      ck: keydownEvent.ctrlKey,
    }
  })

  // clear collect keydown information
  grid.container.addEventListener(
    'keyup',
    // eslint-disable-next-line no-unused-vars
    gw_debounce(_e => {
      grid.keys = null
    }, 250)
  )

  // register keyboard debounce monitor

  grid.container.addEventListener(
    'keydown',
    gw_debounce(keydownEvent => {
      gw_onKeydown(id, keydownEvent)
    }, 500)
  )

  window.dispatchEvent(new CustomEvent(`${id}-ready`, { detail: grid }))
}
