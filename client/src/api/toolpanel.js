/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { gw_getGrid } from "./utilities"

export function gw_setSideBarVisible(id, value) {
  const options = gw_getGrid(id).options;
  options.api.setSideBarVisible(Boolean(value));
}

export function gw_openToolpanel(gridId, toolpanelId) {
  const options = gw_getGrid(gridId).options;
  options.api.openToolPanel(toolpanelId);
}

export function gw_closeToolpanel(gridId, toolpanelId) {
  const options = gw_getGrid(gridId).options;
  options.api.closeToolPanel(toolpanelId);
}

export function gw_setFunctionsReadOnly(id, readonly) {
  const options = gw_getGrid(id).options;
  options.api.setFunctionsReadOnly(Boolean(readonly));
}

export function gw_getToolPanelClass(params) {

  const meta = gw_getGrid(params.context.id).meta;
  const def = params.colDef;

  if (
    meta && meta.hasOwnProperty(def.field) &&
    meta[def.field].hasOwnProperty('TOOLPANEL_CLASS')
  ) {
    return meta[def.field].TOOLPANEL_CLASS;
  }
}
