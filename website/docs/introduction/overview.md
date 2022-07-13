---
sidebar_position: 1
title: Overview
---

The BBjGridExWidget is a BBj Plug-in that was first included with BBj `18.21`. It is a feature-rich grid component for BBj based on HTML and JavaScript. Because it is HTML/Javascript based, it works and loads quickly in BUI programs. But it is not limited to BUI — it can also be used in GUI by combining it with the [BBjHtmlView](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjhtmlview/bbjhtmlview.htm?Highlight=BBjHtmlView) control, leveraging the Chromium engine. 

The BBjGridExWidget is optimized to display large data sets based on the [basiscomponents](http://basishub.github.io/components/javadoc/com/basiscomponents/db/ResultSet.html). Just build a ResultSet and fill the grid.

Dashboards usually do not show large amounts of data, but the BBjGridExWidget brings other features that are also useful in a Dashboard. Starting as a preview in BBj `19.10`, BASIS made the BBjGridExWidget available in the [Dashboard](https://documentation.basis.cloud/BASISHelp/WebHelp/bbutil/Dashboard/Dashboard.htm) with the [GridExWidget](https://documentation.basis.cloud/BASISHelp/WebHelp/utils/Dashboard/GridExWidget.html) class.

![BBjGridExWidget overview](https://user-images.githubusercontent.com/4313420/82667299-da6e0880-9c37-11ea-8c0e-1339a8d8b2d6.png#light-mode-only)
![BBjGridExWidget overview](https://user-images.githubusercontent.com/4313420/82667633-8879b280-9c38-11ea-9217-2cbe35bff94d.png#dark-mode-only)

:::caution
The BBjGridExWidget depends on [process_events](https://documentation.basis.cloud/BASISHelp/WebHelp/commands/process_events_verb.htm?Highlight=process_events) and will not work within programs that use [READ RECORD](https://documentation.basis.cloud/BASISHelp/WebHelp/commands/read_verb.htm) loops to handle events. As it internally relies on certain events being fired, programs also must be free from calls to [BBjSysGui::flushEvents](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjsysgui/bbjsysgui_flushevents.htm?Highlight=flushEvents), especially in the phase between instantiating the BBjGridExWidget class and the first time the program execution reaches process_events.
:::


## Features and Functionality

The basic features listed below are available with the BBjGridExWidget (although current Software Asset Management (SAM) is necessary to use it in a BBjHtmlView control). These basic features include:

- Column setup and formatting
- Change column order with Drag & Drop 
- Freeze Columns to the left or right side
- Filtering / Searching by column or globally
- Conditional styling
- Column Groups
- Save and restore layout
- Themes
- Icons and Images
- Custom cell renderers
- User interface translations, customizable
- Multi-Selection, Single Selection, Checkbox Selection
- Cell Editing

## Enhanced Features

Additional features are available with the enhanced version, which requires an incremental surcharge to SAM. Contact your BASIS Sales Representative for details. The enhanced version is available for all users or just for a subset. The enhanced functionality is enabled for a particular license serial number.

Here are some of the additional features:

* Slider menu
  * Toggle column visibility
  * Create row groups (hierarchy view)
  * Define aggregation
  * Define pivot tables
* Tree Data
* Status Bar showing row counts, selection, etc.
* Custom Context Menus
* Ad-hoc Charting
* Data Export