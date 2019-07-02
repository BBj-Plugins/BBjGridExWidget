/*
* This file is part of the BBjGridExWidget plugin.
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import 'expose-loader?jss!jss/jss.js';
import {gw_getDocument} from "./utilities"

/**
 * Formate the css selector 
 * 
 * Check if the css selector starts with dot , if not add one and return the 
 * formatted name 
 * 
 * @param {*} selector 
 */
function formatSelector(selector){
  return selector.startsWith(".") ? selector : `.${selector}`;
}

/**
 * Add new style 
 * 
 * Add new style to the document 
 * 
 * @param {String} selector css selector
 * @param {String} rules Json string for an array of rules
 */
export function gw_setStyle(selector, rules) {
  jss.forDocument(gw_getDocument()).set(formatSelector(selector), JSON.parse(rules));
}

/**
 * Remove style
 * 
 * Remove added style from thes document 
 * 
 * @param {String} selector css selector
 */
export function gw_removeStyle(selector) {
  jss.forDocument(gw_getDocument()).remove(formatSelector(selector));
}
