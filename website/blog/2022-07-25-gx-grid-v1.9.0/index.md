---
slug: gx-grid-v1.9.0
title: BBjGridExWidget v1.9.0
authors: [hyyan]
tags: [release, changelog]
---

## Bug Fixes

* !ERROR=32 (BBj Custom Object Stack Overflow) `getSuppressWebDebouncing()`. ([1350a60](https://github.com/BBj-Plugins/BBjGridExWidget/commit/1350a6098af3e382501c4092960e1bf5fd7bf286))
* `GxExecutor` does not check if the grid is destroyed before executing code. ([9b33eab](https://github.com/BBj-Plugins/BBjGridExWidget/commit/9b33eabc2d729897f9e62a28d3bda35b1b98f00c))


## Code Refactoring

* rename `BBjGridExWidget.suppressBuiDebouncing` to `BBjGridExWidget.suppressWebDebouncing`. ([0252c22](https://github.com/BBj-Plugins/BBjGridExWidget/commit/0252c2277267326b846fb2d9cf986859d7f0f9b8))


## Features

* add `BBjGridExWidget:preferAsyncExecution`. ([ea432eb](https://github.com/BBj-Plugins/BBjGridExWidget/commit/ea432eba6f0303dd0a5a66097bd48a9cb7e75c89)). When enabled then the executor will try to executes the JavaScript in the
BBjHtmlView and returns immediately without waiting for a return value
from the client. Enabling this option might boost the performance of the grid.
By default this option is turned off

* add `GxColumn::setMask` method. ([294a513](https://github.com/BBj-Plugins/BBjGridExWidget/commit/294a513d23b5da4299c52513be356561e31eccbe))


## BREAKING CHANGES

* `BBjGridExWidget.suppressBuiDebouncing` is deprecated.
Use `BBjGridExWidget.suppressWebDebouncing` instead
* `DefaultStringsMask`, `DefaultNumbersMask`, `DefaultDatesMask`,`DefaultTimesMask` and `DefaultTimestamps` are deprecated use `Mask` instated.
* `setColumnMask` is deprecated use `setMask` instead.