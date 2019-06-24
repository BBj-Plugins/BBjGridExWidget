/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { gw_getGrid } from "./utilities"
import {
  gw_parseNodeFromEvent,
  gw_sendEvent
} from "events/utilities"

export function gw_getContextMenu(gridId, params) {

  const buildContextMenuAction = (params, id) => {

    return () => {

      const node = gw_parseNodeFromEvent(params);
      const colId = params.column.colId;
      const value = params.value;

      gw_sendEvent(gw_getGrid(gridId).options.context, {
        'type': 'gw.contextmenu',
        'detail': JSON.stringify({ row: node, column: colId, value, id })
      },[id]);
    };
  };

  const parseMenu = (menu) => {
    menu.forEach(item => {

      if (typeof item === 'string') return;

      item['action'] = buildContextMenuAction(params, item.id);

      if (item['cssClasses'] && !Array.isArray(item['cssClasses']))
        item['cssClasses'] = item['cssClasses'].split(" ");

      if (item['subMenu']) item['subMenu'] = parseMenu(item['subMenu']);
    });

    return menu;
  };

  return parseMenu(gw_getGrid(gridId).options.context.contextMenu);
}
