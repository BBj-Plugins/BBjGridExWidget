---
sidebar_position: 3
title: Column Menu
sidebar_class_name: enhanced-feature
description: The column menu appears when you click on the menu icon in the column header
---

![BBjGridExWidget - Enhanced Version](https://img.shields.io/badge/Version-Enhanced-038279)
![BBjGridExWidget - SAM Required](https://img.shields.io/badge/BBj-SAM%20required-orange)

The column menu appears when you click on the menu icon in the column header. For BBjGridExWidget Community version, only the filter is shown. For BBjGridExWidget Enhanced, a tabbed component will be shown containing:

* A Menu Panel
* A Filter Panel
* A Column Management Panel

## Showing the Column Menu

The menu will be displayed by default and will be made up of three panels. If you want to change the order or what panels are shown, or hide them, you can specify the column option `MenuTabs`

The property `MenuTabs` is an array of strings. The valid values are:

* `GxColumn.MENU_TAB_GENERAL()`: Include in the menuTabs array to show the main panel.
* `GxColumn.MENU_TAB_FILTER()`: Include in the menuTabs array to show the filter panel.
* `GxColumn.MENU_TAB_COLUMNS()`: Include in the menuTabs array to show the column selection panel.

To not show the menu at all set the column option `SuppressMenu=true`.

The order of the menu tabs shown in the menu will match the order you specify in this array.

If you don't specify a `MenuTabs` for a column the default is: ['MENU_TAB_GENERAL', 'MENU_TAB_FILTER','MENU_TAB_COLUMNS']


```BBj
use ::BBjGridExWidget/GxColumns.bbj::GxColumn

declare GxColumn column!
column! = grid!.getColumn("CDNUMBER")

column!.getMenuTabs().add(GxColumn.MENU_TAB_FILTER())
column!.getMenuTabs().add(GxColumn.MENU_TAB_GENERAL())
```