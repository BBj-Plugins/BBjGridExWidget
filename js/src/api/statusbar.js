/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_setStatusbarComponentVisiblity(id, key, visiblity) {
	const options = gw_getGrid(id).options;
	let statusBarComponent = options.api.getStatusPanel(key);
	statusBarComponent.setVisible(Boolean(visiblity));
}