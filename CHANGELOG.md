# [1.8.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.7.1...1.8.0) (2022-07-18)


### Bug Fixes

* dont show `CHART_RANGE` context menu item by default ([5806120](https://github.com/BBj-Plugins/BBjGridExWidget/commit/580612027949004c0eaa215d7fc20536dda33574))
* fix typo - `GxFiltersToolpanel::suppressExpandAl` should be `GxFiltersToolpanel::suppressExpandAll` ([50e5c79](https://github.com/BBj-Plugins/BBjGridExWidget/commit/50e5c794ba4eb1ab4ed10edbb09ee1104a8164be))
* focus should focus the container if it is empty. ([0817b4b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0817b4b7a1c333185b3adee38e3a4282128778e4))
* remove GxContextMenuItem::EXCEL_XML_EXPORT ([3de3308](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3de33082d39e1cb9475282bcd33b092388b9af59))
* **js:** transiation add array should be reversed to be in sync with ResultSet ([64f30d8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/64f30d88e98a7bcd9c1690bf5c1dd9bee6dc05f2))


### Features

* add GxColumn `SuppressFiltersToolPanel` option ([0cf67b9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0cf67b93c0e8abd04f70e5cd5765c79648031fba))
* add GxColumnsToolpanel `SuppressSyncLayoutWithGrid` & `SuppressColumnMove` and `ContractColumnSelection` options ([9ac3d2b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9ac3d2b51089592112c8d7bd5b331f990faf89f4))
* add GxContextMenuItem `COPY_WITH_GROUP_HEADERS` ([8b639dd](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8b639dd157dcdbc1d8ece3abcefb1f9d9df03e45))
* add GxFiltersToolpanel `SuppressExpandAll` option ([8d6bf43](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8d6bf43449a52c9d41e9c46c5f678a50117215ab))
* add GxFiltersToolpanel `SuppressFilterSearch` & `SuppressSyncLayoutWithGrid` ([196341d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/196341db88cdc0d9ee7a2940f41bc7aeface62ca))
* show context menu `COPY_WITH_GROUP_HEADERS` by default ([c369079](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c369079704fe6e1e30fd696375b4cc717314a733))


### BREAKING CHANGES

* EXCEL_XML_EXPORT has been removed



## [1.7.1](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.7.0...1.7.1) (2022-07-13)


### Bug Fixes

* :bug: `GxClientTransactionModel` should use LinkedHashSet to maintain order ([50e557e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/50e557ed13ae7267f4d1147ef4d76e22a8385d65))
* **js:** :bug: `gw_setSortModel` does not merge previous state correctly ([fc68973](https://github.com/BBj-Plugins/BBjGridExWidget/commit/fc68973f651e10cf20cce1b2d343d7ff72ccb9d9))
* **js:** :bug: `gw_setSortModel` should not apply the order be default ([489b72d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/489b72dc8f37fbe10be2a6e3292cf5fbe4679d34))



# [1.7.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.6.3...1.7.0) (2022-04-12)


### Bug Fixes

* **Demo:** RowGrouping demo is broken in ag-grid 27 ([d8c8988](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d8c89883047613196a3b7f10a238cc87ef131a73))
* GxOptions should not set locale text if text is empty ([2c62a3b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2c62a3b82b14fc9128b75bca61cd5cbcb384f416))
* keyboard navigation is broken in ag-grid v27 ([8d54900](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8d549009a8ded3447b4aa91fd99385a9137ea137))
* replace `GxOptions.RowDeselection` with `GxOptions.SuppressRowDeselection` ([75d243a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/75d243ab078f04b7664c802dae4ebcb71474cdf8))
* Tooltips fails to render in ag-grid 27 ([6704657](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6704657560ba730da4f2b6c1475e18791125abe1))


### Code Refactoring

* `GxOptions.EnableFloatingFilter` won't have an effect anymore. it is deprecated([68caf8f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/68caf8facebacdbe735ebebc85af41b60e31b00c))
* `GxOptions.setImmutableColumns` is deprecated ([96b9d07](https://github.com/BBj-Plugins/BBjGridExWidget/commit/96b9d070280bb9c4b5155d41faf8b7823f155b3d))
* `GxState.getString` does not contain the sort array anymore ([7c35c1d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7c35c1d33352304ef25a7a570ae93d145ecfe1da))
* deprecate `GxOptions.GroupSuppressRow`. ([7960b54](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7960b541675f07bab2f4f9c6435d928ec3ea2e8b))
* deprecate `PinnedRowCellRendere` ([e43a43a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e43a43ad4d076c040f3a734d3deb901b69460c4c))


### Features

* add `GxOptions.ColumnHoverHighlight` ([40c49a5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/40c49a527572f5fe5700dd65bea054c760b66fab))
* add `GxOptions.GroupDisplayType` ([d3f65ca](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d3f65cac7213cac085d1e65ce8b3290292ed44b2))
* update LicenseManager to v27 ([4090e06](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4090e060ef9018f2d761ea41bf83307fdbdc7647))


### refactore

* `GxFilterSetFilter.NewRowsAction` &
`GxFilterSetFilter.SuppressRemoveEntries` have no affect at all. They
are deprecated. ([21700b5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/21700b500313e895df505c913c814a1ac4cfdcc1))
* `GxFilterSetFilter.suppressSyncValuesAfterDataChange` is deprecated ([9b3eae9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9b3eae92dbd3007b69f19379bb2d0a5b90418b2a))


### BREAKING CHANGES

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



## [1.6.3](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.6.2...1.6.3) (2022-04-06)



## [1.6.2](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.6.1...1.6.2) (2022-04-06)



## [1.6.1](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.6.0...1.6.1) (2022-03-29)


### Bug Fixes

* :bug: selection checkbox is removed when the column is hidden ([c8dbec6](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c8dbec650773915c85ea9bcaf2f74da99565255b))



# [1.6.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.5.5...1.6.0) (2022-03-24)


### Bug Fixes

* BBjGridExWidget's height collapse to zero when the parent window
has flow layout flag ([588597e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/588597e865258e2796823d768b5df400f4cc1d25))


### Features

* support DWC themes' variables in DWC ([80ed1ce](https://github.com/BBj-Plugins/BBjGridExWidget/commit/80ed1ce5673a7425135ff65cba6608efd8542c98))



## [1.5.5](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.5.4...1.5.5) (2022-03-09)


### Bug Fixes

* bool renderer is not aligned correctly when column's alignment is changed ([f158127](https://github.com/BBj-Plugins/BBjGridExWidget/commit/f15812794da702d59b1a0fff90710b2a7671471d))



## [1.5.4](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.5.3...1.5.4) (2022-02-23)


### Bug Fixes

* fix translation typo ([aa6dc70](https://github.com/BBj-Plugins/BBjGridExWidget/commit/aa6dc70781abac8486bae1162cc0358f0684a64f))



## [1.5.3](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.5.2...1.5.3) (2022-01-20)


### Bug Fixes

* :bug: fix [#230](https://github.com/BBj-Plugins/BBjGridExWidget/issues/230) Grid sporadically not rendering in GUI ([6274c9f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6274c9f450009e44bda80d57a3fa99932a4685da))



## [1.5.2](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.5.1...1.5.2) (2021-12-15)


### Bug Fixes

* :bug: `GxColumn:update` should do case-insentive search in the ([5ba0214](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5ba021469822a3e1fda86e03e3cfd1c40a71f4f1))
* :bug: GxExpressionNumbersFormatter removes zeros ([e6ffb6a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e6ffb6a11db4df4ff1b6af372909c835675a821c))
* :bug: numeric columns should have a default valueGetter ([997c623](https://github.com/BBj-Plugins/BBjGridExWidget/commit/997c623f3bdb44a3c1f7174fd912480a36345951))



## [1.5.1](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.5.0...1.5.1) (2021-12-13)


### Bug Fixes

* :bug:  (No match for method ::BBjGridExWidget/GxColumns.bbj::GxColumn.`<init>`(BBjString, BBjNumber)) ([d453448](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d453448c6e825db4292a348046f7cbf8815c3a10))



# [1.5.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.4.1...1.5.0) (2021-09-13)


### Features

* :sparkles: allow Multi sorting by CTRL ([ea61303](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ea61303cb3e956967354e3f0583783495eca222b))



## [1.4.1](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.4.0...1.4.1) (2021-08-06)


### Bug Fixes

* :bug: BBj 21.10 requires BBjWidget v1.2 ([8781311](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8781311e5f677f23693daa140c29c9e31c7d2d32))



# [1.4.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.3.0...1.4.0) (2021-07-21)


### Bug Fixes

* :bug: fix `addAlignedGrid `cannot read push of undefined ([5462712](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5462712d9939ded6cd4a8bffa14c84083de92790))


### Features

* :sparkles: Add support for aligned grids. ([a82b48f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a82b48f94f9741e2b10648b897e9f88658747ed3))



# [1.3.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.2.0...1.3.0) (2021-06-10)


### Bug Fixes

* (DWC) make canvas size the same as surrounding div container ([1f1946e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1f1946edd447cf1db48a16666a4f15a378ddc463))
* allow DWC to run inside BUI and DWC ([8a48ac5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8a48ac52e2019174e3aa1bd505b4eb849b02b44b))


### Features

* add columns option `HeaderCheckboxSelectionFilteredOnly` ([20b3160](https://github.com/BBj-Plugins/BBjGridExWidget/commit/20b31601bd60900b717b0a3054c2c9acf6d41d3c))



# [1.2.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.1.3...1.2.0) (2021-03-08)


### Bug Fixes

* **docs:** :books: update required BBj version ([2665662](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2665662adb983533917f716d631c49a3e912753f))


### Features

* :sparkles: allow to configure columns menu tabs ([1aec687](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1aec687e45cc123964d2e9d91255b79148bd9511))



## [1.1.3](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.1.2...1.1.3) (2021-02-22)


### Bug Fixes

* force event listeners remove when setData is called more than once ([abd7005](https://github.com/BBj-Plugins/BBjGridExWidget/commit/abd70054b1ee3599bbc1315f3e00e9ea2ae78869))



## [1.1.2](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.1.1...1.1.2) (2021-02-10)


### Bug Fixes

* :bug: check for basisDispatchCustomEvent in html container ([ac1b879](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ac1b8797e0e3e780dc23b91db00c4c5bb5d77200))



## [1.1.1](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.1.0...1.1.1) (2021-02-10)


### Bug Fixes

* :bug: BBjGridExWidget::clearData does not check for the grid's ready state ([a899f0e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a899f0ec76f1c5aa02f9bc2e66ff26cbb8dca902))
* events dispatching should go throw the htmlview container ([bc4ef78](https://github.com/BBj-Plugins/BBjGridExWidget/commit/bc4ef786c79739f93763403c42ae4275ac5e0dbc))



# [1.1.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.0.4...1.1.0) (2020-11-24)


### Bug Fixes

* :bug: headers and cells are not aligned correctly ([f8db034](https://github.com/BBj-Plugins/BBjGridExWidget/commit/f8db034f8c97bd93e171503274f0e58579c48bc5))
* :bug: overlay api should not be debounced in BUI ([b1fdb59](https://github.com/BBj-Plugins/BBjGridExWidget/commit/b1fdb593f6b890de50e4c3ad03adae8cdf61e0f7))
* avoid focus in INFO(3,6)="6" client ([139b01f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/139b01f9ff54c1dc5a1ffb234360e0f479831159))
* column headers are centered wronglly ([a233e22](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a233e22c002094c768db42f1401fd91bb92388c7))


### Features

* :sparkles: add BBjGridExWidget.ON_GRID_FILTER_CHANGED ([58b1140](https://github.com/BBj-Plugins/BBjGridExWidget/commit/58b11403475d0cea3e13ba92ab76d26ef431f706))
* :sparkles: add BBjGridExWidget.ON_GRID_READY event ([1eb7d30](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1eb7d3004a25555daa550e44ee81abbea1cbdd48))



## [1.0.4](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.0.3...1.0.4) (2020-10-22)


### Bug Fixes

* **deps:** :bug: bumped basis-aggrid-components version to 1.2.1 ([2e72f95](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2e72f9585f7d79b14df8f351467625af7d0d8a11))



## [1.0.3](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.0.2...1.0.3) (2020-10-20)


### Bug Fixes

* :bug: GxOptionsBoolean does not define default options ([83c4bac](https://github.com/BBj-Plugins/BBjGridExWidget/commit/83c4bac2083f1324d5bbd656d52ce198597e155e))



## [1.0.2](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.0.1...1.0.2) (2020-10-06)


### Bug Fixes

* :bug: Cannot instantiate GxColumnGroup:addColumn(BBjString field!) ([7009c86](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7009c860d30e96a45e2cdc9683f8fad504a73a80))



## [1.0.1](https://github.com/BBj-Plugins/BBjGridExWidget/compare/1.0.0...1.0.1) (2020-08-31)


### Bug Fixes

* **deps:** update BBjWidget required version to 1.1 ([e7950ef](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e7950ef8012fb891755d14eb9d4f0649aa824ed7))



# [1.0.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.102.1...1.0.0) (2020-07-17)


### Bug Fixes

* :bug: cell clicks events are not debounced ([67e6e5a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/67e6e5a1438f3a5488c0f5658337639e3c0008cb))
* :bug: setColumnVisible uses worng debounce key ([0e1b99a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0e1b99aadd49d8fa1e29fcc42d311194b62c3038))
* **demo:** replace deprecated api in Pivot demo ([2f2bff1](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2f2bff10201321d697facfc2165f39c459fe1744))
* :bug: replace deprecated methods in `GxFilterSetFilter` ([565f64a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/565f64a7eb3249d22d61d2ed61cf8affec471bce))
* **demo:** :bug: redraw columns in ColumnsUpdate.bbj ([bc16e25](https://github.com/BBj-Plugins/BBjGridExWidget/commit/bc16e25f8ae47ac1a8af282ecec58f03a7e1a11e))
* **demo:** :bug: replace deprecated method `setRowsData` ([701fa30](https://github.com/BBj-Plugins/BBjGridExWidget/commit/701fa309322c7c3e3858e7e631787975fbb621cf))
* :bug: Key navs broken in agg23.2 & BBj20.11 ([7728add](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7728addc9f8291e7c68889deb479947288b5a80e))
* :bug: SetFilter filter throws warnnings in aggv23.2 ([cc8d4b6](https://github.com/BBj-Plugins/BBjGridExWidget/commit/cc8d4b62f3804ea4fe4a17489a3a1ab92d96bace))


### Features

* **demo:** :sparkles: add OrderLines demo ([b6acd3a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/b6acd3a5d0698e2c980fa3e01989021e70862472))
* :sparkles: add `setColumnVisible` APi ([aa203c8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/aa203c8233868ee52b81e495af9acf53eb7c39cc))
* :sparkles: add `SuppressHorizontalScroll` option ([409baf6](https://github.com/BBj-Plugins/BBjGridExWidget/commit/409baf62e4f1a9ff30d150813696cc92edafe06b))
* :sparkles: add SetFilter `DefaultToNothingSelected` & `ApplyMiniFilterWhileTyping` ([8b7b5eb](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8b7b5eb08745ba412e898f01742667841317859e))
* :sparkles: Attach key presses to clickEvents ([6de57a2](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6de57a293cf4b33aafa3a1889ea834ec65108862)), closes [#206](https://github.com/BBj-Plugins/BBjGridExWidget/issues/206)


* refactor!: :hammer: deprecate `SuppressSyncValuesAfterDataChange` & `SuppresRemoveEntries` ([ee4171c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ee4171c3eb1cfd3911d4d07bee5105d56aaa88ad))


### BREAKING CHANGES

* since version 0.102.0,
`GxFilterSetFilter.SuppressRemoveEntries` &
`GxFilterSetFilter.SuppressRemoveEntries` is deprecated / removed. Use
GxFilterSetFilter.NewRowsAction instead.
* The GxClientModels.GxClientFilterSetFilterModel
requires calling the `update` method after calling any of its methods
(ex: selectEverything()). Check Demo/FilterAPI )



## [0.102.1](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.102.0...0.102.1) (2020-06-23)


### Bug Fixes

* :bug: gx does not extend children in col def ([ee3fa06](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ee3fa06450e35973ceb71c524812af39745299b0))



# [0.102.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.101.3...0.102.0) (2020-06-19)


### Bug Fixes

* :bug: remove unnoticed methodend ([2ca09e5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2ca09e5eff970c9576217e7cb45d001682622164))
* **webpack:** :bug: webpack minify `bbj-grid-widget.js` in production` ([8b6eaf5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8b6eaf5da8e3356e46767a68eff05893938bdac7))
* :bug: replace the deprecaed rows methods ([034f21c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/034f21c5cb0abc264e5a8841b74b13b7bce82422))
* :bug: `removeStyle` is  not in compliance with BBjControl interface ([c961448](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c961448516f1d5630fb051c85f415b7df5a7e525))
* :bug: add missing import for HashMap ([5ee1b60](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5ee1b6041fde977a36d9976805917d3e3b0bb3be))


### Features

* :sparkles: add `GxCellEditorSuggestion` ([c5986d4](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c5986d4e36561b24b34f485861aea71c91472ce7))
* :sparkles: add `GxColumn.FloatingFilter` ([5fb4619](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5fb461978f224f4bec7590d2dbffdcbe1bb002e5))
* :sparkles: add `GxLogger` ([e5eec0b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e5eec0bc6056b3e1db45ef95647f6f034c8d2f53))
* :sparkles: add `GxOptions.ImmutableColumns` ([f602031](https://github.com/BBj-Plugins/BBjGridExWidget/commit/f6020314a376953b8e4b6d20723863ec3f8f2421))
* :sparkles: add column spanning support ([46553e9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/46553e9ee4d63d9b93fc2549196980900e0bfce4))
* :sparkles: add row spanning support ([bc46278](https://github.com/BBj-Plugins/BBjGridExWidget/commit/bc46278e6b9958f2bdfc18c697225163be768ad2))
* :sparkles: add `getRow` api method ([7b89376](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7b89376208a95b713824cd0ce5f233c7c138a8cd))
* :sparkles: add `getRows` api ([b7512d1](https://github.com/BBj-Plugins/BBjGridExWidget/commit/b7512d191359275b11d6094217e522bd01bcd4a4))
* :sparkles: add row pinning feature ([dbfc05a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/dbfc05acca8d50a3a64532dfc6f8d3f6ea7ffb25))
* :sparkles: Allow suppressing cell selections ([567fdce](https://github.com/BBj-Plugins/BBjGridExWidget/commit/567fdce84fb2e99917507d71e6d3dc437f0f9a3c)), closes [#204](https://github.com/BBj-Plugins/BBjGridExWidget/issues/204)
* :sparkles: expose `loclae` & `timezone` options to date/time expression ([c20411d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c20411d81722f48d4b44e3c5dc57185dff4d0dbb))
* :sparkles: upgrade to agg-v23 ([c1e1cd9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c1e1cd9f05c297177f21f445aaea32ec39209122))


* refactor!: deprecate `GxStatusBarComponentInterface.NAME()` ([f79fe64](https://github.com/BBj-Plugins/BBjGridExWidget/commit/f79fe64b6e3c9b5ce57275f5413a789f1b1836f7))
* refactor!: deprecate `GxToolpanelInterface.ID` ([1ee0490](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1ee04902c0ef06ed450079bb97f34a14c7989e22))


### BREAKING CHANGES

* deprecate `GxStatusBarComponentInterface.NAME()` in favor of `GxStatusBarComponentInterface.getId()`
* `GxToolpanelInterface.ID()` is deprecated in favor of `GxToolpanelInterface.getId()`



## [0.101.3](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.101.2...0.101.3) (2020-06-15)

## [0.101.2](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.101.1...0.101.2) (2020-06-15)

### Bug Fixes

* fix: :bug: nodeId is not parsing independent in client models ([50f2f66](https://github.com/BBj-Plugins/BBjGridExWidget/commit/50f2f667003e034e056762f8178e0ea1aadb08d4))


## [0.101.1](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.101.0...0.101.1) (2020-04-07)


### Bug Fixes

* **deps:** correct prod,dev deps and their versions ([67dfae3](https://github.com/BBj-Plugins/BBjGridExWidget/commit/67dfae32c8e5dd2ce61466676ed2f541500f6740))



# [0.101.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.100.4...0.101.0) (2020-04-06)


### Bug Fixes

* **JS:** `cellValueChanged` should not be fired none changed vals ([2699f8a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2699f8a53e2b73a891f14176ecd2613d1b921052))
* `HeaderGroupTooltip` is overriding 'HeaderTooltip` ([e1f08c6](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e1f08c6772445dcc15ed21c21d7e53cb9dcbd42a))
* addSyle should not append dot for selectors ([2dfd5ce](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2dfd5ce1e76204f5f5bd20d0259766b0087c7ec1))
* Bad syntax and a misspelling in BBjGridExWidgetClientModels.bbj ([03db9da](https://github.com/BBj-Plugins/BBjGridExWidget/commit/03db9da39e4ecfbc415b1eb761f9b233a8f19eba)), closes [#201](https://github.com/BBj-Plugins/BBjGridExWidget/issues/201)
* fix BBjGridExWidgetClientRowModel index , id confusion ([20cc612](https://github.com/BBj-Plugins/BBjGridExWidget/commit/20cc612abff44f789249adc4e7ae854d8c2d6833))
* focus not working in GUI ([58930d3](https://github.com/BBj-Plugins/BBjGridExWidget/commit/58930d3202eff0e4c689948bdd081080021d86b1)), closes [#181](https://github.com/BBj-Plugins/BBjGridExWidget/issues/181)
* gw_isHeaderCheckboxSelection duplicates boxes ([bfb856c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/bfb856c59e7dd553d70389de2582f67be6d6c73c)), closes [#188](https://github.com/BBj-Plugins/BBjGridExWidget/issues/188)
* inject all script in top window ([ad9d7b8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ad9d7b8fffaf38ad0ff0eb4edc4e5b5fa3820602))
* ON_GRID_CELL_CLICK event parsing failes when value is null ([a304cd3](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a304cd34b2529a83f187e7c3098c4906d331e105)), closes [#179](https://github.com/BBj-Plugins/BBjGridExWidget/issues/179)
* remove deprecated themes ([5102654](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5102654b59a47c96e7cc61d90d6df4f5bf5f8b25)), closes [#196](https://github.com/BBj-Plugins/BBjGridExWidget/issues/196)
* restore the old index.html init template ([44042b2](https://github.com/BBj-Plugins/BBjGridExWidget/commit/44042b2497de1bd6ea53514fef8e0f4f22027840))
* setRowData(index! , row!) does not need index ([ad2f058](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ad2f05836101b5a163e3dfe914df3265456e9511)), closes [#184](https://github.com/BBj-Plugins/BBjGridExWidget/issues/184)
* TransactionModel's AddIndex default value must be 0 ([afb460d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/afb460dc8bfa84927b4894f3653a2de34fff688c))
* **JS:** ensureIndexVisible should  cast the index ([46ef084](https://github.com/BBj-Plugins/BBjGridExWidget/commit/46ef0848046cd6baaa538a6f5f270c67562a263d))
* **JS:** gw_ensureIndexVisible should use ensureNodeVisible to select node objects ([ee2b00b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ee2b00bb4bb329c4d39f1fb24ba3bbceadd67983))
* update method should not call refreshClientSideRowModel ([c2975a8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c2975a80cca8635b0df3ea5a6a5f1fa610d4a9d7)), closes [#197](https://github.com/BBj-Plugins/BBjGridExWidget/issues/197)


### Code Refactoring

* **BBj:** move HeaderTooltip to `GxColumnDefinition` ([eb65600](https://github.com/BBj-Plugins/BBjGridExWidget/commit/eb65600650d29874bcf46073a59186b4c01dbfa7))
* use `Gx` as prefix ([211085a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/211085a1ab98aaaeecc3cf9d3dca99806bf00279))


### Features

* add `GxColumn.setTooltipValueGetterExpressio(BBjString)` ([58fb6d9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/58fb6d96e3c6ec116d61b155d47f2183838927cb))
* add `GxExecutor` to handle script debouncing ([8170e0e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8170e0e495cd1e14a0be08b3a3f6c5771496f079))
* add `TooltipShowDelay` option ([34ed092](https://github.com/BBj-Plugins/BBjGridExWidget/commit/34ed09210c15cb3e983d092ef4a76748a851b7ee))
* add suffix and prefix for number,string & bytes formatters ([033071d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/033071dd02b85cbbaaacc6ac210b98a0a6bd4e38))
* add support for editable expression ([8496726](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8496726d01de9c7d94c715daa7c9aab4e789b982))
* support remote debugging on different windows ([50106eb](https://github.com/BBj-Plugins/BBjGridExWidget/commit/50106eb8104cd9e3d086bb3a8c544501313ca024))
* **BBj:** add support for Field Tooltips ([dfd98c4](https://github.com/BBj-Plugins/BBjGridExWidget/commit/dfd98c40e915600b5e203fda16e8493fee90eeb5))
* **demo:** add ColumnPinning demo ([0ef8765](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0ef87652699ba46b13bf4c3f558de251d53e5f41))
* **demo:** add ColumnSuppressMovableAndLockPosition demo ([4557405](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4557405e7dd12aa4367056bfc480c235fe9ce9a7))
* **demo:** add context demo ([95c2e4e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/95c2e4ec91901ec705a8d16dde7f8d231674b5c9))
* **demo:** add HighlightingRowsAndColumns dmeo ([305478c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/305478c55bc9d2fa08b56d0ade626169d223b14c))
* **demo:** add sorting api demo ([98e8f5e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/98e8f5ef71a459ebfea9848aa408c126fd0946b9))
* **demo:** add tooltips demo ([d31de00](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d31de006e390df953d25aaa3e332439d9e43df2e))
* **demo:** add ValueParser demo ([3418800](https://github.com/BBj-Plugins/BBjGridExWidget/commit/341880039b61c8356f74cf8985f97f3b8f77505c))
* **JS,BBj:** add HTMLTooltip component ([dda6139](https://github.com/BBj-Plugins/BBjGridExWidget/commit/dda6139b1b8d30a9495a05f55f2e198a329a6cda))
* add `resetRowHeights` api method ([19b3d67](https://github.com/BBj-Plugins/BBjGridExWidget/commit/19b3d67763603c16e3239a0d12a6fbc6b2b4a116))
* add `tabToNextCell` and `tabToPreviousCell` API` ([3c6c8eb](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3c6c8eb10cc38b317b3018ecffee4626145314b7))
* add autoSizeColumns functions ([739999b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/739999b877ebcc6d27be96967d85e9ed102e08a4)), closes [#149](https://github.com/BBj-Plugins/BBjGridExWidget/issues/149)
* add ensureColumnVisible ([b93b550](https://github.com/BBj-Plugins/BBjGridExWidget/commit/b93b550fbba6e4e04e0e112d0c6317ea8cd157ee))
* add ensureIndexVisible ([196e0f4](https://github.com/BBj-Plugins/BBjGridExWidget/commit/196e0f4e85f1f69cd20421dcb247bdb368a6b33b))
* add filters api to apply columns filters from BBj ([4bc5da8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4bc5da873e5b72b6f754ab64970dbe51e3a48ac6))
* add ON_GRID_ROW_VALUE_CHANGED event ([1a22431](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1a224315bbb91cd1271ff87c5e300dce2e6331d0))
* add sorting api ([9d41a74](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9d41a740ec157ce2824eed39ecf4bce8fc942b2a))
* add support for Transaction updates ([7aae009](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7aae009bd0e5668b40514585d393c74d691a4bd6))
* add support Tooltip value getter expression ([837e99d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/837e99d2624f4929e194117d0d7e57c3dcda2e16))
* add supported themes as constants ([717c87d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/717c87d5e7b103ea5ccd2c8a07051068a92113fb))
* allow cell editing by row key ([9ea41fc](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9ea41fcead0c2ec12f18d660cd15f46d8d5b2de9))
* allow to set row height by key ([ca39f2c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ca39f2c8a6185d9c2359cdd99be2068561854475))
* enable row data sync with a context config ([ff427c0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ff427c03c8324c66ac1f5794bdd4f6e5e8a57964))
* extend setSelectedRow(s) methods to allow selection by key ([2153a4e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2153a4e2c3ec5429694cccd3abd719b0fc0fe025))
* Implement BBj interfaces for basis-aggrid-components components ([0140805](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0140805c6631044556c0f7b145b9b3f181369f91))
* implement ON_GRID_ROW_CLICK event ([99ddcb7](https://github.com/BBj-Plugins/BBjGridExWidget/commit/99ddcb783f1eb04a80805fb0c94bca3c45b62bce)), closes [#178](https://github.com/BBj-Plugins/BBjGridExWidget/issues/178)
* improve context api and add `redrawRows` & `updateContext` API ([1598f8f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1598f8f710a1bfc9c82e37758981e668dcbdf472))


### BREAKING CHANGES

* **BBj:** `GxDefaultColumnGroup.HeaderGroupTooltip` is deprecated
now. Use `GxDefaultColumnGroup.HeaderTooltip` instead
* All classes use the `GX` prefix now instead of
`BBjGridExWidget`
* the rowId refers now to the auto generated key by the resultset where . the rowIndex refers to
the row index in the grid not the resultset and childIndex refers to row
index in the grid when grouping
* `addStyle` does not assume that selector is a class
selector anymore. the selector can be any valid css selector thus the
method will not auto append the dot at the begging of the selector
anymore.
* The fresh, dark, blue and bootstrap themes were the original themes provided by the grid. They are deprecated


## [0.100.4](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.100.3...0.100.4) (2020-01-15)


### Bug Fixes

* **BBj:** `BBjGridExWidgetClientRowModel.asDataRow` cannot retirve rows which are indexed using custom index([ecfe4e7](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ecfe4e7d8095265a3fb5a605a2df7d9742499dab))
* **BBj:** BBjGridExWidgetColumn:update error `java.lang.String.class` undefined ([2d14d3f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2d14d3fda974e1d20dc31c117e2ca80422f8a1cd))



## [0.100.3](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.100.2...0.100.3) (2019-12-18)


### Bug Fixes

* Rename Enterprise demo folder to Enhanced to match corporate naming convention ([2a11a7f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2a11a7f38d74996ab5e591199eecabb6aed71e9c))
* transcribe German Umlauts ([fb365ae](https://github.com/BBj-Plugins/BBjGridExWidget/commit/fb365aee85cb770a62d33e5cf1f57386188bbce7))
* typo in ChartingDemo.bbj and API ([a2030af](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a2030af7d8e97e3e484c178c29554d534036e263))
* typo in samples ([46be4f4](https://github.com/BBj-Plugins/BBjGridExWidget/commit/46be4f4d2903e23c144ec97f3407550f5fa8ec38))



## [0.100.2](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.100.1...0.100.2) (2019-09-25)


### Bug Fixes

* added workaround using a timer to fight the "blank window" problem in later BBj releases, that was probably triggered by the later Chromium engine in BBj ([0b54745](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0b54745))
* harden potential failure when second file is also not found ([c044063](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c044063))
* inject styles in the document of the windows's parent ([58925c9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/58925c9))



## [0.100.1](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.100.0...0.100.1) (2019-08-28)


### Bug Fixes

* The license manager does not catch checkout errors ([3714748](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3714748))



# [0.100.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.99.0...0.100.0) (2019-08-23)


### Bug Fixes

* all popup features are not working in BUI ([f0275cf](https://github.com/BBj-Plugins/BBjGridExWidget/commit/f0275cf))
* context menu does not open when using BBj 19.10 ([08f90a7](https://github.com/BBj-Plugins/BBjGridExWidget/commit/08f90a7))
* **JS:** `keydown.code` is not defined in Edge & IE11 ([0efb6ab](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0efb6ab))
* **JS:** add a pollfill for `Array.find` method ([50964c0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/50964c0))
* rendering the BBjHTMLView invisible and then later making it visible resulted in the grid sometimes not rendering at all, starting always visible now ([cc9f504](https://github.com/BBj-Plugins/BBjGridExWidget/commit/cc9f504))


### Features

* implmenet a license manager ([fcc9329](https://github.com/BBj-Plugins/BBjGridExWidget/commit/fcc9329))
* pass the `CHROMIUM_SWITCHES` in BBj 19.10 to the html view ([5b7e626](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5b7e626))



# [0.99.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.98.0...0.99.0) (2019-07-29)


* refactor : move predefined menu items to `BBjGridContextMenuItem` and remove `BBjGridContextMenuPredefinedMenuitem` ([2614d51](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2614d51))


### Bug Fixes

* `BBjGridExWidgetClientColumnModel.getType()` should use the column index to get the column type from the RS ([80f4fb2](https://github.com/BBj-Plugins/BBjGridExWidget/commit/80f4fb2))
* **JS:** `gw_getRangeSelections` should ignore empty ranges ([54fcbe5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/54fcbe5))
* `gw_getRangeSelections` does not check for the node type ([176be07](https://github.com/BBj-Plugins/BBjGridExWidget/commit/176be07))
* Dutch translation ([77c5d89](https://github.com/BBj-Plugins/BBjGridExWidget/commit/77c5d89))
* fix missing 't' in `BBjGridExWidgetClientAddRangeSelectionModel` ([e172d06](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e172d06))
* **JS:** fix `gw_parseNode` is not defined when `gw_getRangeSelections` ([f25d5ae](https://github.com/BBj-Plugins/BBjGridExWidget/commit/f25d5ae))
* NavigationBehavior is not working after `BBjGridExWidgetOptions` is added ([1a8b048](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1a8b048))
* onCellEvent can't parse the json response coming from the client ([b23c82a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/b23c82a))
* setSelectedRows/setSelectedRows must not deselect all rows by default ([7da00b0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7da00b0))


### Features

* add `addRangeChart` method to create charts programmatically ([1ec9008](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1ec9008))
* add `BBjGridExWidgetStatusBarAggregationComponent` ([0d4841e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0d4841e))
* add api method to clear range selections ([31cab40](https://github.com/BBj-Plugins/BBjGridExWidget/commit/31cab40)), closes [#167](https://github.com/BBj-Plugins/BBjGridExWidget/issues/167) [#167](https://github.com/BBj-Plugins/BBjGridExWidget/issues/167)
* add api methods to add range selection ([019727c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/019727c)), closes [#166](https://github.com/BBj-Plugins/BBjGridExWidget/issues/166) [#166](https://github.com/BBj-Plugins/BBjGridExWidget/issues/166)
* add api methods to control the chart toolbar items ([cedd618](https://github.com/BBj-Plugins/BBjGridExWidget/commit/cedd618))
* add api methods to fetch the range selection from the client ([7ee65ef](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7ee65ef)), closes [#165](https://github.com/BBj-Plugins/BBjGridExWidget/issues/165) [#165](https://github.com/BBj-Plugins/BBjGridExWidget/issues/165)
* add api to clear charts from BBj ([d9ee157](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d9ee157))
* add constant for chart types ([6bf64e8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6bf64e8))
* add EnableCharts boolean flag ([cb43255](https://github.com/BBj-Plugins/BBjGridExWidget/commit/cb43255))
* add new grid's event `BBjGridExWidgetClientEventsKeypress` ([7e77a09](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7e77a09))
* add predefine menu item `BBjGridContextMenuItem.SEPARATOR()` ([af3fc1d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/af3fc1d))
* add range selection event `ON_GRID_RANGE_SELECTION_CHANGED()` ([6f6213f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6f6213f))
* add the predefined menu item `CHART_RANGE` ([fb5f948](https://github.com/BBj-Plugins/BBjGridExWidget/commit/fb5f948))
* group configuration properties and methods in onc class `BBjGridExWidgetOptions` ([870d45a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/870d45a))
* implement `focus` method ([6369d69](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6369d69))
* improve `BBjGridExWidgetColumn.update` to detect the column masks ([b32033c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/b32033c))
* support controlling the chart type from column definetion ([13a5871](https://github.com/BBj-Plugins/BBjGridExWidget/commit/13a5871))
* support enableRangeSelection property ([7d7976a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7d7976a)), closes [#169](https://github.com/BBj-Plugins/BBjGridExWidget/issues/169) [#169](https://github.com/BBj-Plugins/BBjGridExWidget/issues/169)
* support suppressCellSelection property ([713d789](https://github.com/BBj-Plugins/BBjGridExWidget/commit/713d789)), closes [#168](https://github.com/BBj-Plugins/BBjGridExWidget/issues/168) [#168](https://github.com/BBj-Plugins/BBjGridExWidget/issues/168)


### Performance Improvements

* reduce response sizes sent from the client ([e834e09](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e834e09))

### BREAKING CHANGES

* setSelectedRows/setSelectedRows methods used to
deselect all rows before appling the new selection, this is not the case
anymore , if you still need the old behavior then call `grid!.deselectAlldeselectAll()` before
applying the new selection
* all propeties and methods used to configure the grid
before render are grouped in one class `BBjGridExWidgetOptions` ,
instead of settings these properties/calling these methods from the
`BBjGridExWidget` directly use the options property `(ex
grid!.getOptions.enableFilter(1))`
* `BBjGridContextMenuPredefinedMenuitem` is removed , use `BBjGridContextMenuItem` instead (@see Enterprise/ContextMenuDemo.bbj).



# [0.98.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.97.1...0.98.0) (2019-07-11)


### Bug Fixes

* fix the wrong default numbers & dates mask ([3a1cbe2](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3a1cbe2))
* cells, headers & rows classes are ignored in BBj 19 ([dd431a1](https://github.com/BBj-Plugins/BBjGridExWidget/commit/dd431a1))


### Features

* add an api method `setHeaderAlignment(BBjNumber align!)` to allow column's header alignment ([4e3684a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4e3684a))
* add bytes formatter expression (BBjGridExWidgetExpressionBytesFormatter) ([eae69a5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/eae69a5))
* add support for tree data ([9de7e29](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9de7e29))
* allow the sidebar to be hidden by default ([5fdfb29](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5fdfb29))
* setTheme can set the theme before/after the grid is renderer ([cf965bc](https://github.com/BBj-Plugins/BBjGridExWidget/commit/cf965bc))
* support inner renderers in `BBjGridExWidgetRendererGroupCellRenderer` ([536c905](https://github.com/BBj-Plugins/BBjGridExWidget/commit/536c905))



## [0.97.1](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.97.0...0.97.1) (2019-07-08)


### Bug Fixes

* gw_sendEvent is firing events for none registred interests and skiping registered ones ([947c071](https://github.com/BBj-Plugins/BBjGridExWidget/commit/947c071))



# [0.97.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.96.0...0.97.0) (2019-07-04)


### Bug Fixes

* Chunk rendering implementation disallows rendering empty grids ([1329870](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1329870))


### Code Refactoring

* remove `isEditing()` method ([7565668](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7565668))


### Features

* add overlay api methods to show/hide overlays ([9c3adad](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9c3adad))
* add overlay properties setters/getters ([885f8b0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/885f8b0))


### BREAKING CHANGES

* `isEditing()` is removed. The method will not work after implementing event interests.
The client will not send events to bbj unless there a
callback registerd for that event in bbj. a developer can implement this
method again easily by registering callbacks for editing events.
* `ChunkRendering` flag is deprecated now and will be removed on the next version. @see `Demo/ChunkRenderingDemo.bbj`



# [0.96.0](https://github.com/BBj-Plugins/BBjGridExWidget/compare/0.95.1...0.96.0) (2019-07-02)

[More Details...](https://github.com/BBj-Plugins/BBjGridExWidget/pull/148)

### Bug Fixes

* BBjGridExWidget.getAsJsonObject should not use getPivotMode() getter ([465634e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/465634e))
* convert groupDefaultExpanded to boolean ([260d3a6](https://github.com/BBj-Plugins/BBjGridExWidget/commit/260d3a6))
* correct dutch translation ([ea67518](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ea67518))
* fix wrong method name for `removePivotColumns` ([2f3b80a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2f3b80a))
* row double click reference itself ([679e255](https://github.com/BBj-Plugins/BBjGridExWidget/commit/679e255))
* sidebar toolpanels are not using the default labels and icons ([06ab561](https://github.com/BBj-Plugins/BBjGridExWidget/commit/06ab561))
* the grid can not align cells when `checkboxSelection` is in use ([321aef0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/321aef0))
* improve  pivot api methods to handle pivot and grow group index generation ([78c5c12](https://github.com/BBj-Plugins/BBjGridExWidget/commit/78c5c12))


### Features

* add api to add/remove pivot columns ([6d07f68](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6d07f68))
* add api to allow add/removing row groups ([c58784c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c58784c))
* add `BBjGridExWidget.setRowGroupColumns` ([6584f0d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6584f0d))
* add `BlockRenderToReady` mode ([db5b352](https://github.com/BBj-Plugins/BBjGridExWidget/commit/db5b352))
* Add chunk rendering feature with a demo ([4e52454](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4e52454))
* add new method singture `method public BBjGridExWidgetColumn addColumn(BBjString field!)` ([f7442c3](https://github.com/BBj-Plugins/BBjGridExWidget/commit/f7442c3))
* add method `method public void setColumnAggFunc(BBjString field! , BBjString AggFunc!)` ([d5802ef](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d5802ef))
* add new method singture `method public void setIcons(BBjString json!)` ([9c8dbcf](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9c8dbcf))
* Add the ability to init the grid with a different default template ([00c00b3](https://github.com/BBj-Plugins/BBjGridExWidget/commit/00c00b3))
* Add the ability to update the column defintions without a full rerender ([9b97956](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9b97956))
* add values api methods ([88771d1](https://github.com/BBj-Plugins/BBjGridExWidget/commit/88771d1))
* allow columns to override icons ([6c30fa9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6c30fa9))
* seperate enableRowGroup and rowGroup ([9ba7c49](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9ba7c49))

## <small>0.95.1 (2019-05-20)</small>

* fix(BBj) : parser is not defined in `BBjGridExWidget.getData()` ([22c0966](https://github.com/BBj-Plugins/BBjGridExWidget/commit/22c0966)), closes [#141](https://github.com/BBj-Plugins/BBjGridExWidget/issues/141) [#141](https://github.com/BBj-Plugins/BBjGridExWidget/issues/141)



## 0.95.0 (2019-05-02)

* Update CHANGELOG.md ([65c308f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/65c308f))
* release: v0.95.0 release ([3c50a9d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3c50a9d))
* revert: build: configure bumped to auto publish new releases ([930b3d4](https://github.com/BBj-Plugins/BBjGridExWidget/commit/930b3d4))
* build: add Bumped support ([edcbdfc](https://github.com/BBj-Plugins/BBjGridExWidget/commit/edcbdfc))
* build: configure bumped to auto publish new releases ([5496869](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5496869))
* build(changelog): empty changelog , handled now by bumped ([a5d2503](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a5d2503))
* refactor: remove dead code for grid tree ([49dae93](https://github.com/BBj-Plugins/BBjGridExWidget/commit/49dae93)), closes [#77](https://github.com/BBj-Plugins/BBjGridExWidget/issues/77)
* refactor: rename js -> client and add index.html ([79449c0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/79449c0))
* style(bbj): format BBjGridExWidget.bbj ([2962326](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2962326))
* feat: allow changing the grid language (#128) ([8fe01f0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8fe01f0)), closes [#128](https://github.com/BBj-Plugins/BBjGridExWidget/issues/128) [#122](https://github.com/BBj-Plugins/BBjGridExWidget/issues/122) [#128](https://github.com/BBj-Plugins/BBjGridExWidget/issues/128) [#122](https://github.com/BBj-Plugins/BBjGridExWidget/issues/122)
* fix: NPE when passing null() as a resultset ([4e3c546](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4e3c546))



## 0.94.0 (2019-04-24)

* [Enterprise Features] tool panel (#29) ([9af3a57](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9af3a57)), closes [#29](https://github.com/BBj-Plugins/BBjGridExWidget/issues/29) [ag-grid-components#v1](https://github.com/ag-grid-components/issues/v1)
* [fix] remove dead code for #72 ([e4408a9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e4408a9)), closes [#72](https://github.com/BBj-Plugins/BBjGridExWidget/issues/72)
* [fix] reset row height to the default before the row height was settable ([88c4d5d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/88c4d5d))
* [fix] typo ([d65c8fa](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d65c8fa))
* 2nd half of fix ([cfff305](https://github.com/BBj-Plugins/BBjGridExWidget/commit/cfff305))
* a few minor fixes for issues that came up with last version ([7d62525](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7d62525))
* Adapt the new selection events in demos ([44af5bb](https://github.com/BBj-Plugins/BBjGridExWidget/commit/44af5bb))
* Adapted the bbj-plugin.json including the BBjWidget Dependency ([75c1dfa](https://github.com/BBj-Plugins/BBjGridExWidget/commit/75c1dfa))
* add "addColumnGroup" with demo ([166e12d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/166e12d))
* Add `balham` theme and set it as default theme ([94f515a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/94f515a))
* Add `basic-image` & `basic-image-filterable` types ([a09e4f2](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a09e4f2))
* Add aggregation support ([c15b3aa](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c15b3aa))
* Add Aggregation with Group Footers Demo ([7c91909](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7c91909))
* Add assertIsEnterprise method to check license key ([6501b05](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6501b05))
* Add basic date format function ([1d0e1de](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1d0e1de))
* Add Basic Order Entry Demo ([79db5ea](https://github.com/BBj-Plugins/BBjGridExWidget/commit/79db5ea))
* Add basic RowIndex support ([c5ebf20](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c5ebf20))
* Add basic statusbar implementation ([c727a03](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c727a03))
* add comment to sample ([e324fe6](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e324fe6))
* Add CustomEvent Pollyfill ([0e0a740](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0e0a740))
* add debug function to copy JSON data to clipboard (GUI only) after double-clicking at least four tim ([0773ca3](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0773ca3))
* Add Enter Key Behavior ([d7e245e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d7e245e))
* Add support for basic number masking ([5fa7afe](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5fa7afe))
* Add support for context menus ([58117a1](https://github.com/BBj-Plugins/BBjGridExWidget/commit/58117a1))
* Add the ability to read date mask from the meta object ([984a181](https://github.com/BBj-Plugins/BBjGridExWidget/commit/984a181))
* Add the enterprise license check ([1ceb8fd](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1ceb8fd))
* Added "addRow" method ([c94e9d6](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c94e9d6))
* added a refresh data button to demonstrate the sidebar status retention during data refreshes ([c1a920a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c1a920a))
* added an additional create method ([6bb3792](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6bb3792))
* added check for BUI in the Chromium engine check ([e25e9ac](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e25e9ac))
* added check for null ([846c574](https://github.com/BBj-Plugins/BBjGridExWidget/commit/846c574))
* added check for null() if ResultSet is empty ([a5e5c7e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a5e5c7e))
* added datatypes Demo/DatatypesDemo.bbj ([62de0c0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/62de0c0))
* added Demo/TwoGridsDemo.bbj ([4736e52](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4736e52))
* added docs folder ([1e0e6d5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1e0e6d5))
* added error message when database does not exist / cannot be opened ([8ff6d3a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8ff6d3a))
* added error message when not running on Chromium engine ([341c324](https://github.com/BBj-Plugins/BBjGridExWidget/commit/341c324))
* added expandAll ([3dfd7c2](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3dfd7c2))
* added first code to distinguish license key ([d634a1a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d634a1a))
* added first shot to support BBj imagelists ([976790e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/976790e))
* added getImageData method ([aed0df7](https://github.com/BBj-Plugins/BBjGridExWidget/commit/aed0df7))
* added grid row double click event ([5fd2693](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5fd2693))
* added jlib demi ([294aa26](https://github.com/BBj-Plugins/BBjGridExWidget/commit/294aa26))
* added sample code for an image on disk ([0a397d6](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0a397d6))
* added sample row for empty values ([5be7a67](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5be7a67))
* added setDebug method to show the debug console in GUI ([65642f9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/65642f9))
* added setter and getter for group column header ([a8e3bec](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a8e3bec))
* added support for multiple selection in top grid ([f74a1ad](https://github.com/BBj-Plugins/BBjGridExWidget/commit/f74a1ad))
* added theme support ([bf03262](https://github.com/BBj-Plugins/BBjGridExWidget/commit/bf03262))
* adding docs ([65fa8c0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/65fa8c0))
* adding getSelectedRow(s) to the plug-in ([3606ab1](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3606ab1))
* aded row index ([6e669e8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6e669e8))
* adjust Demo/DatatypesDemo.bbj ([b2a0940](https://github.com/BBj-Plugins/BBjGridExWidget/commit/b2a0940))
* adjust Demo/SelectionDemo.bbj to new selection event ([8d7052b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8d7052b))
* adjust skewed sizing in GUI ([80d9aec](https://github.com/BBj-Plugins/BBjGridExWidget/commit/80d9aec))
* adjust the sample dates to show issue https://github.com/BBj-Plugins/BBjGridExWidget/issues/89 ([1cfbc39](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1cfbc39))
* adjusted Demo/GridColumnStateDemo.bbj ([a2247a7](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a2247a7))
* adjusted sample ([001f7f6](https://github.com/BBj-Plugins/BBjGridExWidget/commit/001f7f6))
* adjustments to do better handling of select / deselect stuff ([47c5f07](https://github.com/BBj-Plugins/BBjGridExWidget/commit/47c5f07))
* Allow Global Editable ([6ca10f0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6ca10f0))
* Allow type switching ([bc27bce](https://github.com/BBj-Plugins/BBjGridExWidget/commit/bc27bce))
* Basic Integratation for Gson ([23780e1](https://github.com/BBj-Plugins/BBjGridExWidget/commit/23780e1))
* better SQL error handling ([9d600d7](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9d600d7))
* Build prod files ([33202a0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/33202a0))
* build production files ([2768d52](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2768d52))
* Built new docs ([09bfd1b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/09bfd1b))
* Bumped version number to 0.92.1 ([40f3122](https://github.com/BBj-Plugins/BBjGridExWidget/commit/40f3122))
* change index for image list slice to be zero based ([142d3d9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/142d3d9))
* Change some options ([7d599ba](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7d599ba))
* check for null to avoid error ([348413f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/348413f))
* cherripicking from refactor-2 branch ([1340937](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1340937))
* Clean DataTypes deom ([ff48c58](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ff48c58))
* cleanup ([7579a42](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7579a42))
* codmetics ([2189ceb](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2189ceb))
* Complete missing API , and improve demo ([4c91fb3](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4c91fb3))
* corrected to a useful mask like in currency ([45f260b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/45f260b))
* cosmetic fix: remove black border around html view control ([0a5dff9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0a5dff9))
* Create LICENSE ([13b57a8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/13b57a8))
* Create LICENSE ([956e483](https://github.com/BBj-Plugins/BBjGridExWidget/commit/956e483))
* delay the setSize if called before the first process_events ([a5e5194](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a5e5194))
* Delete .buildpath ([722724d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/722724d))
* Delete .project ([0cce868](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0cce868))
* Delete sampledata.json ([78157aa](https://github.com/BBj-Plugins/BBjGridExWidget/commit/78157aa))
* demo for setVisibleRow ([afee230](https://github.com/BBj-Plugins/BBjGridExWidget/commit/afee230))
* Demo/DatatypesDemo.bbj ([79a18c1](https://github.com/BBj-Plugins/BBjGridExWidget/commit/79a18c1))
* disable webpack anayzer from opening the report file ([b3e34ec](https://github.com/BBj-Plugins/BBjGridExWidget/commit/b3e34ec))
* Do not open columns toolpanel by default ([024b7eb](https://github.com/BBj-Plugins/BBjGridExWidget/commit/024b7eb))
* doc ([e253bf1](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e253bf1))
* document setShowGroupChildCount ([159fbb5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/159fbb5))
* document the sidebar classes ([7b338af](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7b338af))
* election checkboxes to demo ([56e3eca](https://github.com/BBj-Plugins/BBjGridExWidget/commit/56e3eca))
* enhanced sample ([84f902b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/84f902b))
* enhanced the demo ([4124188](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4124188))
* enhanced the demo ([a8e67bd](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a8e67bd))
* finished the grid select row event ([4d1bce0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4d1bce0))
* First integration for ag-grid#19 ([a544ae4](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a544ae4)), closes [ag-grid#19](https://github.com/ag-grid/issues/19)
* Fix : Horizontal scrollbar is hidden in GUI after updating to AG Grid 20 - #121 ([7457720](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7457720)), closes [#121](https://github.com/BBj-Plugins/BBjGridExWidget/issues/121) [#121](https://github.com/BBj-Plugins/BBjGridExWidget/issues/121) [#121](https://github.com/BBj-Plugins/BBjGridExWidget/issues/121)
* Fix #13 - ag-Grid v15.0 component names have been renamed to be namespaced. ([9e0157e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9e0157e)), closes [#13](https://github.com/BBj-Plugins/BBjGridExWidget/issues/13)
* Fix #16 - setColumnsState is broken (and getColumnsState as well) ([adbc779](https://github.com/BBj-Plugins/BBjGridExWidget/commit/adbc779)), closes [#16](https://github.com/BBj-Plugins/BBjGridExWidget/issues/16)
* Fix #17 - add cell renderer for boolean type ([35ba60d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/35ba60d)), closes [#17](https://github.com/BBj-Plugins/BBjGridExWidget/issues/17)
* Fix #25 - representation of boolean should be cross / check as default ([b34e0cc](https://github.com/BBj-Plugins/BBjGridExWidget/commit/b34e0cc)), closes [#25](https://github.com/BBj-Plugins/BBjGridExWidget/issues/25)
* Fix #31 , Fix #33 ([ccaab51](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ccaab51)), closes [#31](https://github.com/BBj-Plugins/BBjGridExWidget/issues/31) [#33](https://github.com/BBj-Plugins/BBjGridExWidget/issues/33)
* Fix #32 - if a ResultSet contains fields with null values, the rendering is kaputt ([6081ebd](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6081ebd)), closes [#32](https://github.com/BBj-Plugins/BBjGridExWidget/issues/32)
* fix #35 ([be62062](https://github.com/BBj-Plugins/BBjGridExWidget/commit/be62062)), closes [#35](https://github.com/BBj-Plugins/BBjGridExWidget/issues/35)
* fix #37 ([2a4aa8e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2a4aa8e)), closes [#37](https://github.com/BBj-Plugins/BBjGridExWidget/issues/37)
* Fix #42 - Evaluate OPTS string to replace comma and dot character in number masks ([e139091](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e139091)), closes [#42](https://github.com/BBj-Plugins/BBjGridExWidget/issues/42)
* Fix #45 - The grid remembers selected row from previous filled Grid ([d2fd44e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d2fd44e)), closes [#45](https://github.com/BBj-Plugins/BBjGridExWidget/issues/45)
* Fix #53 ([4a141ec](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4a141ec)), closes [#53](https://github.com/BBj-Plugins/BBjGridExWidget/issues/53)
* Fix #61 - Column with NULL value produces error when double-clicked ([9580530](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9580530)), closes [#61](https://github.com/BBj-Plugins/BBjGridExWidget/issues/61)
* Fix #65 - A non-editable grid is now editable ([a97472e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a97472e)), closes [#65](https://github.com/BBj-Plugins/BBjGridExWidget/issues/65)
* Fix #66 - Context Menus is not working In Gui ([8e7e615](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8e7e615)), closes [#66](https://github.com/BBj-Plugins/BBjGridExWidget/issues/66)
* Fix #68 - BUI: in a window with multiple grids, always the first one gets populated and updated ([5dea7e7](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5dea7e7)), closes [#68](https://github.com/BBj-Plugins/BBjGridExWidget/issues/68)
* Fix #71 - Locale setting (SETOPTS?) broken for numeric masks / values ([e161cdf](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e161cdf)), closes [#71](https://github.com/BBj-Plugins/BBjGridExWidget/issues/71)
* Fix #72 ([fd6d198](https://github.com/BBj-Plugins/BBjGridExWidget/commit/fd6d198)), closes [#72](https://github.com/BBj-Plugins/BBjGridExWidget/issues/72)
* Fix #74 - Style is corrupted for ag-grid-community package ([3aeccf0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3aeccf0)), closes [#74](https://github.com/BBj-Plugins/BBjGridExWidget/issues/74)
* Fix #82 - after a setSize, subsequent data updates (setData) fail ([24a0a43](https://github.com/BBj-Plugins/BBjGridExWidget/commit/24a0a43)), closes [#82](https://github.com/BBj-Plugins/BBjGridExWidget/issues/82)
* Fix #9 - Invalid Date Mask parsing ([65a7f22](https://github.com/BBj-Plugins/BBjGridExWidget/commit/65a7f22)), closes [#9](https://github.com/BBj-Plugins/BBjGridExWidget/issues/9)
* Fix #90 ([f802abf](https://github.com/BBj-Plugins/BBjGridExWidget/commit/f802abf)), closes [#90](https://github.com/BBj-Plugins/BBjGridExWidget/issues/90)
* Fix `Can not read hasOwnProperty of undefined` ([fdcfab4](https://github.com/BBj-Plugins/BBjGridExWidget/commit/fdcfab4))
* Fix a typo ([84deda7](https://github.com/BBj-Plugins/BBjGridExWidget/commit/84deda7))
* Fix a typo ([d2d0463](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d2d0463))
* Fix ag-grid-enterprise.js is not injected when the license key is set ([2fb49e0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2fb49e0))
* Fix cell renderer for the tree is overridden ([326141f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/326141f))
* Fix columns widths are passed as strings to ag-grid ([06872ab](https://github.com/BBj-Plugins/BBjGridExWidget/commit/06872ab))
* Fix copy ,paste typo ([1edf1c7](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1edf1c7))
* Fix datejs license issue ([9af2fc5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9af2fc5))
* fix flaw with distbase ([bd16521](https://github.com/BBj-Plugins/BBjGridExWidget/commit/bd16521))
* fix gw_meta dows not contain field attribute ([06c9180](https://github.com/BBj-Plugins/BBjGridExWidget/commit/06c9180))
* Fix main file ([70c147a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/70c147a))
* Fix number filters are resprected ([106bd92](https://github.com/BBj-Plugins/BBjGridExWidget/commit/106bd92))
* Fix selection throws an error on BUI ([d53d01b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d53d01b))
* Fix setColumnWidth is not defined ([66125fc](https://github.com/BBj-Plugins/BBjGridExWidget/commit/66125fc))
* Fix typos ([e1d3b00](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e1d3b00))
* fixed a problem with retaining the column state when an empty resultset is given ([d1c9e29](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d1c9e29))
* fixed event flow ([1a91d27](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1a91d27))
* fixed filter ([a3cd164](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a3cd164))
* fixed getImageData (always returned sample icon) ([d5e62bf](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d5e62bf))
* fixed resizing ([584b00a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/584b00a))
* fixed typo ([acec88e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/acec88e))
* fixed typo , sample for tree selection functions ([09c7fab](https://github.com/BBj-Plugins/BBjGridExWidget/commit/09c7fab))
* fixes #140 ([46b814b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/46b814b)), closes [#140](https://github.com/BBj-Plugins/BBjGridExWidget/issues/140)
* fixing syntax error that broke JavaFX WebView ([9b29eb9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9b29eb9))
* For an ImageList, a value of -1 was a blank cell in legacy grids ([d9713ae](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d9713ae))
* format bbj-plugins file ([22a2f88](https://github.com/BBj-Plugins/BBjGridExWidget/commit/22a2f88))
* Hide columns which starts with double underscores ([614b1fe](https://github.com/BBj-Plugins/BBjGridExWidget/commit/614b1fe))
* hide firebug ([166bb4a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/166bb4a))
* honor attributesrecord also when separate column setup is given ([a431955](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a431955))
* hotfix until we can publish dev branch ([c19c94d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c19c94d))
* Implement BBj Editing Events Interface ([38528a3](https://github.com/BBj-Plugins/BBjGridExWidget/commit/38528a3))
* Implement client data update ([944d0cd](https://github.com/BBj-Plugins/BBjGridExWidget/commit/944d0cd))
* Implement Programmatically Cell Editing ([789a4d4](https://github.com/BBj-Plugins/BBjGridExWidget/commit/789a4d4))
* Improve boolean render not to handle undefined values ([5d83bfb](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5d83bfb))
* improve data updating methods ([612b991](https://github.com/BBj-Plugins/BBjGridExWidget/commit/612b991))
* improve docs ([f635fce](https://github.com/BBj-Plugins/BBjGridExWidget/commit/f635fce))
* Improve docs ([0661199](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0661199))
* Improve editable to be dynamicall ([f428f6c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/f428f6c))
* Improve FOOTER_VALUE_GETTER expression ([8f7adf2](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8f7adf2))
* Improve selection event ([e163c96](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e163c96))
* Improve Selection Events/API ([632e755](https://github.com/BBj-Plugins/BBjGridExWidget/commit/632e755))
* Improve Selection Events/API (#52) ([6b43054](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6b43054)), closes [#52](https://github.com/BBj-Plugins/BBjGridExWidget/issues/52)
* Improve the grid state ([fa8553b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/fa8553b))
* improved selection event ([44e94b4](https://github.com/BBj-Plugins/BBjGridExWidget/commit/44e94b4))
* improved the formatting in the sample ([d1c1fa6](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d1c1fa6))
* Initial Commit ([944f727](https://github.com/BBj-Plugins/BBjGridExWidget/commit/944f727))
* Integrate `createIndex` method and Fix #55 ([108d01c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/108d01c)), closes [#55](https://github.com/BBj-Plugins/BBjGridExWidget/issues/55)
* Integrate sidebar basic API ([b055cec](https://github.com/BBj-Plugins/BBjGridExWidget/commit/b055cec))
* introduce $TRENODE pseudo column label ([41107b8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/41107b8))
* introduce unique control type id ([75f13d2](https://github.com/BBj-Plugins/BBjGridExWidget/commit/75f13d2))
* introduced asDataRow to return row info in datarow format ([5091211](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5091211))
* introduced separate setColumnMask methods ([8246414](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8246414))
* introducing a separate attributes record that allows reuse of the setting upon refresh of the data ([e9998e7](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e9998e7))
* inverted selection to fit the method name ([dbb6390](https://github.com/BBj-Plugins/BBjGridExWidget/commit/dbb6390))
* load html$ after setting the event to avoid race condition ([0539bc8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0539bc8))
* making the JSON String handling in the column state backwards compatible ([c37ef15](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c37ef15))
* Milestone#2 (#102) ([38fd504](https://github.com/BBj-Plugins/BBjGridExWidget/commit/38fd504)), closes [Milestone#2](https://github.com/Milestone/issues/2) [#102](https://github.com/BBj-Plugins/BBjGridExWidget/issues/102) [#101](https://github.com/BBj-Plugins/BBjGridExWidget/issues/101) [#96](https://github.com/BBj-Plugins/BBjGridExWidget/issues/96) [#98](https://github.com/BBj-Plugins/BBjGridExWidget/issues/98)
* modify selection demo to show https://github.com/BBj-Plugins/BBjGridExWidget/issues/69 ([501679e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/501679e))
* moving init code before process_events ([507237c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/507237c))
* new docs ([2bf327a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2bf327a))
* new javadoc ([3817093](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3817093))
* Organize code and improve comments ([d98cc0f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d98cc0f))
* partly workaround for https://github.com/BBj-Plugins/BBjGridExWidget/issues/72 ([7b8c97b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7b8c97b))
* Pass data to the event and keep tracking of selected rows ([857d3d7](https://github.com/BBj-Plugins/BBjGridExWidget/commit/857d3d7))
* pass license key ([7319745](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7319745))
* Pass the license key from BBJ to Javascript ([7ae9fba](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7ae9fba))
* Rebuild JS ([e9813c4](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e9813c4))
* rebuilt docs ([9c82054](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9c82054))
* Refactor the javascript interface ([7a0cdd5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7a0cdd5))
* refresh model after "addRows" call ([9cb1a44](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9cb1a44))
* Regenerate dist for ag-grid@17.0.0 ([58faa6a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/58faa6a))
* reinstate the old method signatures for getSelectedRow and getSelectedRows to match BBj API ([4be6774](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4be6774))
* Remoce unrequired log statement ([74ef3f0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/74ef3f0))
* Remove Cell Falshing ([5c6903e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5c6903e))
* remove console log ([c79a040](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c79a040))
* Remove console logs ([bd8a319](https://github.com/BBj-Plugins/BBjGridExWidget/commit/bd8a319))
* remove filter to have more data ([c489124](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c489124))
* remove method setShowToolPanel ([1cb77b0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1cb77b0))
* Remove print test statmenet ([ad90653](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ad90653))
* Remove Selection Debounce ([775c148](https://github.com/BBj-Plugins/BBjGridExWidget/commit/775c148))
* remove tree demo which does not work anymore anyway ([ad90733](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ad90733))
* Remove unrequired files ([f0e5ee8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/f0e5ee8))
* remove unrequired import ([e5dc04d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e5dc04d))
* remove unrequired log statement ([de2d7d6](https://github.com/BBj-Plugins/BBjGridExWidget/commit/de2d7d6))
* remove unrequired logs ([d0b9065](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d0b9065))
* remove unrequired statments ([e97a7b7](https://github.com/BBj-Plugins/BBjGridExWidget/commit/e97a7b7))
* removed the EnterpriseFeaturesDemo.bbj ([18aee56](https://github.com/BBj-Plugins/BBjGridExWidget/commit/18aee56))
* removed the version dependency in the code since this version is tagged to require 18.10 ([74ddcba](https://github.com/BBj-Plugins/BBjGridExWidget/commit/74ddcba))
* rename demo ([c51058b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c51058b))
* rename demo ([0890d76](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0890d76))
* rename demo ([24b77de](https://github.com/BBj-Plugins/BBjGridExWidget/commit/24b77de))
* rename demo file ([15a652c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/15a652c))
* rename setColumnsState to setColumnState ([4280678](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4280678))
* Reolsve issue # 8 - improve expand performance by using onGroupExpandedOrCollapsed() ([cf4e20e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/cf4e20e))
* Resolve #12 - Columns can not be moved programmatically ([d63e00a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d63e00a)), closes [#12](https://github.com/BBj-Plugins/BBjGridExWidget/issues/12)
* Resolve #14 - There is no way to enable floating filters ([c7e6d43](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c7e6d43)), closes [#14](https://github.com/BBj-Plugins/BBjGridExWidget/issues/14)
* Resolve #20 - allow to change selection by simple cursor up-down ([560eaa2](https://github.com/BBj-Plugins/BBjGridExWidget/commit/560eaa2)), closes [#20](https://github.com/BBj-Plugins/BBjGridExWidget/issues/20)
* Resolve #21 - pass license key to enterprise version ([6f0c46d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6f0c46d)), closes [#21](https://github.com/BBj-Plugins/BBjGridExWidget/issues/21)
* resolve #44 ([8b6c8b3](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8b6c8b3)), closes [#44](https://github.com/BBj-Plugins/BBjGridExWidget/issues/44)
* Resolve #5 - improve row selection event when grid is tree grid ([5d70cee](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5d70cee)), closes [#5](https://github.com/BBj-Plugins/BBjGridExWidget/issues/5)
* Resolve 26 - enhance datatypes demo to show different boolean representations ([3b23174](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3b23174))
* Resolve issue #1 - add setShowGroupChildCount method ([9ddd1ca](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9ddd1ca)), closes [#1](https://github.com/BBj-Plugins/BBjGridExWidget/issues/1)
* Resolve issue #10 - pinColumn can not update the grid after it is already rendered ([ebad654](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ebad654)), closes [#10](https://github.com/BBj-Plugins/BBjGridExWidget/issues/10)
* Resolve issue #4 - setColumnWidth does not work correctly when left column is pinned or grid is tree ([ceeec0f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ceeec0f)), closes [#4](https://github.com/BBj-Plugins/BBjGridExWidget/issues/4)
* Resolve issue #8 - add 'deselectAll' ([345b25e](https://github.com/BBj-Plugins/BBjGridExWidget/commit/345b25e)), closes [#8](https://github.com/BBj-Plugins/BBjGridExWidget/issues/8)
* Resolve issue #8 - Add 'setVisibleColumn' method ([359cd7b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/359cd7b)), closes [#8](https://github.com/BBj-Plugins/BBjGridExWidget/issues/8)
* Resolve issue #8 - add `selectAll` ([5d06d5b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5d06d5b)), closes [#8](https://github.com/BBj-Plugins/BBjGridExWidget/issues/8)
* Resolve issue #8 - Add `setGroupSelectsChildren` and `seShowSelectionCheckbox` ([7697676](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7697676)), closes [#8](https://github.com/BBj-Plugins/BBjGridExWidget/issues/8)
* Resolve issue #8 - Add `setVisibleRow` method to scroll to a row ([70cf243](https://github.com/BBj-Plugins/BBjGridExWidget/commit/70cf243)), closes [#8](https://github.com/BBj-Plugins/BBjGridExWidget/issues/8)
* Resolve issue #8 - add JS selectAll implementaion ([db21a9f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/db21a9f)), closes [#8](https://github.com/BBj-Plugins/BBjGridExWidget/issues/8)
* Resolve issue #8 - add the ability to select/deselect only filtered data ([69634b3](https://github.com/BBj-Plugins/BBjGridExWidget/commit/69634b3)), closes [#8](https://github.com/BBj-Plugins/BBjGridExWidget/issues/8)
* Resolve issue #8 - implement setSelectedRow() ([5d0f1d6](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5d0f1d6)), closes [#8](https://github.com/BBj-Plugins/BBjGridExWidget/issues/8)
* Resolve issue #8 - replace `#HTMLView!.executeScript` with `#executeScript` ([5871c71](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5871c71)), closes [#8](https://github.com/BBj-Plugins/BBjGridExWidget/issues/8)
* Resolve issue #8 -Add `collapseAll` and `expandAll` methods ([15fb660](https://github.com/BBj-Plugins/BBjGridExWidget/commit/15fb660)), closes [#8](https://github.com/BBj-Plugins/BBjGridExWidget/issues/8)
* Resovle #15 - There is no way to allow data searching in the grid without a full re-render or withou ([547fd85](https://github.com/BBj-Plugins/BBjGridExWidget/commit/547fd85)), closes [#15](https://github.com/BBj-Plugins/BBjGridExWidget/issues/15)
* Restructure BBjGridExWidget ([de88fbb](https://github.com/BBj-Plugins/BBjGridExWidget/commit/de88fbb))
* retain the column setup if the structure of the data is not changed ([9fb0095](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9fb0095))
* set rowDeselection:true to make the grid plug-in behave like a BBj Grid ([0934920](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0934920))
* Set theme jekyll-theme-cayman ([8378086](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8378086))
* sidebar default behavior ([5f9b070](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5f9b070))
* started the column state methods ([628081c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/628081c))
* streamlined some selection details ([4ae513d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4ae513d))
* suppress events raised when invoking columnApi.setColumnState ([7ada57f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/7ada57f))
* temporarily remove dependency check ([1e669fe](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1e669fe))
* Treat rowindex as a String ([2ebbd98](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2ebbd98))
* tweaks and sample for selection ([c573cae](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c573cae))
* tweaks for demo, fixing url encoding issue in GUI ([8d957d5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8d957d5))
* Update and rename index.html to index.md ([aa3bed8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/aa3bed8))
* update author ([b415ddc](https://github.com/BBj-Plugins/BBjGridExWidget/commit/b415ddc))
* Update bbj-masks.min.js ([6eff533](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6eff533))
* Update bbj-plugin.json ([64d5472](https://github.com/BBj-Plugins/BBjGridExWidget/commit/64d5472))
* Update bbj-plugin.json ([a165896](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a165896))
* Update bbj-plugin.json ([08fdada](https://github.com/BBj-Plugins/BBjGridExWidget/commit/08fdada))
* Update bbj-plugin.json ([a4f7782](https://github.com/BBj-Plugins/BBjGridExWidget/commit/a4f7782))
* Update bbj-plugin.json ([90ad924](https://github.com/BBj-Plugins/BBjGridExWidget/commit/90ad924))
* Update bbj-plugin.json ([3957107](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3957107))
* Update bbj-plugin.json (#103) ([3ad0057](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3ad0057)), closes [#103](https://github.com/BBj-Plugins/BBjGridExWidget/issues/103)
* update build ([adb19c9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/adb19c9))
* update changelog ([62f087b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/62f087b))
* update changelog ([cbfa899](https://github.com/BBj-Plugins/BBjGridExWidget/commit/cbfa899))
* Update changelog ([37d039a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/37d039a))
* Update demo to include `MASK` option ([ce94e68](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ce94e68))
* Update deps ([c9e3df3](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c9e3df3))
* update documentation ([ca011e6](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ca011e6))
* update gitignore ([6049dc2](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6049dc2))
* update NullDemo ([55f758a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/55f758a))
* Update README.md ([3bab08c](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3bab08c))
* Update README.md ([69dc540](https://github.com/BBj-Plugins/BBjGridExWidget/commit/69dc540))
* Update README.md ([3938e54](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3938e54))
* Update README.md ([d819c4f](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d819c4f))
* Update README.md ([ff30c70](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ff30c70))
* Update README.md ([1864930](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1864930))
* Update README.md ([5b85257](https://github.com/BBj-Plugins/BBjGridExWidget/commit/5b85257))
* Update README.md ([2660a82](https://github.com/BBj-Plugins/BBjGridExWidget/commit/2660a82))
* Update README.md ([097d26a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/097d26a))
* update to ag-grid-components v1.8.0 . ([199d022](https://github.com/BBj-Plugins/BBjGridExWidget/commit/199d022)), closes [#34](https://github.com/BBj-Plugins/BBjGridExWidget/issues/34)
* Update to ag-grid-components@1.2.0 ([b993e79](https://github.com/BBj-Plugins/BBjGridExWidget/commit/b993e79))
* Update to ag-grid-components@1.2.1 ([3891e57](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3891e57))
* Update to ag-grid@18.0.0 ([51cb8fc](https://github.com/BBj-Plugins/BBjGridExWidget/commit/51cb8fc))
* update yarn lock ([72055e7](https://github.com/BBj-Plugins/BBjGridExWidget/commit/72055e7))
* updated dependency ([1838409](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1838409))
* updated docs ([6409352](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6409352))
* updated javadoc ([33fc4a5](https://github.com/BBj-Plugins/BBjGridExWidget/commit/33fc4a5))
* Upgrade to ag-grid-components.git#v1.5.2 ([0bcf813](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0bcf813)), closes [ag-grid-components.git#v1](https://github.com/ag-grid-components.git/issues/v1)
* Upgrade to ag-grid-components#v1.6.0 to fix #28 ([3eef798](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3eef798)), closes [#28](https://github.com/BBj-Plugins/BBjGridExWidget/issues/28)
* Upgrade to ag-grid@17.0.0 ([75b213a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/75b213a))
* upgraded to ag-grid 15 ([68ded7d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/68ded7d))
* Use #executeScript instead of #HTMLView!.executeScript ([dbcb72a](https://github.com/BBj-Plugins/BBjGridExWidget/commit/dbcb72a))
* Use `agc-basic-bundle` ([99bcaa1](https://github.com/BBj-Plugins/BBjGridExWidget/commit/99bcaa1))
* use bbj-masks.js library ([dc3bdcb](https://github.com/BBj-Plugins/BBjGridExWidget/commit/dc3bdcb))
* use BBj.Masks.Types.number ([af4cfe0](https://github.com/BBj-Plugins/BBjGridExWidget/commit/af4cfe0))
* use CDNUMBER as an index ([11a2495](https://github.com/BBj-Plugins/BBjGridExWidget/commit/11a2495))
* Use column.aggFunc for COST column ([69b7d59](https://github.com/BBj-Plugins/BBjGridExWidget/commit/69b7d59))
* use Enterprise whenever configured ([c2f9c78](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c2f9c78))
* enhancement: getVisibleColumns method ([af4f2e2](https://github.com/BBj-Plugins/BBjGridExWidget/commit/af4f2e2))
* enhancement: use new toJsonObject for BBj versions >= 19.00 ([0702785](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0702785))
* Feat: Seperate BBjGridExWidget classes to their own files  (#126) ([4036eec](https://github.com/BBj-Plugins/BBjGridExWidget/commit/4036eec)), closes [#126](https://github.com/BBj-Plugins/BBjGridExWidget/issues/126) [#114](https://github.com/BBj-Plugins/BBjGridExWidget/issues/114) [#114](https://github.com/BBj-Plugins/BBjGridExWidget/issues/114)
* fix: a grid cell is editable if the grid itself is editable and the column is editable ([0b71ac8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0b71ac8))
* fix: clean up demos ([1981b06](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1981b06))
* fix: error when resizing the control ([6ce0dd1](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6ce0dd1))
* fix: fix #108 - The two-grid demo doesn't empty the lower grid when a customer has no orders ([0d115aa](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0d115aa)), closes [#108](https://github.com/BBj-Plugins/BBjGridExWidget/issues/108)
* fix: setSize did not honor the left panel ([6e16a18](https://github.com/BBj-Plugins/BBjGridExWidget/commit/6e16a18))
* feat: add statusbar & statusbar components (#116) ([d431f05](https://github.com/BBj-Plugins/BBjGridExWidget/commit/d431f05)), closes [#116](https://github.com/BBj-Plugins/BBjGridExWidget/issues/116) [#100](https://github.com/BBj-Plugins/BBjGridExWidget/issues/100)
* feat: Add the ability to set the row height globally and by row (#112) ([90d4771](https://github.com/BBj-Plugins/BBjGridExWidget/commit/90d4771)), closes [#112](https://github.com/BBj-Plugins/BBjGridExWidget/issues/112) [#110](https://github.com/BBj-Plugins/BBjGridExWidget/issues/110) [#110](https://github.com/BBj-Plugins/BBjGridExWidget/issues/110)
* feat: implement debounced selection api ([831243b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/831243b)), closes [#113](https://github.com/BBj-Plugins/BBjGridExWidget/issues/113) [#69](https://github.com/BBj-Plugins/BBjGridExWidget/issues/69)
* cleanup: remove obsolete variable ([b5e9e44](https://github.com/BBj-Plugins/BBjGridExWidget/commit/b5e9e44))
* Fix: Using vertical scrollbar sometimes doesn't show the last row completely ([45695cc](https://github.com/BBj-Plugins/BBjGridExWidget/commit/45695cc)), closes [#109](https://github.com/BBj-Plugins/BBjGridExWidget/issues/109)



