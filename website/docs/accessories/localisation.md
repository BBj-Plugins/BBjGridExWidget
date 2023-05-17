---
sidebar_position: 7
title: Localization
---

All the displayed text in the grid is customizable for the purposes of localization. This is done by providing locale information to the grid for the required language using the [`GxLanguageManager`](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/GxLanguageManager.html)

The default language of the grid is American English. The grid also provides the localization for `German`, `Dutch` and `French`. If you want to provide the grid in another language, you must provide to the grid the relevant locale information.

## Creating a Locale

By default, the grid does not require a locale. If no locale is provided, the grid will default to English. If a locale is provided but is missing values, the default English will be used for the missing values.

An example full locale file is provided below. To support other languages, the first step is to copy this file and translate the values into the required language.

```json
{
  "selectAll": "(Select All)",
  "selectAllSearchResults": "(Select All Search Results)",
  "searchOoo": "Search...",
  "blanks": "(Blanks)",
  "noMatches": "No matches",
  "filterOoo": "Filter...",
  "equals": "Equals",
  "notEqual": "Not equal",
  "blank": "Blank",
  "notBlank": "Not blank",
  "empty": "Choose One",
  "lessThan": "Less than",
  "greaterThan": "Greater than",
  "lessThanOrEqual": "Less than or equal",
  "greaterThanOrEqual": "Greater than or equal",
  "inRange": "In range",
  "inRangeStart": "from",
  "inRangeEnd": "to",
  "contains": "Contains",
  "notContains": "Not contains",
  "startsWith": "Starts with",
  "endsWith": "Ends with",
  "dateFormatOoo": "yyyy-mm-dd",
  "andCondition": "AND",
  "orCondition": "OR",
  "applyFilter": "Apply",
  "resetFilter": "Reset",
  "clearFilter": "Clear",
  "cancelFilter": "Cancel",
  "textFilter": "Text Filter",
  "numberFilter": "Number Filter",
  "dateFilter": "Date Filter",
  "setFilter": "Set Filter",
  "groupFilterSelect": "Select field:",
  "columns": "Columns",
  "filters": "Filters",
  "pivotMode": "Pivot Mode",
  "groups": "Row Groups",
  "rowGroupColumnsEmptyMessage": "Drag here to set row groups",
  "values": "Values",
  "valueColumnsEmptyMessage": "Drag here to aggregate",
  "pivots": "Column Labels",
  "pivotColumnsEmptyMessage": "Drag here to set column labels",
  "group": "Group",
  "rowDragRow": "row",
  "rowDragRows": "rows",
  "loadingOoo": "Loading...",
  "loadingError": "ERR",
  "noRowsToShow": "No Rows To Show",
  "enabled": "Enabled",
  "pinColumn": "Pin Column",
  "pinLeft": "Pin Left",
  "pinRight": "Pin Right",
  "noPin": "No Pin",
  "valueAggregation": "Value Aggregation",
  "noAggregation": "None",
  "autosizeThiscolumn": "Autosize This Column",
  "autosizeAllColumns": "Autosize All Columns",
  "groupBy": "Group by",
  "ungroupBy": "Un-Group by",
  "addToValues": "Add ${variable} to values",
  "removeFromValues": "Remove ${variable} from values",
  "addToLabels": "Add ${variable} to labels",
  "removeFromLabels": "Remove ${variable} from labels",
  "resetColumns": "Reset Columns",
  "expandAll": "Expand All",
  "collapseAll": "Close All",
  "copy": "Copy",
  "ctrlC": "Ctrl+C",
  "copyWithHeaders": "Copy With Headers",
  "copyWithGroupHeaders": "Copy with Group Headers",
  "cut": "Cut",
  "paste": "Paste",
  "ctrlV": "Ctrl+V",
  "export": "Export",
  "csvExport": "CSV Export",
  "excelExport": "Excel Export",
  "sum": "Sum",
  "first": "First",
  "last": "Last",
  "min": "Min",
  "max": "Max",
  "none": "None",
  "count": "Count",
  "avg": "Average",
  "filteredRows": "Filtered",
  "selectedRows": "Selected",
  "totalRows": "Total Rows",
  "totalAndFilteredRows": "Rows",
  "more": "More",
  "to": "to",
  "of": "of",
  "page": "Page",
  "nextPage": "Next Page",
  "lastPage": "Last Page",
  "firstPage": "First Page",
  "previousPage": "Previous Page",
  "pivotColumnGroupTotals": "Total",
  "pivotChartAndPivotMode": "Pivot Chart & Pivot Mode",
  "pivotChart": "Pivot Chart",
  "chartRange": "Chart Range",
  "columnChart": "Column",
  "groupedColumn": "Grouped",
  "stackedColumn": "Stacked",
  "normalizedColumn": "100% Stacked",
  "barChart": "Bar",
  "groupedBar": "Grouped",
  "stackedBar": "Stacked",
  "normalizedBar": "100% Stacked",
  "pieChart": "Pie",
  "pie": "Pie",
  "doughnut": "Doughnut",
  "line": "Line",
  "xyChart": "X Y (Scatter)",
  "scatter": "Scatter",
  "bubble": "Bubble",
  "areaChart": "Area",
  "area": "Area",
  "stackedArea": "Stacked",
  "normalizedArea": "100% Stacked",
  "histogramChart": "Histogram",
  "histogramFrequency": "Frequency",
  "combinationChart": "Combination",
  "columnLineCombo": "Column & Line",
  "AreaColumnCombo": "Area & Column",
  "pivotChartTitle": "Pivot Chart",
  "rangeChartTitle": "Range Chart",
  "settings": "Settings",
  "data": "Data",
  "format": "Format",
  "categories": "Categories",
  "defaultCategory": "(None)",
  "series": "Series",
  "xyValues": "X Y Values",
  "paired": "Paired Mode",
  "axis": "Axis",
  "navigator": "Navigator",
  "color": "Color",
  "thickness": "Thickness",
  "xType": "X Type",
  "automatic": "Automatic",
  "category": "Category",
  "number": "Number",
  "time": "Time",
  "autoRotate": "Auto Rotate",
  "xRotation": "X Rotation",
  "yRotation": "Y Rotation",
  "ticks": "Ticks",
  "width": "Width",
  "height": "Height",
  "length": "Length",
  "padding": "Padding",
  "spacing": "Spacing",
  "chart": "Chart",
  "title": "Title",
  "titlePlaceholder": "Chart title - double click to edit",
  "background": "Background",
  "font": "Font",
  "top": "Top",
  "right": "Right",
  "bottom": "Bottom",
  "left": "Left",
  "labels": "Labels",
  "size": "Size",
  "minSize": "Minimum Size",
  "maxSize": "Maximum Size",
  "legend": "Legend",
  "position": "Position",
  "markerSize": "Marker Size",
  "markerStroke": "Marker Stroke",
  "markerPadding": "Marker Padding",
  "itemSpacing": "Item Spacing",
  "itemPaddingX": "Item Padding X",
  "itemPaddingY": "Item Padding Y",
  "layoutHorizontalSpacing": "Horizontal Spacing",
  "layoutVerticalSpacing": "Vertical Spacing",
  "strokeWidth": "Stroke Width",
  "lineDash": "Line Dash",
  "offset": "Offset",
  "offsets": "Offsets",
  "tooltips": "Tooltips",
  "callout": "Callout",
  "markers": "Markers",
  "shadow": "Shadow",
  "blur": "Blur",
  "xOffset": "X Offset",
  "yOffset": "Y Offset",
  "lineWidth": "Line Width",
  "normal": "Normal",
  "bold": "Bold",
  "italic": "Italic",
  "boldItalic": "Bold Italic",
  "predefined": "Predefined",
  "fillOpacity": "Fill Opacity",
  "strokeOpacity": "Line Opacity",
  "histogramBinCount": "Bin count",
  "columnGroup": "Column",
  "barGroup": "Bar",
  "pieGroup": "Pie",
  "lineGroup": "Line",
  "scatterGroup": "X Y (Scatter)",
  "areaGroup": "Area",
  "histogramGroup": "Histogram",
  "combinationGroup": "Combination",
  "groupedColumnTooltip": "Grouped",
  "stackedColumnTooltip": "Stacked",
  "normalizedColumnTooltip": "100% Stacked",
  "groupedBarTooltip": "Grouped",
  "stackedBarTooltip": "Stacked",
  "normalizedBarTooltip": "100% Stacked",
  "pieTooltip": "Pie",
  "doughnutTooltip": "Doughnut",
  "lineTooltip": "Line",
  "groupedAreaTooltip": "Area",
  "stackedAreaTooltip": "Stacked",
  "normalizedAreaTooltip": "100% Stacked",
  "scatterTooltip": "Scatter",
  "bubbleTooltip": "Bubble",
  "histogramTooltip": "Histogram",
  "columnLineComboTooltip": "Column & Line",
  "areaColumnComboTooltip": "Area & Column",
  "customComboTooltip": "Custom Combination",
  "noDataToChart": "No data available to be charted.",
  "pivotChartRequiresPivotMode": "Pivot Chart requires Pivot Mode enabled.",
  "chartSettingsToolbarTooltip": "Menu",
  "chartLinkToolbarTooltip": "Linked to Grid",
  "chartUnlinkToolbarTooltip": "Unlinked from Grid",
  "chartDownloadToolbarTooltip": "Download Chart",
  "seriesChartType": "Series Chart Type",
  "seriesType": "Series Type",
  "secondaryAxis": "Secondary Axis",
  "ariaChecked": "checked",
  "ariaColumn": "Column",
  "ariaColumnGroup": "Column Group",
  "ariaColumnList": "Column List",
  "ariaColumnSelectAll": "Toggle Select All Columns",
  "ariaDateFilterInput": "Date Filter Input",
  "ariaDefaultListName": "List",
  "ariaFilterColumnsInput": "Filter Columns Input",
  "ariaFilterFromValue": "Filter from value",
  "ariaFilterInput": "Filter Input",
  "ariaFilterList": "Filter List",
  "ariaFilterToValue": "Filter to value",
  "ariaFilterValue": "Filter Value",
  "ariaFilteringOperator": "Filtering Operator",
  "ariaHidden": "hidden",
  "ariaIndeterminate": "indeterminate",
  "ariaInputEditor": "Input Editor",
  "ariaMenuColumn": "Press CTRL ENTER to open column menu.",
  "ariaRowDeselect": "Press SPACE to deselect this row",
  "ariaRowSelectAll": "Press Space to toggle all rows selection",
  "ariaRowToggleSelection": "Press Space to toggle row selection",
  "ariaRowSelect": "Press SPACE to select this row",
  "ariaSearch": "Search",
  "ariaSortableColumn": "Press ENTER to sort",
  "ariaToggleVisibility": "Press SPACE to toggle visibility",
  "ariaUnchecked": "unchecked",
  "ariaVisible": "visible",
  "ariaSearchFilterValues": "Search filter values",
  "ariaRowGroupDropZonePanelLabel": "Row Groups",
  "ariaValuesDropZonePanelLabel": "Values",
  "ariaPivotDropZonePanelLabel": "Column Labels",
  "ariaDropZoneColumnComponentDescription": "Press DELETE to remove",
  "ariaDropZoneColumnValueItemDescription": "Press ENTER to change the aggregation type",
  "ariaDropZoneColumnGroupItemDescription": "Press ENTER to sort",
  "ariaDropZoneColumnComponentAggFuncSeperator": " of ",
  "ariaDropZoneColumnComponentSortAscending": "ascending",
  "ariaDropZoneColumnComponentSortDescending": "descending",
  "ariaLabelColumnMenu": "Column Menu",
  "ariaLabelCellEditor": "Cell Editor",
  "ariaLabelDialog": "Dialog",
  "ariaLabelSelectField": "Select Field",
  "ariaLabelTooltip": "Tooltip",
  "ariaLabelContextMenu": "Context Menu",
  "ariaLabelSubMenu": "SubMenu",
  "ariaLabelAggregationFunction": "Aggregation Function",
  "thousandSeparator": ",",
  "decimalSeparator": "."
}
```

