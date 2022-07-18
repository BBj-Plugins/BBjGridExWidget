---
sidebar_position: 3
title: Getting Started
---

## Install the Plug-in

Before you can use the BBjGridExWidget, you must install it on the BBj server where you intend to run programs that use it. Use the Plugin Manager that comes with BBj to install it.

:::tip
The [Plug-in Manager](https://documentation.basis.cloud/BASISHelp/WebHelp/bbutil/BBj_Plugin_Manager.htm) helps you install, manage, and uninstall BBj Plugins, including the BBjGridExWidget. It provides an interface for you to view and install the released versions of the BBjGridExWidget, as well as a convenient method for detecting and applying updates when they become available. 
:::

## Reference the BBjGridExWidget

Because the default `PREFIX` for BBj includes the `<bbj_home>/plugins/` directory, you can use the BBjGridExWidget plugin once you add a `USE` statement like this to your program:

```BBj showLineNumbers
use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
```

## My First Grid 

Of course, for the BBjGridExWidget to be useful, you will probably need it to communicate with a database, which requires some additional classes. The gx-grid uses the [ResultSet](https://basishub.github.io/components/javadoc/com/basiscomponents/db/ResultSet.html) as data model which is a collection of [DataRows](https://basishub.github.io/components/javadoc/com/basiscomponents/db/DataRow.html).

You can create a grid by building a ResultSet and feeding it directly to the grid.

```BBj showLineNumbers
use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
use com.basiscomponents.db.ResultSet
use com.basiscomponents.bc.SqlQueryBC

declare auto BBjTopLevelWindow wnd!
wnd! = BBjAPI().openSysGui("X0").addWindow(10, 10, 800, 600, "My First Grid")
wnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")

gosub main
process_events

rem Retrive the data from the database and configure the grid
main:
  declare SqlQueryBC sbc!
  declare ResultSet rs!
  declare BBjGridExWidget grid!

  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))
  rs! = sbc!.retrieve("SELECT * FROM CDINVENTORY")

  grid! = new BBjGridExWidget(wnd!, 100, 0, 0, 800, 600)
  grid!.setData(rs!)
return

byebye:
bye
```

First we import the grid in our program then we create a window and attach the grid control to it.
The grid constructor accepts the following parameters:

* BBjWindow instance 
* The control's Id 
* The position parameters as any other BBj control (`x`, `y`, `width`, `height`). 

:::tip
The BBjGridExWidget constructor has several other signatures to build the grid. To learn more about the available signatures 
checkout the [Javadocs](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/). 
:::

After we initialize the grid, we query the `CD-Store` demo database installed with BBj, and displays the results of that query in the grid.

:::info
The method `BBjGridExWidget::setData` is what gets the grid rended. read more about [data & data updating](../data/overview)
:::