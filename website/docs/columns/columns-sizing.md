---
sidebar_position: 3
title: Columns Sizing
---

All columns can be resized by dragging the top right portion of the column.

## Enable Sizing

Turn column resizing on/off for the grid by setting `resizable=true` for each column. To set resizing for each column, set `resizable=true` on [the default column definition.](../api/columns-interface#avoid-duplication-of-column-definitions)

:::info
By default the grid enable columns resizing for all columns
:::

## Size Columns to Fit

Call `BBjGridExWidget.sizeColumnsToFit()` to make the currently visible columns fit the screen. The columns will scale (growing or shrinking) to fit the available width.

If you don't want a particular column to be included in the auto resize, then set the column option `SuppressSizeToFit=true`. This is helpful if, for example, you want the first column to remain fixed with, but all other columns to fill the width of the table.

## Auto-Size Columns

Just like Excel, each column can be 'auto resized' by double clicking the right side of the header rather than dragging it. When you do this, the grid will work out the best width to fit the contents of the cells in the column.

:::info
The grid works out the best width by considering the virtually rendered rows only. For example, if your grid has 10,000 rows, but only 50 rendered due to virtualisation of rows, then only these 50 will be considered for working out the width to display. The rendered rows are all the rows you can see on the screen through the horizontal scroll plus a small buffer (default buffer size is 20).
:::

### Auto-Size Columns Programmatically

`BBjGridExWidget.autoSizeColumns` looks at the rendered cells on the screen, and works out the width based on what it sees. It cannot see the columns that are not rendered due to column virtualisation. Thus it is not possible to autosize a column that is not visible on the screen.

:::tip
**Column Virtualisation** is the technique the grid uses to render large amounts of columns with degrading performance by only rendering columns that are visible due to the horizontal scroll positions. Eg the grid can have 1000 columns with only 10 rendered if the horizontal scroll is only showing 10 columns.
:::

To get around this, you can turn off column virtualisation by setting grid option `SuppressColumnVirtualisation=true`. So choice is yours - what do you want - column virtualisation working OR auto-size working on off screen columns.

It's important to point out that `BBjGridExWidget.autoSizeColumns(BBjNumber skipHeaders!)` can receive true as parameter to indicate that the header content should not be considered when calculating the width of the column. You can also set this behavior to be the default by setting the grid option `SkipHeaderOnAutoSize: true`.

### Auto-Size a subset of columns

`BBjGridExWidget.autoSizeColumns` has other [signatures](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/BBjGridExWidget.html#autoSizeColumns) which allows the developer to autosize only a subset of columns:

* `void autoSizeColumns(HashSet columns!, BBjNumber skipHeader!)`
* `void autoSizeColumns(HashSet columns!)`
* `void autoSizeColumns(BBjString columns!, BBjNumber skipHeader!)`
* `void autoSizeColumns(BBjString columns!)`

```bbj showLineNumbers
use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
use com.basiscomponents.db.ResultSet
use com.basiscomponents.bc.SqlQueryBC

declare auto BBjTopLevelWindow wnd!
declare BBjGridExWidget grid!
declare SqlQueryBC sbc!
declare ResultSet rs!

wnd! = BBjAPI().openSysGui("X0").addWindow(10,10,820,600,"Columns Sizing Demo")
wnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")
wnd!.setCallback(BBjAPI.ON_RESIZE,"resize")

sizeToFit! = wnd!.addButton(200,10,10,150,25,"Size To Fit")
sizeToFit!.setCallback(BBjAPI.ON_BUTTON_PUSH,"sizeToFit")

autoSizeAll! = wnd!.addButton(201,160,10,150,25,"Auto-size All")
autoSizeAll!.setCallback(BBjAPI.ON_BUTTON_PUSH,"autoSizeAll")

autoSizeTitle! = wnd!.addButton(202,310,10,200,25,"Auto-size (TITLE)")
autoSizeTitle!.setCallback(BBjAPI.ON_BUTTON_PUSH,"autoSizeTitle")

gosub main
process_events

main:
  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))
  rs! = sbc!.retrieve("SELECT * FROM CDINVENTORY")

  grid! = new BBjGridExWidget(wnd!,100, 0,50,820,550)
  grid!.setData(rs!)
return

rem Make the currently visible columns fit the screen width
sizeToFit:
  grid!.setFitToGrid()
return

rem looks at the rendered cells on the screen, and works out
rem the width based on what it sees.
autoSizeAll:
    grid!.autoSizeColumns()
return

rem looks at the rendered TITLE column on the screen, and works out
rem the width of the column based on its content
autoSizeTitle:
    rem it is not necessary to call setFitToGrid() , we call it here for the demo purpose only
    grid!.setFitToGrid()
    grid!.autoSizeColumns("TITLE")
return

rem Listen to the BBjTopLevelWindow resize events and
rem resize the grid to fill the available space.
resize:
  ev! = BBjAPI().getLastEvent()
  w=ev!.getWidth()
  h=ev!.getHeight()
  grid!.setSize(w,h)
return

byebye:
bye
```