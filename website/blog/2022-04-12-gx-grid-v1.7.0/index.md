---
slug: gx-grid-v1.7.0
title: BBjGridExWidget v1.7.0
authors: [hyyan]
tags: [release, changelog]
---

BBjGridExWidget v1.7.0 has been released. The following is the changelog list:

## Bug Fixes

* **Demo:** RowGrouping demo is broken in ag-grid 27 ([d8c8988](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d8c89883047613196a3b7f10a238cc87ef131a73))
* GxOptions should not set locale text if text is empty ([2c62a3b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2c62a3b82b14fc9128b75bca61cd5cbcb384f416))
* keyboard navigation is broken in ag-grid v27 ([8d54900](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8d549009a8ded3447b4aa91fd99385a9137ea137))
* replace `GxOptions.RowDeselection` with `GxOptions.SuppressRowDeselection` ([75d243a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/75d243ab078f04b7664c802dae4ebcb71474cdf8))
* Tooltips fails to render in ag-grid 27 ([6704657](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6704657560ba730da4f2b6c1475e18791125abe1))


## Code Refactoring

* `GxOptions.EnableFloatingFilter` won't have an effect anymore. it is deprecated([68caf8f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/68caf8facebacdbe735ebebc85af41b60e31b00c))
* `GxOptions.setImmutableColumns` is deprecated ([96b9d07](https://github.com/BBj-Plugins/BBjGridExWidget/commit/96b9d070280bb9c4b5155d41faf8b7823f155b3d))
* `GxState.getString` does not contain the sort array anymore ([7c35c1d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7c35c1d33352304ef25a7a570ae93d145ecfe1da))
* deprecate `GxOptions.GroupSuppressRow`. ([7960b54](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7960b541675f07bab2f4f9c6435d928ec3ea2e8b))
* deprecate `PinnedRowCellRendere` ([e43a43a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e43a43ad4d076c040f3a734d3deb901b69460c4c))


## Features

* add `GxOptions.ColumnHoverHighlight` ([40c49a5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/40c49a527572f5fe5700dd65bea054c760b66fab))
* add `GxOptions.GroupDisplayType` ([d3f65ca](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d3f65cac7213cac085d1e65ce8b3290292ed44b2))
* update LicenseManager to v27 ([4090e06](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4090e060ef9018f2d761ea41bf83307fdbdc7647))


## refactore

* `GxFilterSetFilter.NewRowsAction` &
`GxFilterSetFilter.SuppressRemoveEntries` have no affect at all. They
are deprecated. ([21700b5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/21700b500313e895df505c913c814a1ac4cfdcc1))
* `GxFilterSetFilter.suppressSyncValuesAfterDataChange` is deprecated ([9b3eae9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9b3eae92dbd3007b69f19379bb2d0a5b90418b2a))


## BREAKING CHANGES

* `GxFilterSetFilter.NewRowsAction` &
`GxFilterSetFilter.SuppressRemoveEntries` have no affect at all. They
are deprecated with no replacemnets
* `GxFilterSetFilter.suppressSyncValuesAfterDataChange`
has been been deprecated. This option has no replacement
* `GxOptions.EnableFloatingFilter` won't have effect
anymore. it is deprecated. You can enable/disable the floating filter per
column.
* Setting the `PinnedRowCellRendere` won't affect the rendering anymore. Use the `CellRenderer` instead
* `GxOptions.GroupMultiAutoColumn`,
`GxOptions.GroupUseEntireRow` , `GxOptions.GroupSuppressAutoColumn` are
deprecated. Use `GxOptions.GroupDisplyType` instead
* deprecate `GxOptions.GroupSuppressRow`. There is no
replacement for this functionality.
* rowDeselection no longer has any affect as the grid now
allows row deselection by default. To block row deselection set
suppressRowDeselection to true.
* `GxState.getString` does not contain the sort array
anymore. The sort state is contained in the columns array now.
* Grid Option 'immutableColumns' is now gone. Columns
are immutable by default.
