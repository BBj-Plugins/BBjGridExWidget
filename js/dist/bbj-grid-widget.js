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

var _api = __webpack_require__(5);

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _api[key];
    }
  });
});

var _init = __webpack_require__(10);

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

var _utilities = __webpack_require__(2);

Object.keys(_utilities).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utilities[key];
    }
  });
});

var _selections = __webpack_require__(3);

Object.keys(_selections).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _selections[key];
    }
  });
});

var _editing = __webpack_require__(4);

Object.keys(_editing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _editing[key];
    }
  });
});

/***/ }),
/* 2 */
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
  if (true === e.node.group) return false; // we do not manage groups

  var detail = {
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
  return detail;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gw_onRowDoubleClicked = gw_onRowDoubleClicked;
exports.gw_onRowSelected = gw_onRowSelected;
exports.gw_onSelectionChanged = gw_onSelectionChanged;
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

function gw_onRowDoubleClicked(e) {
  gw_sendEvent({
    'type': 'grid-row-doubleclick',
    'detail': [[gw_parseNodeFromEvent(e)]]
  });
}

function gw_onRowSelected(e) {
  gw_selectedRowsStack.push(e);
}

function gw_onSelectionChanged() {
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
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gw_onCellEditingsEvent = gw_onCellEditingsEvent;
exports.gw_onRowEditingsEvent = gw_onRowEditingsEvent;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/
function gw_onCellEditingsEvent(e) {
  var parsed = gw_parseNodeFromEvent(e);
  var type = e.type;
  var colId = e.column.colId;
  var value;

  if (type === 'cellValueChanged') {
    value = {
      value: e.newValue,
      oldValue: e.oldValue
    };
  } else {
    value = {
      value: e.value
    };
  }

  console.log(_extends({
    row: parsed
  }, value));

  if (parsed) {
    gw_sendEvent({
      'type': e.type,
      'detail': [[_extends({
        row: parsed
      }, value, {
        column: colId
      })]]
    });
  }
}

function gw_onRowEditingsEvent(e) {
  var parsed = gw_parseNodeFromEvent(e);

  if (parsed) {
    gw_sendEvent({
      'type': e.type,
      'detail': [[parsed]]
    });
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _columns = __webpack_require__(6);

Object.keys(_columns).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _columns[key];
    }
  });
});

var _rows = __webpack_require__(7);

Object.keys(_rows).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rows[key];
    }
  });
});

var _cells = __webpack_require__(8);

Object.keys(_cells).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cells[key];
    }
  });
});

var _state = __webpack_require__(9);

Object.keys(_state).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _state[key];
    }
  });
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gw_sizeColumnsToFit = gw_sizeColumnsToFit;
exports.gw_setSelectedRows = gw_setSelectedRows;
exports.gw_selectAll = gw_selectAll;
exports.gw_deselectAll = gw_deselectAll;
exports.gw_setVisibleColumn = gw_setVisibleColumn;
exports.gw_setColumnWidth = gw_setColumnWidth;
exports.gw_pinColumn = gw_pinColumn;
exports.gw_moveColumn = gw_moveColumn;

/*
* This file is part of the grid project
* (c) Basis Europe <eu@Basis.AgGridComponents.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/
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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gw_setQuickFilter = gw_setQuickFilter;
exports.gw_expandAll = gw_expandAll;
exports.gw_collapseAll = gw_collapseAll;
exports.gw_setVisibleRow = gw_setVisibleRow;

/*
* This file is part of the grid project
* (c) Basis Europe <eu@Basis.AgGridComponents.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/
function gw_setQuickFilter(filter) {
  gw_options.api.setQuickFilter(filter);
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gw_cellStyler = gw_cellStyler;

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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gw_setState = gw_setState;
exports.gw_getState = gw_getState;

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gw_getSupportedColumnTypes = gw_getSupportedColumnTypes;
exports.gw_getDefaultComponents = gw_getDefaultComponents;
exports.gw_init = gw_init;
exports.gw_setData = gw_setData;

/*
* This file is part of the grid project
* (c) Basis Europe <eu@Basis.AgGridComponents.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/
function gw_getSupportedColumnTypes() {
  return {
    "basic-boolean": {
      cellRenderer: 'BasicBooleansRenderer',
      cellEditor: 'BasicBooleansEditor',
      filter: 'BasicBooleansFilter',
      floatingFilter: 'BasicBooleansFilter'
    },
    "basic-number": {
      cellRenderer: 'BasicNumbersRenderer',
      cellEditor: 'BasicNumbersEditor',
      filter: 'agNumberColumnFilter',
      filterParams: {
        inRangeInclusive: true
      },
      floatingFilter: 'agNumberColumnFilter',
      floatingFilterParams: {
        inRangeInclusive: true
      }
    }
  };
}

function gw_getDefaultComponents() {
  return {
    // Booleans
    'BasicBooleansRenderer': Basis.AgGridComponents.BasicBooleansRenderer,
    'BasicBooleansEditor': Basis.AgGridComponents.BasicBooleansEditor,
    'BasicBooleansFilter': Basis.AgGridComponents.BasicBooleansFilter,
    // Numbers
    'BasicNumbersRenderer': Basis.AgGridComponents.BasicNumbersRenderer,
    'BasicNumbersEditor': Basis.AgGridComponents.BasicNumbersEditor
  };
}

function gw_init(container, license, data) {
  var defaultOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (agGrid.LicenseManager) agGrid.LicenseManager.setLicenseKey(license);
  var options = Object.assign(defaultOptions, {
    rowData: data,
    getDocument: function getDocument() {
      return $doc;
    },
    columnTypes: gw_getSupportedColumnTypes(),
    components: gw_getDefaultComponents(),
    onRowDoubleClicked: gw_onRowDoubleClicked,
    onRowSelected: gw_onRowSelected,
    onSelectionChanged: gw_onSelectionChanged,
    onCellEditingStarted: gw_onCellEditingsEvent,
    onCellEditingStopped: gw_onCellEditingsEvent,
    onCellValueChanged: gw_onCellEditingsEvent,
    onRowEditingStarted: gw_onRowEditingsEvent,
    onRowEditingStopped: gw_onRowEditingsEvent,
    onRowValueChanged: gw_onRowEditingsEvent,
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

function gw_setData(json, options) {
  var container = $doc.getElementById('grid');
  container.innerHTML = '';
  console.log(options);
  window.gw_meta = json[0].meta;
  window.AGridComponentsMetaConfig = gw_meta;
  window.gw_options = options;
  window.gw_instance = gw_init(container, '', json, options);
}

/***/ })
/******/ ])));
//# sourceMappingURL=bbj-grid-widget.js.map