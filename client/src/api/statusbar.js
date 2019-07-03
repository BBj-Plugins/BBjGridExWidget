/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { gw_getGrid } from "./utilities";

export function gw_setStatusbarComponentVisibility(id, key, visibility) {
	gw_getGrid(id)
		.options
		.api
		.getStatusPanel(key)
		.setVisible(Boolean(visibility));
}