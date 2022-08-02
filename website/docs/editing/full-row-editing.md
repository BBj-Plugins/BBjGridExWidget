---
sidebar_position: 6
title: Full Row Editing
---

Full row editing is for when you want all cells in the row to become editable at the same time. This gives the impression to the user that the record the row represents is being edited.

To enable full row editing, set the grid option `EditType = BBjGridExWidget.GRID_EDITTYPE_ROW()`

```bbj
grid!.getOptions().setEditType(grid!.GRID_EDITTYPE_ROW())
```