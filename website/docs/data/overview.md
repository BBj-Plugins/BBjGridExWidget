---
sidebar_position: 1
title: Overview
---

BBjGridExWidget uses a client-side data model, which means all of the data you want to show is sent to the client and loaded inside the grid in one go. The data is provided to the grid using the `BBjGridExWidget.setData` method.


## The `BBjGridExWidget::setData` method

The method `BBjGridExWidget::setData` is what gets the grid rended and it has several responsibility

1. Read the columns from the passed ResultSet and build a column definition. The column definition contains the column type, label and other extra properties like width or style. You can modify the column properties later on using the Columns API
2. Set the data in the passed ResultSet inside the grid for display
3. Wait for the `process_events` to start in order to render the grid

:::caution
* Because `BBjGridExWidget::setData` builds the column definition form the ResultSet, it overrides all the
columns components (renderers , editors and formatters) and their configuration unless they are part of the DataRow attributes. To get around this, configure the columns after calling this method.

* Calling `BBjGridExWidget.setData` is considered an expansive operation. Invoking this method will re-create the grid in the client
from scratch. To update your data and columns efficiently after creation use the grid's API.
:::