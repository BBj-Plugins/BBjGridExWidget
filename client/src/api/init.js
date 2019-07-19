/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@Basis.AgGridComponents.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_extendColumnDefinitions } from "./columns";
import { gw_navigateToNextRow }       from "./rows";
import { gw_getContextMenu }          from "./menus";
import { gw_getChartToolbarItems }    from "./charts";
import { gw_getDocument, gw_addGrid}  from "./utilities";
import {
  gw_onRowDoubleClicked,
  gw_onSelectionChanged,
  gw_onRangeSelectionChanged,
  gw_onCellClickEvent,
  gw_onCellEditingEvent,
  gw_onRowEditingEvent,
  gw_onReadyEvent,
  gw_debounce
} from "events";

const { deepParseJson } = require("deep-parse-json");
const template          = require('lodash/template');

export function gw_init(options, license , data) {
  
  // set the license key for enterprise version
  if (agGrid.LicenseManager && license)
    agGrid.LicenseManager.setLicenseKey(license);

  const id              = options.context.id;
  const container       = gw_getDocument().getElementById(id);
  // we make the grid options available as soon as possible 
  const grid            = gw_addGrid(id, {
    container,
    options
  });

  // TODO: use ag grid destroy
  container.innerHTML   = '';

  const parsedOptions   = gw_parseOptions(options);
  parsedOptions.rowData = data;

  const instance        = new agGrid.Grid(container, parsedOptions);
  grid.instance = instance;
  grid.options  = parsedOptions;

  console.log(
    `%c Grid [${id}] settings : `
    , 'background: #222; color: #bada55'
    , parsedOptions
  );
}

/**
 * Parse Options
 * 
 * Parse the grid options and return 
 * an object which can be passed to the grid
 * 
 * @param {Object} options Grid options as Json Object
 * 
 * @return {Object} options object
 */
function gw_parseOptions(options) {
  const deepParsedOptions     = deepParseJson(JSON.stringify(options));
  const id                    = deepParsedOptions.context.id;
  const getDataPathTemplate   = deepParsedOptions.context.getDataPath || "";
  // TODO: do we need to control this setting from BBj ?
  const debounceDuration      = 250;
  const finalOptions = {
    ...deepParsedOptions ,
    ...{
      getDocument:            ()     =>   gw_getDocument(),
      onCellEditingStarted:   e      => { gw_onCellEditingEvent(id, e) }                      ,
      onCellEditingStopped:   e      => { gw_onCellEditingEvent(id, e) }                      ,
      onCellValueChanged:     e      => { gw_onCellEditingEvent(id, e) }                      ,
      onRowEditingStarted:    e      => { gw_onRowEditingEvent(id, e)  }                      ,
      onRowEditingStopped:    e      => { gw_onRowEditingEvent(id, e)  }                      ,
      onRowValueChanged:      e      => { gw_onRowEditingEvent(id, e)  }                      ,
      onCellClicked:          e      => { gw_onCellClickEvent(id, e)   }                      ,
      onCellDoubleClicked:    e      => { gw_onCellClickEvent(id, e)   }                      ,
      onGridReady:            e      => { gw_onReadyEvent(id, e)       }                      ,
      getRowNodeId:           data   =>   gw_getRowNodeId(id, data)                           ,
      getContextMenuItems:    params =>   gw_getContextMenu(id, params)                       ,
      "getChartToolbarItems":             gw_getChartToolbarItems                             ,
      "popupParent":                      gw_getDocument().body,
      "onRowDoubleClicked":               gw_debounce(gw_onRowDoubleClicked, debounceDuration)         ,
      "onSelectionChanged":               gw_debounce(gw_onSelectionChanged, debounceDuration)         ,
      "onRangeSelectionChanged":          gw_debounce(gw_onRangeSelectionChanged , debounceDuration)  ,
      "components": {
        "BasicBooleansRenderer"       : Basis.AgGridComponents.BasicBooleansRenderer,
        "BasicBooleansEditor"         : Basis.AgGridComponents.BasicBooleansEditor  ,
        "BasicBooleansFilter"         : Basis.AgGridComponents.BasicBooleansFilter  ,
        "BasicNumbersEditor"          : Basis.AgGridComponents.BasicNumbersEditor   ,
        "BasicDateTimesEditor"        : Basis.AgGridComponents.BasicDateTimesEditor ,
        "BasicDateTimesFilter"        : Basis.AgGridComponents.BasicDateTimesFilter ,
        "BasicImagesRenderer"         : Basis.AgGridComponents.BasicImagesRenderer  ,
        // lodash template render
        "GWCustomHTMLTemplateRenderer": params => {
          const compiled = template(params.__TEMPLATE__);
          return compiled({ params: params });
        }
      }
    }
  };

  if (
    finalOptions.context.hasOwnProperty("navigateToNextCell") &&
    finalOptions.context.navigateToNextCell
  ) {
    finalOptions.navigateToNextCell = params => { return gw_navigateToNextRow(id, params) };
  }

  if (getDataPathTemplate && finalOptions.treeData) {
    const getDataPathTemplateComplied = template(getDataPathTemplate);
    finalOptions.getDataPath = data => getDataPathTemplateComplied({ data: data });
  }

  // extend the column definitions
  gw_extendColumnDefinitions(finalOptions.columnDefs);

  return finalOptions;
}