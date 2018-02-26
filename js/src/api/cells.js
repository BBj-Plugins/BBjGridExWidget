/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_cellStyler(params) {

  let cdef = params.column.colDef.cellStyleDefaults || {};

  var meta = {};

  if (params.data.meta)
    meta = params.data.meta[params.column.colId] || {};

  let colStyle = {};

  if (meta["FGCOLOR"])
    colStyle.color = meta["FGCOLOR"];
  else
    if (cdef["FGCOLOR"])
      colStyle["color"] = cdef["FGCOLOR"];

  if (meta["BGCOLOR"])
    colStyle["background-color"] = meta["BGCOLOR"];
  else
    if (cdef["BGCOLOR"])
      colStyle["background-color"] = cdef["BGCOLOR"];

  if (meta["ALIGN"])
    colStyle["text-align"] = meta["ALIGN"];
  else
    if (cdef["ALIGN"])
      colStyle["text-align"] = cdef["ALIGN"];

  if (colStyle.color || colStyle["background-color"] || colStyle["text-align"]) {
    return colStyle;
  }
  else {
    return null;
  }
}
