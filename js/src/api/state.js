export function gw_setState(state) {
  gw_options.columnApi.setColumnState(state);
}

export function gw_getState() {

  const state = gw_options.columnApi.getColumnState();
  try {
    return JSON.stringify(state);
  } catch (e) {
    console.warn('Failed to parse state', e)
  }
}
