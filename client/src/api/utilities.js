/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@Basis.AgGridComponents.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Get document
 *
 * Get the document instance according to the current BBj env
 *
 * @return {Object} Document instance
 */
export function gw_getDocument() {
  return typeof $doc !== 'undefined' ? $doc : document
}

/**
 * Get window
 *
 * Get the window instance according to the current BBj env
 *
 * @return {Object} Window instance
 */
export function gw_getWindow() {
  return typeof $wnd !== 'undefined' ? $wnd : window
}

/**
 * Escape Value
 *
 * Change null and undefined to empty string
 *
 * @param {*} value
 *
 * @return {String} escaped value
 */
export function gw_escape(value) {
  return value !== null && value !== undefined ? value : ''
}

/**
 * Generate a unique uuid
 * @see https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
export function gw_uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * Get Grid
 *
 * Retrieve the grid instance from `window.BBjGridExWidget` array
 *
 * @param {String} id The grid's id
 *
 * @return {Object|null} The grid's instance ofr null
 * @throws TypeError when the grid instance is not found
 */
export function gw_getGrid(id) {
  window.BBjGridExWidget = window.BBjGridExWidget || {}
  const grid = window.BBjGridExWidget[id] || null

  if (!grid) {
    const registeredGrids = JSON.stringify(Object.keys(window.BBjGridExWidget))
    //getFuncArgs(func).forEach((key, i) => argsObj[key] = args[i]);

    throw new TypeError(
      `\n\n[Grid Not Found] The method asked for non-existent grid instance.
-------------------------------------------------------------------
Required Grid Id : ${id}   
Registered Grids : ${registeredGrids}
`
    )
  }

  return grid
}

/**
 * Add Grid
 *
 * Store a new grid instance by in the `window.BBjGridExWidget` array
 *
 * @param {String} id The grid's id
 * @param {Object} options  The grid's options
 *
 * @return {Object} Stored grid
 */
export function gw_addGrid(id, options) {
  window.BBjGridExWidget = window.BBjGridExWidget || {}
  window.BBjGridExWidget[id] = options

  return gw_getGrid(id)
}
