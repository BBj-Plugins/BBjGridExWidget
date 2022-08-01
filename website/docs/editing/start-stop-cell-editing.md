---
sidebar_position: 2
title: Start / Stop Cell Editing
---

This page discusses the different ways in which Cell Editing can be started and stopped.

## Start Editing

Assuming `Editable=1` is set on the Column, editing will start upon any of the following:

* **Edit Key Pressed**: One of the following is pressed: <kbd>Enter</kbd>, <kbd>F2</kbd>, <kbd>Backspace</kbd>, <kbd>Delete</kbd>. If this happens then params.key will contain the key code of the key that started the edit. The default editor will clear the contents of the cell if Backspace or Delete are pressed.
* **Printable Key Pressed**: Any of the following characters are pressed: `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"£$%^&amp;*()_+-=[];\'#,./\|<>?:@~{}`.
* **Mouse Double Click**: If the mouse is double-clicked. There is a grid option `SingleClickEdit` that will allow single-click to start editing instead of double-click. Another option `SuppressClickEdit` will prevent both single-click and double-click from starting the edit; use this if you only want to have your own way of starting editing, such as clicking a button in your custom cell renderer.
* **`BBGridExWidget::setStartCellEditing`**: If you call [`setStartCellEditing`](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/BBjGridExWidget.html#setStartCellEditing) on the grid API

## Stop Editing

The grid will stop editing when any of the following happen:

* **Other Cell Focus**: If focus in the grid goes to another cell, the editing will stop.
* **Enter Key Down**: If the grid receives an <kbd>Enter</kbd> key press event on the cell.
* **Escape Key Down**: Similar to <kbd>Enter</kbd>, if <kbd>Esc</kbd> key is pressed, editing will stop. Unlike <kbd>Enter</kbd>, the <kbd>Esc</kbd> action will discard changes rather than taking the new value.
* **Tab Key Down**: Editing will stop, accepting changes, and editing will move to the next cell, or the previous cell if <kbd>Shift</kbd> is also pressed.
* **Popup Editor Closed**: If using popup editor, the popup is configured to close if you click outside the editor. Closing the popup triggers the grid to stop editing.
* **`BBjGridExWidget::stopEditing`**: If you call [`stopEditing`](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/BBjGridExWidget.html#stopEditing) on the grid API.

## Tab Navigation

While editing, if you hit <kbd>Tab</kbd>, the editing will stop for the current cell and start on the next cell. If you hold down <kbd>Shift+Tab</kbd>, the same will happen except the previous cell will start editing rather than the next. This is in line with editing data in Excel.

The next and previous cells can also be navigated using the API [`BBjGridExWidget::tabToNextCell`](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/BBjGridExWidget.html#tabToNextCell) and [`BBjGridExWidget::tabToPreviousCell`](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/BBjGridExWidget.html#tabToPreviousCell). 


## Editing API

The grid has the following API methods for editing:

| **Event**                                                                                                                               	| **Description**                                                                                                        	|
|-----------------------------------------------------------------------------------------------------------------------------------------	|------------------------------------------------------------------------------------------------------------------------	|
| [`BBjGridExWidget::setStartCellEditing`](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/BBjGridExWidget.html#setStartCellEditing) 	| Start editing the provided cell. If another cell is editing, the editing will be stopped in that other cell.           	|
| [`BBjGridExWidget::stopEditing`](https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/BBjGridExWidget.html#stopEditing)                 	| If a cell is editing, it stops the editing. Pass `true` if you want to cancel the editing (i.e. don't accept changes). 	|


The example below illustrates different parts of the editing API

