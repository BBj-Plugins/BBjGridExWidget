/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_sendEvent } from './utilities'
import { GW_EVENT_FILTER_CHANGED } from './constants'

/**
 * An handler for the grid `filterChanged` event
 *
 * @param {String} the grid's id
 * @param {Object} e The event's payload
 *
 * @listens agGrid.filterChanged
 * @fires gw.filterChanged
 */
export function gw_onFilterChanged(id, e) {
  const context = e.api.gridOptionsWrapper.gridOptions.context

  gw_sendEvent(
    context,
    {
      type: 'gw.filterChanged',
      detail: {},
    },
    GW_EVENT_FILTER_CHANGED
  )
}
