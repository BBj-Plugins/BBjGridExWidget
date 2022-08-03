---
sidebar_position: 5
title: Row Height
---

By default, the grid will display rows at `25px`. You can change this for each row individually to give each row a different height.

## RowHeight Option

To change the row height for the whole grid, set the option `RowHeight` to a positive number. For example, to set the height to `50px`, do the following:

```bbj
grid!.getOptions().setRowHeight(50);
```

## Auto Row Height

It is possible to set the row height based on the contents of the cells. To do this, set `AutoHeight=true` on each column where height should be calculated from. For example, if one column is showing description text over multiple lines, then you may choose to select only that column to determine the line height.

If multiple columns are marked with `AutoHeight=true` then the the height of the largest column is used.

The height is calculated once when the data is first given to the grid. If the data changes, or the width of a column changes, then you may require the grid to calculate the height again by calling `BBjGridExWidget.resetRowHeights()`.

## Lazy Height Calculation

Auto height works by the grid listening for height changes for all Cells configured for Auto Height. As such it is only looking at rows that are currently rendered into the DOM. As the grid scrolls vertically and more rows are displayed, the height of those rows will be calculated on the fly.

This means the row heights and row positions are changing as the grid is scrolling vertically. This leads to the following behaviors:

* The vertical scroll range (how much you can scroll over) will change dynamically to fit the rows. If scrolling by dragging the scroll thumb with the mouse, the scroll thumb will not follow the mouse. It will either lag behind or jump ahead, depending on whether the row height calculations are increasing or decreasing the vertical scroll range.

* If scrolling up and showing rows for the first time (e.g. the user jumps to the bottom scroll position and then starts slowly scrolling up), then the row positions will jump as the rows coming into view at the top will get resized and the new height will impact the position of all rows beneath it. For example if the row gets resized to be 10 pixels taller, rows below it will get pushed down by 10 rows. If scrolling down this isn't observed as rows below are not in view.

The above are results of Lazy Height Calculation. It is not possible to avoid these effects.

## Auto Height and Column Virtualisation

Columns with Auto Height will always be rendered. The grid needs to have all Auto Height Columns rendered in order to correctly set the height of the row.

## Auto Height Performance Consideration

Because auto-height adds size listeners to cells and stops Column Virtualisation, consideration should be given for when and how to use it. Only apply auto-height to columns where it makes sense. For example, if you have many columns that do not require a variable height, then do not set them to auto-height.

## Changing Row Height

Setting the row height is done once for each row. Once set, the grid will not ask you for the row height again. You can change the row height after it is initially set using a combination of `BBjGridExWidget.resetRowHeights()` and `BBjGridExWidget.setRowHeight(BBjString key!, BBjNumber height!)`

```bbj
...

declare BBjGridExWidget grid!

grid! = new BBjGridExWidget(wnd!,100,0,0,800,600)
// highlight-next-line
grid!.setRowHeight(50)
grid!.setData(rs!)

...
```