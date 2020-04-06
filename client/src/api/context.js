/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_getGrid } from './utilities'

/**
 * Update context
 *
 * @param {String} id The grid's id
 * @param {String} key The context's key to update
 * @param {String} value  The new context's value
 */
// export function gw_legacyUpdateContext(id, key, value) {
// 	gw_getGrid(id)
// 		.options
// 		.context[key] = JSON.parse(value);
// }

/**
 * Update context
 *
 * @param {String} id The grid's id
 * @param {Object} context The new context object
 */
export function gw_updateContext(id, context) {
  gw_getGrid(id).options.context = context
}
