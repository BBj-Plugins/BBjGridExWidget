---
slug: gx-grid-v1.8.0
title: BBjGridExWidget v1.8.0
authors: [hyyan]
tags: [release, changelog]
---

## Bug Fixes

* dont show `CHART_RANGE` context menu item by default ([5806120](https://github.com/BBj-Plugins/BBjGridExWidget/commit/580612027949004c0eaa215d7fc20536dda33574))
* fix typo - `GxFiltersToolpanel::suppressExpandAl` should be `GxFiltersToolpanel::suppressExpandAll` ([50e5c79](https://github.com/BBj-Plugins/BBjGridExWidget/commit/50e5c794ba4eb1ab4ed10edbb09ee1104a8164be))
* focus should focus the container if it is empty. ([0817b4b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0817b4b7a1c333185b3adee38e3a4282128778e4))
* remove GxContextMenuItem::EXCEL_XML_EXPORT ([3de3308](https://github.com/BBj-Plugins/BBjGridExWidget/commit/3de33082d39e1cb9475282bcd33b092388b9af59))
* **js:** transiation add array should be reversed to be in sync with ResultSet ([64f30d8](https://github.com/BBj-Plugins/BBjGridExWidget/commit/64f30d88e98a7bcd9c1690bf5c1dd9bee6dc05f2))


## Features

* add GxColumn `SuppressFiltersToolPanel` option ([0cf67b9](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0cf67b93c0e8abd04f70e5cd5765c79648031fba))
* add GxColumnsToolpanel `SuppressSyncLayoutWithGrid` & `SuppressColumnMove` and `ContractColumnSelection` options ([9ac3d2b](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9ac3d2b51089592112c8d7bd5b331f990faf89f4))
* add GxContextMenuItem `COPY_WITH_GROUP_HEADERS` ([8b639dd](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8b639dd157dcdbc1d8ece3abcefb1f9d9df03e45))
* add GxFiltersToolpanel `SuppressExpandAll` option ([8d6bf43](https://github.com/BBj-Plugins/BBjGridExWidget/commit/8d6bf43449a52c9d41e9c46c5f678a50117215ab))
* add GxFiltersToolpanel `SuppressFilterSearch` & `SuppressSyncLayoutWithGrid` ([196341d](https://github.com/BBj-Plugins/BBjGridExWidget/commit/196341db88cdc0d9ee7a2940f41bc7aeface62ca))
* show context menu `COPY_WITH_GROUP_HEADERS` by default ([c369079](https://github.com/BBj-Plugins/BBjGridExWidget/commit/c369079704fe6e1e30fd696375b4cc717314a733))


## BREAKING CHANGES

* EXCEL_XML_EXPORT has been removed