There is one locale file for all the grid. The file covers all modules across all of BBjGridExWidget and BBjGridExWidget Enhanced. This was done on purpose as having multiple files for each module would provide to much confusion. The decision was made to keep it simple in one file.

## Using the `GxLanguageManager`

The example below shows installing a locale file using the [`GxLanguageManager`](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/GxLanguageManager.html)

```bbj
? 'HIDE'

use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
use com.basiscomponents.db.ResultSet
use com.basiscomponents.bc.SqlQueryBC

REM Define a list of supported languages
declare BBjVector languages!
languages! = new BBjVector()
languages!.insertItem(0,"")
languages!.insertItem(1,"de_DE")
languages!.insertItem(2,"nl_NL")
languages!.insertItem(3,"fr_FR")
languages!.insertItem(4,"de_SL"); rem Just a demo language file

declare auto BBjTopLevelWindow wnd!
wnd! = BBjAPI().openSysGui("X0").addWindow(10,10,900,600,"Language Demo")
wnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")
wnd!.setCallback(BBjAPI.ON_RESIZE,"resize")

declare auto BBjListButton lb_languages!
lb_languages! = wnd!.addListButton(201,5,6,160,250,"")
lb_languages!.insertItemAt(0,"System Language")
lb_languages!.insertItemAt(1,"German")
lb_languages!.insertItemAt(2,"Dutch")
lb_languages!.insertItemAt(3,"French")
lb_languages!.insertItemAt(4,"Saarlandish (Custom)")
lb_languages!.selectIndex(0)
lb_languages!.setCallback(BBjAPI.ON_LIST_SELECT,"updateLanguage")

gosub main
process_events

main:
  declare SqlQueryBC sbc!
  declare ResultSet rs!
  declare BBjGridExWidget grid!

  grid! = new BBjGridExWidget(wnd!,100,0,35,900,566)
  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))
  rs! = sbc!.retrieve("SELECT  * FROM CDINVENTORY")

  REM   add custom language to the grid component
  grid!.getLanguageManager().add("de_SL","BBjGridExWidget/Demo/assets/languages/de_SL.json")
  grid!.setData(rs!)
return

rem /**
rem  * Updating the grid component's language requires a re-render.
rem  * Note how we are calling grid!.render() here instead of grid!.setData().
rem  */
updateLanguage:
  ev! = BBjAPI().getLastEvent()
  language$ = languages!.get(ev!.getSelectedIndex())
  grid!.getLanguageManager().setLanguage(language$)
  grid!.render()
return

rem /**
rem  * Listen to the BBjTopLevelWindow resize events and
rem  * resize the grid to fill the available space.
rem  */
resize:
  ev! = BBjAPI().getLastEvent()
  w=ev!.getWidth()
  h=ev!.getHeight()
  grid!.setSize(w,h)
return

rem /**
rem  * Close the demo
rem  */
byebye:
bye
```