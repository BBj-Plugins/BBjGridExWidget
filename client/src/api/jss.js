/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export function gw_setStyle(selector, rules) {
  jss.forDocument(gw_getDocument()).set(selector, JSON.parse(rules));
}

export function gw_removeStyle(selector) {
  jss.forDocument(gw_getDocument()).remove(selector);
}
