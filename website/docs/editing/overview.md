---
sidebar_position: 1
title: Overview
---

## Enable Editing

To enable Cell Editing for a Column, set `Editable=1` on the Column.

```BBj
grid!.getColumn("CDNUMBER").setEditable(1)
```

## Cell Editors

By default the grid provides a cell editor for each column based on the Column's SQL Type

## Editing Events

Cell editing results in the following events.


| **Event**                    	| **Description**                                                                                                                                                                                                	|
|------------------------------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| `ON_GRID_CELL_VALUE_CHANGED`   	| Value has changed after editing. This event will not fire if editing was cancelled (eg ESC was pressed).                                                                                                       	|
| `ON_GRID_CELL_EDITING_STARTED` 	| Editing a cell has started.                                                                                                                                                                                    	|
| `ON_GRID_CELL_EDITING_STOPPED` 	| Editing a cell has stopped.                                                                                                                                                                                    	|
| `ON_GRID_ROW_EDITING_STARTED`  	| Editing a row has started (when row editing is enabled). When row editing, this event will be fired once and `ON_GRID_CELL_EDITING_STARTED` will be fired for each individual cell. Only fires when doing Full Row Editing 	|
| `ON_GRID_ROW_EDITING_STOPPED`  	| Editing a row has stopped (when row editing is enabled). When row editing, this event will be fired once and `ON_GRID_CELL_EDITING_STOPPED` will be fired for each individual cell. Only fires when doing Full Row Editing 	|
