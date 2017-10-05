/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

bbj_grid_supported_value_formatter = {
  'date': bbj_grid_widget_get_value_formatter_date
}

function bbj_formate_date(date, format) {

  if (!date || !format) return null;

  date = new Date(date);

  var year = date.getYear();
  var fullYear = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDay();
  var hours24 = date.getHours();
  var hours12 = hours24 - 12;
  hours12 = hours12 <= 12 ? hours12 : hours24;
  hours12 = hours12 == 0 ? 12 : hours12;
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var translations = {

    // year 
    "Yz": year,
    "Ys": fullYear,
    "Yl": fullYear,
    "Yp": String.fromCharCode(year),
    "Yd": fullYear,
    "Y": fullYear,

    // month
    "Mz": String(month).length == 1 ? "0" + month : month,
    "Ms": month,
    "Ml": month,
    "Mp": String.fromCharCode(month),
    "Md": month,
    "M": month,

    // day
    "Dz": String(day).length == 1 ? "0" + day : day,
    "Ds": day,
    "Dl": day,
    "Dp": String.fromCharCode(day),
    "Dd": day,
    "D": day,

    // hour 24
    "Hs": hours24,
    "Hl": hours24,
    "Hp": String.fromCharCode(hours24),
    "Hd": hours24,
    "H": hours24,

    // hour 12
    "hs": String(hours12).length == 1 ? "0" + hours12 : hours12,
    "hl": hours12,
    "hp": String.fromCharCode(hours12),
    "hd": hours12,
    "h": hours12,

    // minutes
    "ms": String(minutes).length == 1 ? "0" + minutes : minutes,
    "ml": minutes,
    "mp": String.fromCharCode(minutes),
    "md": minutes,
    "m": minutes,

    // seconds
    "ss": String(seconds).length == 1 ? "0" + seconds : seconds,
    "sl": seconds,
    "sp": String.fromCharCode(seconds),
    "sd": seconds,
    "s": seconds,

    'pd': hours24 > 12 ? 'PM' : 'AM',
    'p': hours24 > 12 ? 'PM' : 'AM',
  };

  var result = format;
  for (var k in translations) {
    result = result.replace(new RegExp('(%' + k + ')', 'g'), translations[k]);
  }

  return result;
}

function bbj_grid_widget_post_event(ev) {
  window.basisDispatchCustomEvent(ev, ev.payload);
}

function bbj_grid_widget_send_event(payload) {
  var d = $doc.getElementById('eventTransporterDiv');
  var event = new Event('click');
  event.payload = payload;
  d.dispatchEvent(event);
}

function bbj_grid_widget_cell_render(params) {

  var cdef = params.column.colDef.cellStyleDefaults || {};

  var meta = {};

  if (params.data.meta)
    meta = params.data.meta[params.column.colId] || {};

  var colStyle = {};

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
};

function bbj_grid_widget_init(container, license, data, options) {

  if (agGrid.LisenseManager) {
    agGrid.LicenseManager.setLicenseKey(license);
  }

  options = Object.assign(options || {}, {

    rowData: data,

    getDocument: function () {
      return $doc;
    },

    onRowDoubleClicked: function (e) {

      bbj_grid_widget_send_event(
        { 'type': 'grid-row-doubleclick', 'rows': e.data, 'nodes': e.rowIndex }
      );
    },

    onSelectionChanged: function (e) {

      var r = e.api.getSelectedRows();
      var nodes = e.api.getSelectedNodes();
      var n = [];
      for (var i in nodes) {
        var node_i = nodes[i];
        n.push(node_i.id);
      }

      bbj_grid_widget_send_event(
        { 'type': 'grid-select-row', 'rows': r, 'nodes': n }
      );
    },

    getNodeChildDetails: function (rowItem) {

      if (rowItem.__node__children) {
        return {
          group: true,

          expanded: false,
          // provide ag-Grid with the children of this group
          children: rowItem.__node__children,
          // the key is used by the default group cellRenderer
          key: rowItem.__node__name
        };
      } else {
        return null;
      }
    }
  });

  for (var i in options.columnDefs) {
    options.columnDefs[i].cellStyle = bbj_grid_widget_cell_render;
    options.columnDefs[i].valueFormatter = bbj_grid_widget_get_value_formatter(
      options.columnDefs[i].filter
    );
  }

  return new agGrid.Grid(container, options);
}

function bbj_grid_widget_fit_grid(fitmode) {
  $doc.bbj_grid_widget.api.sizeColumnsToFit();
}

function bbj_grid_widget_get_state() {

  var state = $doc.bbj_grid_widget.columnApi.getColumnState();
  return JSON.stringify(state);
}

function bbj_grid_widget_set_state(state) {
  $doc.bbj_grid_widget.columnApi.setColumnState(state);
}

function bbj_grid_widget_get_value_formatter(filter) {

  return bbj_grid_supported_value_formatter.hasOwnProperty(filter) ?
    bbj_grid_supported_value_formatter[filter] : null;
}

function bbj_grid_widget_get_value_formatter_date(data) {

  if (
    $doc.bbj_grid_widget_meta.hasOwnProperty(data.colDef.field) &&
    $doc.bbj_grid_widget_meta[data.colDef.field].hasOwnProperty('MASk')
  ) {
    return bbj_formate_date(
      data.value,
      $doc.bbj_grid_widget_meta[data.colDef.field].MASK //'%Y-%Mz-%Dz'
    );
  } else return data.value;
}

function bbj_grid_widget_set_data(json, options) {

  var container = $doc.getElementById('grid');
  container.innerHTML = '';
  $doc.bbj_grid_widget_instance = bbj_grid_widget_init(container, '', json, options);
  $doc.bbj_grid_widget_meta = json[0].meta;
  $doc.bbj_grid_widget = options;
}
