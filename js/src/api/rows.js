/*
* This file is part of the grid project
* (c) Basis Europe <eu@Basis.AgGridComponents.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_setQuickFilter(filter) {
  gw_options.api.setQuickFilter(filter);
}

export function gw_expandAll() {
  gw_options.api.expandAll();
}

export function gw_collapseAll() {
  gw_options.api.collapseAll();
}

export function gw_setVisibleRow(index, position) {
  gw_options.api.ensureIndexVisible(index, position);
}

export function gw_navigateToNextRow(params) {

  let previousCell = params.previousCellDef;
  let suggestedNextCell = params.nextCellDef;

  const KEY_UP = 38;
  const KEY_DOWN = 40;
  const KEY_LEFT = 37;
  const KEY_RIGHT = 39;

  switch (params.key) {
    case KEY_DOWN:
      previousCell = params.previousCellDef;
      // set selected cell on current cell + 1
      gw_options.api.forEachNode((node) => {
        if (previousCell.rowIndex + 1 === node.rowIndex) {
          node.setSelected(true);
        }
      });
      return suggestedNextCell;
    case KEY_UP:
      previousCell = params.previousCellDef;
      // set selected cell on current cell - 1
      gw_options.api.forEachNode((node) => {
        if (previousCell.rowIndex - 1 === node.rowIndex) {
          node.setSelected(true);
        }
      });
      return suggestedNextCell;
    case KEY_LEFT:
    case KEY_RIGHT:
      return suggestedNextCell;
    default:
      throw new Error("You have super strange keyboard");
  }
}
