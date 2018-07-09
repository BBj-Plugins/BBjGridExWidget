/*
* This file is part of the grid project
* (c) Basis Europe <eu@Basis.AgGridComponents.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

/** https://davidwalsh.name/javascript-debounce-function */
export function gw_debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export function gw_getGlobalMeta(field, value, fallback = null , json = false) {

  if (
    gw_meta && gw_meta.hasOwnProperty(field) &&
    gw_meta[field].hasOwnProperty(value)
  ) {

    if (json) {
      try {
        return JSON.parse(gw_meta[field][value]);
      } catch(e) {
        console.warn(`BBjGridExWidget : Faild to parse [${field}][${value}] as JSON`);
        return fallback;
      }
    } else {
      return gw_meta[field][value];
    }
  }

  return fallback;
}

export function gw_getDocument() {
  return typeof $doc !== 'undefined' ? $doc : document;
}

export function gw_getWindow() {
  return typeof $win !== 'undefined' ? $win : window;
}
