---
sidebar_position: 5
title: Editing Expressions
---

Columns can be configured to enable or disable editing based on a condition executed by the editing expression.

## Configuring Editing Expressions

An editing expression is executed to determine whether the column is editable or not.  it should return `true` if the editing should be enabled or `false` if the editing should be disabled.

```bbj
column!.setValueSetterExpression("return true")
```

When working with expressions keep the following points in mind:

* If the expression has the word `return` in it, then we will assume it is a multi-line expression and will not wrap it.
* If the expression does not have the word `return` in it, then we will insert the `return` statement and the `;` for you.
* If the expression has many lines, then you will need to provide the `;` at the end of each line and also provide the `return` statement.


Expressions have access to several predefined variables:

|  Variable |  Description |
| --- | --- |
|  data |  Mapped from the DataRow |
|  ctx |  The grid [client context](../data/client-context) |

## Example

Below shows an example using value setters. The following can be noted:

* All Columns are editable by default.
* [Full row editing](./full-row-editing) is enabled.
* The `LABEL` & `ARTIST` columns configure an editing expression to disable editing when the `CDNUMBER` is `000002` or `000004`.

```bbj showLineNumbers
use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
use com.basiscomponents.db.DataRow
use com.basiscomponents.db.ResultSet
use com.basiscomponents.bc.SqlQueryBC

wnd! = BBjAPI().openSysGui("X0").addWindow(10, 10, 600, 600, "Editing Expressions")
wnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")

sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))
rs! = sbc!.retrieve("SELECT CDNUMBER, LABEL, ARTIST FROM CDINVENTORY")

grid! = new BBjGridExWidget(wnd!, 100, 0, 0, 600, 600)
options! = grid!.getOptions()
options!.setEditable(1)
options!.setEditType(grid!.GRID_EDITTYPE_ROW())
grid!.setFitToGrid()
grid!.setData(rs!)

isEditableExp! = "['000002','000004'].indexOf(data.CDNUMBER) === -1"

titleColumn! = grid!.getColumn("LABEL")
titleColumn!.setEditableExpression(isEditableExp!)

artistColumn! = grid!.getColumn("ARTIST")
artistColumn!.setEditableExpression(isEditableExp!)

process_events

byebye:
bye
```