---
sidebar_position: 2
title: Columns Interface
---

Your application interacts with columns through the grid's column interface. The column interface is defined as all the public facing parts of the columns that your application interacts with. 

The column interface is the combination of the following items:

* [Column Properties](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxColumns/GxDefaultColumnDefinition.html): Columns are configured through the [GxColumn Object](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxColumns/GxColumn.html). A column object contains the columns properties. e.g. `width` , `height`.
* [Column API](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/BBjGridExWidget.html): The column API is similar to the grid API and they are accessibly directly from the BBjGridExWidget class, the difference is that the column API provides methods relevant to columns e.g.. for instance `BBjGridExWidget.ensureColumnVisible("country")`.

## Column Properties

Each column in the grid is defined using a column definition. Columns are positioned in the grid according to the order defined in the ResultSet or the order of insertion. The following example shows a simple grid with 4 columns defined:

```BBj showLineNumbers showLineNumbers
use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
use com.basiscomponents.db.ResultSet
use com.basiscomponents.bc.SqlQueryBC

declare auto BBjTopLevelWindow wnd!
wnd! = BBjAPI().openSysGui("X0").addWindow(10,10,800,600,"Columns Interface Demo")
wnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")

gosub main
process_events

main:
  declare SqlQueryBC sbc!
  declare ResultSet rs!
  declare BBjGridExWidget grid!

  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))
  rs! = sbc!.retrieve("SELECT  CDNUMBER , ARTIST, TITLE, LABEL FROM CDINVENTORY")

  grid! = new BBjGridExWidget(wnd!,100,0,0,800,600)

  grid!.addColumn("CDNUMBER","Item#")
  grid!.addColumn("ARTIST","Artist Name")
  grid!.addColumn("TITLE","Record Title")
  grid!.addColumn("LABEL","Publisher")

  grid!.setData(rs!)
return

byebye:
bye
```

:::tip
See [GxDefaultColumnDefinition](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxColumns/GxDefaultColumnDefinition.html) for a list of all properties that can be applied to a column.
:::

## Avoid Duplication Of Column Definitions

The grid provides additional ways to help simplify and avoid duplication of column definitions. This is done through the following:

* [GxDefaultColumnDefinition](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxColumns/GxDefaultColumnDefinition.html) : contains column properties all columns will inherit.
* [GxDefaultColumnGroup](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxColumns/GxDefaultColumnGroup.html) : contains column group properties all column groups will inherit.

The following code snippet shows to set the width of all columns:

```BBj showLineNumbers showLineNumbers
use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
use com.basiscomponents.db.ResultSet
use com.basiscomponents.bc.SqlQueryBC

declare auto BBjTopLevelWindow wnd!
wnd! = BBjAPI().openSysGui("X0").addWindow(10,10,800,600,"Columns Interface Demo")
wnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")

gosub main
process_events

main:
  declare SqlQueryBC sbc!
  declare ResultSet rs!
  declare BBjGridExWidget grid!

  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))
  rs! = sbc!.retrieve("SELECT  CDNUMBER, ARTIST, TITLE, LABEL, PLAYINGTIME FROM CDINVENTORY")

  grid! = new BBjGridExWidget(wnd!,100,0,0,800,600)
  grid!.setData(rs!)

  grid!.getOptions().getDefaultColumnDefinition().setWidth(150)
return

byebye:
bye
```

## Column Types

