/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

bbj_grid_selected_row_events = [];

bbj_grid_supported_value_formatter = {
  'date': bbj_grid_widget_get_value_formatter_date,
  'number': bbj_grid_widget_get_value_formatter_number
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

function bbj_grid_build_node_info_from_event(e) {

  if (false === e.node.group) {
    return {
      id: e.node.id, // auto generated id by ag-gird (can be changed , but we will not change it)
      childIndex: e.node.childIndex, // row index when it is a child in a group 
      // childrenCount: e.node.group ? e.node.allChildrenCount : 0,
      selected: Boolean(e.node.selected),
      data: e.node.data,
      // level: e.node.level, // the group level 

      // hasParent: hasParent,
      // parentId: hasParent ? e.node.parent.id : -1,
      parentKey: e.node.hasOwnProperty('parent') ? e.node.parent.key : '',
    };
  }

  return false;

  // var parents = {};
  // if (hasParent) {
  //   var next = e.node.parent;
  //   var parentHasParent = next.hasOwnProperty('parent') ? true : false;
  //   while (next) {

  //     parents[next.id] = {
  //       id: next.id, // auto generated id by ag-gird (can be changed , but we will not change it)
  //       index: next.rowIndex || -1, // row idnex
  //       childIndex: next.childIndex, // row index when it is a child in a group 
  //       childrenCount: next.group ? next.allChildrenCount : 0,
  //       selected: Boolean(next.selected),
  //       data: next.data,

  //       group: Boolean(next.group), // whether the node is a group 
  //       level: next.level, // the group level 

  //       hasParent: parentHasParent,
  //       parentId: parentHasParent ? next.parent.id : -1,
  //       parentKey: parentHasParent ? next.parent.key : '',
  //     };


  //     next = parentHasParent ? next.parent : false;
  //     parentHasParent = next.hasOwnProperty('parent') ? true : false;
  //   }
  // }

  // // result.parents = parents;
  // return result;
}

function bbj_grid_widget_init(container, license, data, options) {

  if (agGrid.LicenseManager) {
    agGrid.LicenseManager.setLicenseKey(license);
  }

  options = Object.assign(options || {}, {

    rowData: data,

    getDocument: function () {
      return $doc;
    },

    onRowDoubleClicked: function (e) {

      bbj_grid_widget_send_event({
        'type': 'grid-row-doubleclick',
        'detail': [[bbj_grid_build_node_info_from_event(e)]]
      });
    },

    onRowSelected: function (e) {
      bbj_grid_selected_row_events.push(e);
    },

    onSelectionChanged: function (e) {

      var details = [];
      bbj_grid_selected_row_events.forEach(function (e) {
        var detail = bbj_grid_build_node_info_from_event(e);
        if (detail) details.push(detail);
      });

      if (details.length) {
        bbj_grid_selected_row_events = [];

        bbj_grid_widget_send_event({
          'type': 'grid-row-select',
          'detail': [details]
        });
      }
    },

    getNodeChildDetails: function (rowItem) {

      var key = rowItem[$doc.bbj_grid_widget["__getParentNodeId"]];
      if (rowItem.__node__children) {
        return {
          group: true,

          expanded: false,
          // provide ag-Grid with the children of this group
          children: rowItem.__node__children,
          // the key is used by the default group cellRenderer
          key: key ? key : -1
        };
      } else {
        return null;
      }
    }
  });

  if ($doc.bbj_grid_widget["__getRowNodeId"]) {
    options.getRowNodeId = function (data) {
      var id = data[$doc.bbj_grid_widget["__getRowNodeId"]];
      id = id ? id : Math.random();
      return id;
    };
  }

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

function bbj_grid_widget_set_selected_rows(rows) {

  $doc.bbj_grid_widget.api.forEachNodeAfterFilterAndSort(function (node) {
    if (rows.indexOf(node.rowIndex) > -1) {
      node.setSelected(true);
      node.expanded = true;
    }
  }.bind(this));

  $doc.bbj_grid_widget.api.onGroupExpandedOrCollapsed()
}

function bbj_grid_widget_set_select_all(filtered) {
  if (1 === filtered) {
    $doc.bbj_grid_widget.api.selectAllFiltered();
  } else {
    $doc.bbj_grid_widget.api.selectAll();
  }
}

function bbj_grid_widget_set_deselect_all(filtered) {

  if (1 === filtered) {
    $doc.bbj_grid_widget.api.deselectAllFiltered();
  } else {
    $doc.bbj_grid_widget.api.deselectAll();
  }
}

function bbj_grid_widget_set_expand_all() {
  $doc.bbj_grid_widget.api.expandAll();
}

function bbj_grid_widget_set_collapse_all() {
  $doc.bbj_grid_widget.api.collapseAll();
}

function bbj_grid_widget_set_visible_row(index, position) {
  $doc.bbj_grid_widget.api.ensureIndexVisible(index, position);
}

function bbj_grid_widget_set_visible_column(columnId) {
  $doc.bbj_grid_widget.api.ensureColumnVisible(columnId);
}

function bbj_grid_widget_set_column_width(columnid, width) {
  $doc.bbj_grid_widget.columnApi.setColumnWidth(columnid, Number(width));
}

function bbj_grid_widget_set_column_pin(columnid, pin) {
  $doc.bbj_grid_widget.columnApi.setColumnPinned(columnid, pin);
}

function bbj_grid_widget_set_column_move(columnid, toIndex) {
  $doc.bbj_grid_widget.columnApi.moveColumn(columnid, toIndex);
}

function bbj_grid_widget_set_quick_filter(filter) {
  $doc.bbj_grid_widget.api.setQuickFilter(filter);
}

function bbj_grid_widget_get_state() {

  var state = $doc.bbj_grid_widget.columnApi.getColumnState();
  return JSON.stringify(state);
}

function bbj_grid_widget_set_state(state) {
  $doc.bbj_grid_widget.columnApi.setColumnState(state);
}

function bbj_grid_widget_get_value_formatter(filter) {

  return bbj_grid_supported_value_formatter && bbj_grid_supported_value_formatter.hasOwnProperty(filter) ?
    bbj_grid_supported_value_formatter[filter] : null;
}

function bbj_grid_widget_get_value_formatter_date(data) {

  if (
    ($doc.bbj_grid_widget_meta && $doc.bbj_grid_widget_meta.hasOwnProperty(data.colDef.field)) &&
    $doc.bbj_grid_widget_meta[data.colDef.field].hasOwnProperty('MASK')
  ) {
    return bbj_mask_date(
      data.value,
      $doc.bbj_grid_widget_meta[data.colDef.field].MASK //'%Y-%Mz-%Dz'
    );
  } else return data.value;
}

function bbj_grid_widget_get_value_formatter_number(data) {

  if (
    ($doc.bbj_grid_widget_meta && $doc.bbj_grid_widget_meta.hasOwnProperty(data.colDef.field)) &&
    $doc.bbj_grid_widget_meta[data.colDef.field].hasOwnProperty('MASK')
  ) {
    return bbj_mask_number(
      data.value,
      $doc.bbj_grid_widget_meta[data.colDef.field].MASK
    );
  } else return data.value;
}

function bbj_grid_widget_set_data(json, options) {

  var container = $doc.getElementById('grid');
  container.innerHTML = '';

  $doc.bbj_grid_widget_meta = json[0].meta;
  $doc.bbj_grid_widget = options;
  $doc.bbj_grid_widget_instance = bbj_grid_widget_init(container, '', json, options);
}
