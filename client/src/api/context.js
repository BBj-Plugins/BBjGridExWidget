/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import {gw_getGrid} from "./utilities"

/**
 * Update context 
 * 
 * @param {String} id The grid's id 
 * @param {String} key The context's key to update
 * @param {String} value  The new context's value 
 */
export function gw_updateContext(id , key , value) {
	const grid = gw_getGrid(id);

	if(grid) {
		const context = grid.options.context
		context[key] = JSON.parse(value)
	}
}