/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_setSideBarVisible(value) {
  gw_options.api.setSideBarVisible(Boolean(value));
}

export function gw_openToolpanel(id) {
  gw_options.api.openToolPanel(id);
}

export function gw_closeToolpanel(id) {
  gw_options.api.closeToolPanel(id);
}

export function gw_setFunctionsReadOnly(readonly) {
  gw_options.api.setFunctionsReadOnly(Boolean(readonly));
}

export function gw_getToolPanelClass(params) {

  const def = params.colDef;

  if (
    gw_meta.hasOwnProperty(def.field) &&
    gw_meta[def.field].hasOwnProperty('TOOLPANEL_CLASS')
  ) {
    return gw_meta[def.field].TOOLPANEL_CLASS;
  }
}
