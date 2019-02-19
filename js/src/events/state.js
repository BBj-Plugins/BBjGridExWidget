import { gw_getGrid } from "../utilities";

/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_onReadyEvent(id, e) {

	// registe state debounced monitor 
	const stateDebouce = gw_debounce(changeEvent => {

		// We skip the first render state changes
		if (!gw_getGrid(id).hasOwnProperty('isFirstRender')) {
			gw_getGrid(id).isFirstRender = true;
			return;
		}

		gw_onStateChanged(id, changeEvent);
	}, 500);

	[
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
		'gridSizeChanged',
		'expandOrCollapseAll',
		'toolPanelVisibleChanged'
	].forEach(event => {
		gw_getGrid(id).options.api.addEventListener(event, stateDebouce);
	});
}

export function gw_onStateChanged(id, e) {
	gw_sendEvent(id, {
		'type': 'gw.stateChanged',
		'detail': []
	});
}