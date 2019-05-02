import { gw_getGrid } from "../utilities";

/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_getContextMenu(gridId, params) {

  const buildContextMenuAction = (params, id) => {

    return () => {

      const node = gw_parseNodeFromEvent(params);
      const colId = params.column.colId;
      const value = params.value;

      gw_sendEvent(gridId, {
        'type': 'contextmenu',
        'detail': [[{ row: node, column: colId, value, id }]]
      });
    };
  };

  const parseMenu = (menu) => {

    const parsed = JSON.parse(menu);
    parsed.forEach(item => {

      if (typeof item === 'string') return;
      item['action'] = buildContextMenuAction(params, item.id);
      if (item['cssClasses']) item['cssClasses'] = item['cssClasses'].split(" ");
      if (item['subMenu']) item['subMenu'] = parseMenu(item['subMenu']);
    });

    return parsed;
  };

  return parseMenu(gw_getGrid(gridId).options.context.contextMenu);
}
