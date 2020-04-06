/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_sendEvent } from './utilities'
import { GW_EVENT_KEYPRESS } from './constants'
import { gw_getGrid } from 'api/utilities'

/**
 * Compose a model of the keydown event and send it to BBj
 *
 * @param {String} id  the grid's id
 * @param {Event} keydownEvent keydown event
 */
export function gw_onKeydown(id, keydownEvent) {
  gw_sendEvent(
    gw_getGrid(id).options.context,
    {
      type: `gw.keypress`,
      detail: JSON.stringify({
        c: keydownEvent.key,
        kc: keydownEvent.which || Number(keydownEvent.keyCode),
        ak: keydownEvent.altKey,
        sk: keydownEvent.shiftKey,
        ck: keydownEvent.ctrlKey,
      }),
    },
    GW_EVENT_KEYPRESS
  )
}
