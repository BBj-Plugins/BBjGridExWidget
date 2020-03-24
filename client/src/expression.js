/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Build a js function from the given expression
 *
 * @param {String} expression
 *
 * @return {Function}
 */
export function gw_compileExpression(expression) {
  // Check to see if the expression cache has been initialized
  if (typeof gw_compileExpression.expressionCache == 'undefined') {
    gw_compileExpression.expressionCache = []
  }

  // check cache first
  if (gw_compileExpression.expressionCache[expression]) {
    return gw_compileExpression.expressionCache[expression]
  }

  // if not found in cache, return the function
  let functionBody = null
  // if the expression has the 'return' word in it, then use as is,
  // if not, then wrap it with return and ';' to make a function
  if (expression.indexOf('return') >= 0) {
    functionBody = expression
  } else {
    functionBody = 'return ' + expression + ';'
  }

  const theFunction = new Function(
    'x, ctx, oldValue, newValue, value, node, data, colDef, rowIndex, api, columnApi, getValue, column, columnGroup',
    functionBody
  )

  // store in cache
  gw_compileExpression.expressionCache[expression] = theFunction

  return theFunction
}

/**
 * Build and executed an expression with the passed params
 *
 * @param {String} expression
 * @param {Object} params
 *
 * @return mixed
 */
export function gw_executeExpression(expression, params) {
  try {
    const javaScriptFunction = gw_compileExpression(expression)
    // the params don't have all these values, rather we add every possible
    // value a params can have, which makes whatever is in the params available.
    const result = javaScriptFunction(
      params.value,
      params.context,
      params.oldValue,
      params.newValue,
      params.value,
      params.node,
      params.data,
      params.colDef,
      params.rowIndex,
      params.api,
      params.columnApi,
      params.getValue,
      params.column,
      params.columnGroup
    )
    return result
  } catch (e) {
    // the expression failed, which can happen, as it's the client that
    // provides the expression. so print a nice message
    console.log('Processing of the expression failed')
    console.log('Expression = ' + expression)
    console.log('Params =', params)
    console.log('Exception = ' + e)
    return null
  }
}
