---
sidebar_position: 2
title: Row Data
---

Update the Row Data inside the grid by calling the grid API `BBjGridExWidget.updateData`.


## Controlling Row Position

The example below shows controlling the grid rows, including it's order.

```BBj showLineNumbers
use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
use com.basiscomponents.db.ResultSet
use com.basiscomponents.db.DataRow
use com.basiscomponents.bc.SqlQueryBC

declare auto BBjTopLevelWindow wnd!

wnd! = BBjAPI().openSysGui("X0").addWindow(10,10,450,600,"Data Update Demo")
wnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")

append! = wnd!.addButton(200,10,10,150,25,"Append")
append!.setCallback(BBjAPI.ON_BUTTON_PUSH,"handleAppend")

prepend! = wnd!.addButton(201,180,10,150,25,"Prepend")
prepend!.setCallback(BBjAPI.ON_BUTTON_PUSH,"handlePrepend")

appendCount! = 0
prependCount! = 0

gosub main
process_events

main:
  declare BBjGridExWidget grid!
  declare SqlQueryBC sbc!
  declare ResultSet rs!

  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))
  rs! = sbc!.retrieve("SELECT TOP 3 TITLE , ARTIST FROM CDINVENTORY")

  grid! = new BBjGridExWidget(wnd!,100, 0,50,450,550)
  grid!.setData(rs!)
return

handleAppend:
  declare DataRow dr!

  appendCount! = appendCount! + 1
  dr! = new DataRow()
  dr!.setFieldValue("TITLE","Appended Title" + str(appendCount!))
  dr!.setFieldValue("ARTIST","Appended Artist" + str(appendCount!))
  grid!.addRow(rs!.count(), dr!)
return

handlePrepend:
  declare DataRow dr!

  prependCount! = prependCount! + 1
  dr! = new DataRow()
  dr!.setFieldValue("TITLE","Prepend Title" + str(prependCount!))
  dr!.setFieldValue("ARTIST","Prepend Artist" + str(prependCount!))
  grid!.addRow(dr!)
return

byebye:
bye
```

![BBjGridExWidget - Row Position](./assets/row-position.gif)