The grid respects the column type [(SQL TYPE)](https://github.com/JetBrains/jdk8u_jdk/blob/master/src/share/classes/java/sql/Types.java) defined in the DateRow. each column type will have the correct editors , filters and cell renderers.
By default you do not need to define the column type , the grid will do this automatically but uou change the 
column type by calling `GxColumn.setType(BBjNumber type!)` method on the column

```BBj showLineNumbers showLineNumbers
use ::BBjGridExWidget/GxColumns.bbj::GxColumn

declare GxColumn column!
column! = grid!.getColumn("CDNUMBER")

rem be aware that this will recreate all the column components(filters, cell editors, ...)
column!.setType(java.sql.Types.NUMERIC)
```

You can also just create a new column and add it:

```BBj showLineNumbers showLineNumbers
declare GxColumn column!
column! = new GxColumn("CDNUMBER", "My Column Title", java.sql.Types.NUMERIC)

grid!.addColumn(column!)
```

## Saving and Restoring Column State

It is possible to save and subsequently restore the column state via the Column API. Examples of state include column visibility, width, row groups and values.

* To save the state use : `BBjGridExWidget::setState(::BBjGridExWidget/GxState.bbj::GxState state!)`
* To Get the state use : `BBjGridExWidget::.getState():`

```BBj showLineNumbers showLineNumbers
use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
use ::BBjGridExWidget/GxState.bbj::GxState
use com.basiscomponents.bc.SqlQueryBC
use com.basiscomponents.db.ResultSet
use com.google.gson.JsonObject
use java.sql.Types

declare auto BBjTopLevelWindow wnd!
declare BBjGridExWidget grid!

wnd! = BBjAPI().openSysGui("X0").addWindow(10,10,800,600,"Column State Demo")
wnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")

tb_get! = wnd!.addButton(300,2,3,200,25,"Save current State")
tb_get!.setEnabled(0)
tb_get!.setCallback(BBjAPI.ON_BUTTON_PUSH,"getState")

tb_set! = wnd!.addButton(301,230,3,200,25,"Restore State")
tb_set!.setEnabled(0)
tb_set!.setCallback(BBjAPI.ON_BUTTON_PUSH,"setState")

tb_refresh! = wnd!.addButton(302,450,3,200,25,"Refresh")
tb_refresh!.setCallback(BBjAPI.ON_BUTTON_PUSH,"refresh")

grid! = new BBjGridExWidget(wnd!,100,0,30,800,570)
grid!.setCallback(grid!.ON_GRID_COLUMN_STATE_CHANGE(),"onColumnStateChange")

gosub fillGrid
process_events

fillGrid:
  declare SqlQueryBC sbc!
  declare ResultSet rs!
  declare BBjGridExWidget grid!

  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))
  rs! = sbc!.retrieve("SELECT  CDNUMBER , ARTIST, TITLE, LABEL, PLAYINGTIME FROM CDINVENTORY")

  grid!.setData(rs!)
return

getState:
  // highlight-next-line
  state! = grid!.getState()
  clipfromstr 1,state!.toString()
return

setState:
  tb_get!.setEnabled(0)
  if state!<>null() then
      // highlight-next-line
      grid!.setState(state!)
  FI
return

onColumnStateChange:
    tb_get!.setEnabled(1)
    tb_set!.setEnabled(1)
return

refresh:
    grid!.render()
return

byebye:
bye
```

## Column Changes

It is possible to add and remove columns after the grid is created. This is done by calling `BBjGridExWidget.updateColumns()`.

:::info
`BBjGridExWidget.updateColumns()` collects the new changes in columns and column groups and force the client to reflect the change.
:::

When new columns are set, the grid will compare with current columns and work out which columns are old (to be removed), new (new columns created) or kept (columns that remain will keep their state including position, filter and sort).

Comparison of column definitions is done on based on the column ID/Field.

If the column ID matches, then the grid treats the columns as the same column. For example if the grid has a column with ID `country` and the user sets new columns, one of which also has ID of `country`, then the old country column is kept in place of the new one keeping it's internal state such as width, position, sort and filter.

The following is an example showing how to update column properties and forcing the client to reflect the changes
using `updateColumn` method.

```BBj showLineNumbers
use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
use ::BBjGridExWidget/GxColumns.bbj::GxColumn
use com.basiscomponents.db.ResultSet
use com.basiscomponents.bc.SqlQueryBC

declare auto BBjTopLevelWindow wnd!
declare BBjGridExWidget grid!

wnd! = BBjAPI().openSysGui("X0").addWindow(10,10,800,600,"Column Update Demo")
wnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")

onCDNumberUpdate! = wnd!.addButton(200,10,10,150,25,"Update CDNUMBER")
onCDNumberUpdate!.setCallback(BBjAPI.ON_BUTTON_PUSH,"onCDNumberUpdate")

gosub main
process_events

main:
  declare SqlQueryBC sbc!
  declare ResultSet rs!
  declare BBjGridExWidget grid!

  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))
  rs! = sbc!.retrieve("SELECT CDNUMBER , TITLE , MUSICTYPE FROM CDINVENTORY")

  grid! = new BBjGridExWidget(wnd!,100,0,50,800,550)
  grid!.setData(rs!)
return

onCDNumberUpdate:
    declare GxColumn column!

    column! = grid!.getColumn("CDNUMBER")
    column!.setWidth(150)
    column!.setPinned(GxColumn.PINNED_LEFT())

    // highlight-next-line
    grid!.updateColumns()
return

byebye:
bye
```