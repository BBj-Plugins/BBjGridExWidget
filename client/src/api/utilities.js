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
  return typeof $doc !== 'undefined' ? $doc : document;
}

/**
 * Get window 
 * 
 * Get the window instance according to the current BBj env
 * 
 * @return {Object} Window instance
 */
export function gw_getWindow() {
  return typeof $win !== 'undefined' ? $win : window;
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
  return value !== null && value !== undefined ? value : '';
}

/**
 * Get Grid 
 * 
 * Retrieve the grid instance from `window.BBjGridExWidget` array 
 * 
 * @param {String} id The grid's id
 * 
 * @return {Object|null} The grid's instance ofr null
 */
export function gw_getGrid(id) {
  window.BBjGridExWidget = window.BBjGridExWidget || {};
  return window.BBjGridExWidget[id] || null;
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
  window.BBjGridExWidget = window.BBjGridExWidget || {};
  window.BBjGridExWidget[id] = options;
  
  return gw_getGrid(id);
}