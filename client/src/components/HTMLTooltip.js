/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * An improved tooltip component which supports HTML and behaves the same in both GUI and BUI
 *
 * @author Hyyan Abo Fakher
 */
class HTMLTooltip {
  /**
   * Construct the component
   *
   * @param {Object} params the tooltip component params
   */
  init(params) {
    const eGui = (this.eGui = document.createElement('div'))
    const tooltipValueGetter = params.colDef.tooltipValueGetter
    const isHeader = params.rowIndex === undefined
    const isGroupedHeader = isHeader && !!params.colDef.children
    console.log(params)
    // eslint-disable-next-line no-prototype-builtins
    const data =
      !isHeader && !isGroupedHeader
        ? params.api.getDisplayedRowAtIndex(params.rowIndex).data
        : null
    const theme = params.api.gridOptionsWrapper.eGridDiv.className.endsWith(
      'dark'
    )
      ? 'gw-tooltip-dark'
      : 'gw-tooltip-light'
    const tooltipField = params.colDef.tooltipField
      ? // eslint-disable-next-line no-prototype-builtins
        data && data.hasOwnProperty(params.colDef.tooltipField)
        ? data[params.colDef.tooltipField]
        : null
      : null

    const passedParams = {
      ...params,
      ...{ data },
      ...{ isHeader, isGroupedHeader, tooltipField },
    }

    eGui.classList.add('gw-tooltip', theme)
    eGui.innerHTML =
      isHeader || isGroupedHeader
        ? params.value
        : tooltipField
        ? tooltipField
        : tooltipValueGetter
        ? tooltipValueGetter(passedParams)
        : params.value
  }

  /**
   * Get the gui Instance
   *
   * @return {HTMLElement}
   */
  getGui() {
    return this.eGui
  }
}

export default HTMLTooltip
