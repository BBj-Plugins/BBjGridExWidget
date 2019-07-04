/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { gw_getGrid } from "./utilities";

export function gw_setSideBarVisible(id, value) {
  gw_getGrid(id)
    .options
    .api
    .setSideBarVisible(Boolean(value));
}

export function gw_openToolpanel(gridId, toolpanelId) {
  gw_getGrid(gridId)
    .options
    .api
    .openToolPanel(toolpanelId);
}

export function gw_closeToolpanel(gridId, toolpanelId) {
  gw_getGrid(gridId)
    .options
    .api
    .closeToolPanel(toolpanelId);
}

export function gw_setFunctionsReadOnly(id, readonly) {
  gw_getGrid(id)
    .options
    .api
    .setFunctionsReadOnly(Boolean(readonly));
}