---
sidebar_position: 1
title: Grid Interface
---


Your Programme interacts with the grid through the BBjGridExWidget's interface. The interface is the combination of the following items:

* [Options](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxOptions/GxOptions.html): Properties used to configure the grid.
* [API](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/BBjGridExWidget.html): Methods to interact with the grid after it's created e.g. `BBjGridExWidget::getSelectedRow()`.
* Events: events published by the grid to inform applications of changes in state, e.g. `ON_GRID_SELECT_ROW`

## Options

The [GxOptions](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxOptions/GxOptions.html) is a one stop shop for the entire interface into the grid. Using the options interface you can alter 
the grid behavior or enable/disable features.
The example below shows how you can alter the navigation behavior and selection mode from the options interface.

```bbj showLineNumbers
declare BBjGridExWidget grid!
declare BBjGridExWidgetOptions options!

grid! = new BBjGridExWidget(wnd!,100,0,0,800,600)
options! = grid!.getOptions()

rem Defines how users can move between rows using arrow keys
options!setNavigationBehavior(grid!.GRID_NAVIGATION_BEHAVIOUR_NEXT_ROW())

rem When true, A selection box will be shown on the first 
rem column When false, no checkbox will be displayed·
options!.setShowSelectionCheckbox(1)
```

## Access the Grid & Column API

You can access both the grid and the colum api from the BBjGridExWidget class directly. With the API you can manipulate the grid programmatically. For instance the following example shows how to use the grid API to do a quick search in the grid data then select all the filtered rows

:::info
The Grid API methods will only work after the grid is ready. The grid will keep enqueuing all grid API calls until the grid is ready then flush them at once. 
:::

```bbj showLineNumbers
use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
use com.basiscomponents.db.ResultSet
use com.basiscomponents.bc.SqlQueryBC

declare auto BBjTopLevelWindow wnd!
wnd! = BBjAPI().openSysGui("X0").addWindow(10,10,800,600,"Grid Interface Demo")
wnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")

gosub main
process_events

rem Retrieve the data from the database and configure the grid
main:
  declare SqlQueryBC sbc!
  declare ResultSet rs!
  declare BBjGridExWidget grid!

  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))
  rs! = sbc!.retrieve("SELECT  * FROM CDINVENTORY")

  grid! = new BBjGridExWidget(wnd!,100,0,0,800,600)
  grid!.setData(rs!)

  term! = "blues"
  grid!.setQuickFilter(term!)
  grid!.selectAll(1)
return

byebye:
bye
```

## Events

The BBjGridExWidgets fires several events to notify the program about changes. You can listen to grid events using [setCallback](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/BBjGridExWidget.html#setCallback) method. The following example shows how to listen to selection changes on the grid.


```bbj showLineNumbers
use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
use com.basiscomponents.db.ResultSet
use com.basiscomponents.bc.SqlQueryBC

declare auto BBjTopLevelWindow wnd!

wnd! = BBjAPI().openSysGui("X0").addWindow(10,10,800,600,"Grid Interface Demo")
wnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")

gosub main
process_events

main:
  declare SqlQueryBC sbc!
  declare ResultSet rs!
  declare BBjGridExWidget grid!

  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))
  rs! = sbc!.retrieve("SELECT  * FROM CDINVENTORY")
  REM init the grid
  grid! = new BBjGridExWidget(wnd!,100,0,0,800,600)
  rem register the callback
  grid!.setCallback(grid!.ON_GRID_SELECT_ROW(),"onSelectionEvent")
  grid!.setData(rs!)
return

rem selection handler
onSelectionEvent:
  row! = grid!.getSelectedRow()
  msg! = msgbox(str(row!.asDataRow().getFieldAsString("TITLE")))
return

byebye:
bye
```
