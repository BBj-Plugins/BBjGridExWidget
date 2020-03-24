/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * An improved tooltip component which supports HTML and works behaves the same in both GUI and BUI
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
    const tooltipField = params.colDef.tooltipField
    const tooltipValueGetter = params.colDef.tooltipValueGetter
    const theme = params.api.gridCore.eGridDiv.className.endsWith('dark')
      ? 'gw-tooltip-dark'
      : 'gw-tooltip-light'
    console.log(
      theme,
      params.api.gridCore.eGridDiv.className,
      params.api.gridCore.eGridDiv.className.endsWith('dark')
    )
    eGui.classList.add('gw-tooltip', theme)
    eGui.innerHTML = tooltipField
      ? tooltipField
      : tooltipValueGetter
      ? tooltipValueGetter({
          ...params,
          ...{ data: params.api.getDisplayedRowAtIndex(params.rowIndex).data },
        })
      : ''
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
