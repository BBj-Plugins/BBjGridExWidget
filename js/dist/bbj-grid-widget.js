(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(1);

Object.keys(_events).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _events[key];
    }
  });
});

var _api = __webpack_require__(2);

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _api[key];
    }
  });
});

var _init = __webpack_require__(3);

Object.keys(_init).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _init[key];
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gw_postEvent = gw_postEvent;
exports.gw_sendEvent = gw_sendEvent;
exports.gw_parseNodeFromEvent = gw_parseNodeFromEvent;

/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/
function gw_postEvent(ev) {
  window.basisDispatchCustomEvent(ev, ev.payload);
}

function gw_sendEvent(payload) {
  var d = $doc.getElementById('eventTransporterDiv');
  var event = new Event('click');
  event.payload = payload;
  d.dispatchEvent(event);
}

function gw_parseNodeFromEvent(e) {
  if (false === e.node.group) {
    return {
      id: e.node.id,
      // auto generated id by ag-gird (can be changed , but we will not change it)
      childIndex: e.node.childIndex,
      // row index when it is a child in a group 
      // childrenCount: e.node.group ? e.node.allChildrenCount : 0,
      selected: Boolean(e.node.selected),
      data: e.node.data,
      // level: e.node.level, // the group level 
      // hasParent: hasParent,
      // parentId: hasParent ? e.node.parent.id : -1,
      parentKey: e.node.hasOwnProperty('parent') ? e.node.parent.key : ''
    };
  }

  return false;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gw_cellStyler = gw_cellStyler;
exports.gw_sizeColumnsToFit = gw_sizeColumnsToFit;
exports.gw_setSelectedRows = gw_setSelectedRows;
exports.gw_selectAll = gw_selectAll;
exports.gw_deselectAll = gw_deselectAll;
exports.gw_expandAll = gw_expandAll;
exports.gw_collapseAll = gw_collapseAll;
exports.gw_setVisibleRow = gw_setVisibleRow;
exports.gw_setVisibleColumn = gw_setVisibleColumn;
exports.gw_setColumnWidth = gw_setColumnWidth;
exports.gw_pinColumn = gw_pinColumn;
exports.gw_moveColumn = gw_moveColumn;
exports.gw_setQuickFilter = gw_setQuickFilter;
exports.gw_setState = gw_setState;
exports.gw_getState = gw_getState;

/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/
function gw_cellStyler(params) {
  var cdef = params.column.colDef.cellStyleDefaults || {};
  var meta = {};
  if (params.data.meta) meta = params.data.meta[params.column.colId] || {};
  var colStyle = {};
  if (meta["FGCOLOR"]) colStyle.color = meta["FGCOLOR"];else if (cdef["FGCOLOR"]) colStyle["color"] = cdef["FGCOLOR"];
  if (meta["BGCOLOR"]) colStyle["background-color"] = meta["BGCOLOR"];else if (cdef["BGCOLOR"]) colStyle["background-color"] = cdef["BGCOLOR"];
  if (meta["ALIGN"]) colStyle["text-align"] = meta["ALIGN"];else if (cdef["ALIGN"]) colStyle["text-align"] = cdef["ALIGN"];

  if (colStyle.color || colStyle["background-color"] || colStyle["text-align"]) {
    return colStyle;
  } else {
    return null;
  }
}

function gw_sizeColumnsToFit() {
  gw_options.api.sizeColumnsToFit();
}

function gw_setSelectedRows(rows) {
  gw_options.api.forEachNodeAfterFilterAndSort(function (node) {
    if (rows.indexOf(node.rowIndex) > -1) {
      node.setSelected(true);
      node.expanded = true;
    }
  }.bind(this));
  gw_options.api.onGroupExpandedOrCollapsed();
}

function gw_selectAll(filtered) {
  if (1 === filtered) {
    gw_options.api.selectAllFiltered();
  } else {
    gw_options.api.selectAll();
  }
}

function gw_deselectAll(filtered) {
  if (1 === filtered) {
    gw_options.api.deselectAllFiltered();
  } else {
    gw_options.api.deselectAll();
  }
}

function gw_expandAll() {
  gw_options.api.expandAll();
}

function gw_collapseAll() {
  gw_options.api.collapseAll();
}

function gw_setVisibleRow(index, position) {
  gw_options.api.ensureIndexVisible(index, position);
}

function gw_setVisibleColumn(columnId) {
  gw_options.api.ensureColumnVisible(columnId);
}

function gw_setColumnWidth(columnid, width) {
  gw_options.api.setColumnWidth(columnid, Number(width));
}

function gw_pinColumn(columnid, pin) {
  gw_options.columnApi.setColumnPinned(columnid, pin);
}

function gw_moveColumn(columnid, toIndex) {
  gw_options.columnApi.moveColumn(columnid, toIndex);
}

function gw_setQuickFilter(filter) {
  gw_options.api.setQuickFilter(filter);
}

function gw_setState(state) {
  gw_options.columnApi.setColumnState(state);
}

function gw_getState() {
  var state = gw_options.columnApi.getColumnState();

  try {
    return JSON.stringify(state);
  } catch (e) {
    console.warn('Failed to parse state', e);
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gw_setData = gw_setData;
exports.gw_init = gw_init;
exports.gw_selectedRowsStack = void 0;

/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/
var gw_selectedRowsStack = [];
exports.gw_selectedRowsStack = gw_selectedRowsStack;

function gw_setData(json, options) {
  var container = $doc.getElementById('grid');
  container.innerHTML = '';
  console.log(options);
  $doc.gw_meta = json[0].meta;
  $doc.AGridComponentsMetaConfig = $doc.gw_meta;
  $doc.gw_options = options;
  window.gw_options = $doc.gw_options;
  $doc.gw_instance = gw_init(container, '', json, options);
}

function gw_init(container, license, data) {
  var defaultOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (agGrid.LicenseManager) agGrid.LicenseManager.setLicenseKey(license);
  var options = Object.assign(defaultOptions, {
    rowData: data,
    getDocument: function getDocument() {
      return $doc;
    },
    onRowDoubleClicked: function onRowDoubleClicked(e) {
      gw_sendEvent({
        'type': 'grid-row-doubleclick',
        'detail': [[gw_parseNodeFromEvent(e)]]
      });
    },
    onRowSelected: function onRowSelected(e) {
      gw_selectedRowsStack.push(e);
    },
    onSelectionChanged: function onSelectionChanged(e) {
      var details = [];
      gw_selectedRowsStack.forEach(function (e) {
        var detail = gw_parseNodeFromEvent(e);
        if (detail) details.push(detail);
      });

      if (details.length) {
        exports.gw_selectedRowsStack = gw_selectedRowsStack = [];
        gw_sendEvent({
          'type': 'grid-row-select',
          'detail': [details]
        });
      }
    },
    getNodeChildDetails: function getNodeChildDetails(rowItem) {
      var key = rowItem[gw_options["__getParentNodeId"]];

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

  if (gw_options.hasOwnProperty('__getRowNodeId')) {
    options.getRowNodeId = function (data) {
      var id = data[gw_options['__getRowNodeId']];
      id = id ? id : Math.random();
      return id;
    };
  }

  for (var i in options.columnDefs) {
    options.columnDefs[i].cellStyle = gw_cellStyler;
  }

  return new agGrid.Grid(container, options);
}

/***/ })
/******/ ])));
//# sourceMappingURL=bbj-grid-widget.js.map