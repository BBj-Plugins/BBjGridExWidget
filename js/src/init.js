/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export let gw_selectedRowsStack = [];

export function gw_setData(json, options) {

  const container = $doc.getElementById('grid');
  container.innerHTML = '';

  console.log(options)

  $doc.gw_meta = json[0].meta;
  $doc.AGridComponentsMetaConfig = $doc.gw_meta;

  $doc.gw_options = options;
  window.gw_options = $doc.gw_options;
  
  $doc.gw_instance = gw_init(container, '', json, options);
}

export function gw_init(container, license, data, defaultOptions = {}) {

  if (agGrid.LicenseManager) agGrid.LicenseManager.setLicenseKey(license);

  let options = Object.assign(defaultOptions, {

    rowData: data,

    getDocument: function () {
      return $doc;
    },

    onRowDoubleClicked: function (e) {

      gw_sendEvent({
        'type': 'grid-row-doubleclick',
        'detail': [[gw_parseNodeFromEvent(e)]]
      });
    },

    onRowSelected: function (e) {
      gw_selectedRowsStack.push(e);
    },

    onSelectionChanged: function (e) {

      let details = [];
      gw_selectedRowsStack.forEach(function (e) {

        const detail = gw_parseNodeFromEvent(e);
        if (detail) details.push(detail);
      });

      if (details.length) {

        gw_selectedRowsStack = [];
        gw_sendEvent({
          'type': 'grid-row-select',
          'detail': [details]
        });
      }
    },

    getNodeChildDetails: function (rowItem) {

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
      let id = data[gw_options['__getRowNodeId']];
      id = id ? id : Math.random();
      return id;
    };
  }

  for (let i in options.columnDefs) {
    options.columnDefs[i].cellStyle = gw_cellStyler;
  }

  return new agGrid.Grid(container, options);
}
