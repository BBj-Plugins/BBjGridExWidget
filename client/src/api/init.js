/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@Basis.AgGridComponents.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { gw_getDocument, gw_addGrid } from "./utilities"
import { gw_parseColumnDefinitions } from "./columns"

export function gw_init(options, license , data) {
  
  // set the license key for enterprise version
  if (agGrid.LicenseManager && license)
    agGrid.LicenseManager.setLicenseKey(license);

  const id              = options.context.id;
  const container       = gw_getDocument().getElementById(id);
  // we make the grid options available as soon as possible 
  const grid            = gw_addGrid(id, {
    container,
    options
  });

  // TODO: use ag grid destroy
  container.innerHTML   = '';

  const parsedOptions   = gw_parseColumnDefinitions(options);
  if(data && data.length > 0) {
    parsedOptions.rowData = data;
  }

  const instance        = new agGrid.Grid(container, parsedOptions);
  grid.instance = instance;
  grid.options = parsedOptions;

  console.log(
    `%c Grid [${id}] settings : `
    , 'background: #222; color: #bada55'
    , parsedOptions
  );
}