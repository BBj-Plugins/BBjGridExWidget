/*
 * This file is part of the BBjGridExWidget plugin.
 * (c) Basis Europe <eu@basis.cloud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import autocomplete from 'autocompleter'
import template from 'lodash-es/template'
import { gw_parseNode } from 'events/utilities'
/**
 * An autocomplete cell editor written specifically to BBjGridExWidget
 *
 * @author Hyyan Abo Fakher
 */
class SuggestionEditor {
  /**
   * Initialize the component
   *
   * @param {Object} params
   *
   * @return void
   */
  init(params) {
    const pattern = params.textPattern || null
    const required = params.textRequired || false
    const title = params.textTitle || null
    const debounceWaitMs = params.debounceWaitMs || 250

    let startValue

    this._focusAfterAttached = params.cellStartedEdit
    if (this._focusAfterAttached) {
      const keyPressBackspaceOrDelete =
        params.keyPress == 32 || params.keyPress == 46 // space // delete

      if (keyPressBackspaceOrDelete) {
        startValue = ''
      } else if (params.charPress) {
        startValue = params.charPress
      } else {
        startValue = params.value
        if (params.keyPress != 113) {
          //F2
          this._highlightAllOnFocus = true
        }
      }
    } else {
      startValue = params.value
    }

    this._params = params

    this._gui = document.createElement('div')
    this._gui.className = 'autocompleteInputWrapper ag-cell-edit-wrapper'
    this._gui.tabIndex = '0'
    this._gui.innerHTML = /* html */ `
    <div class="ag-cell-editor ag-labeled ag-label-align-left ag-text-field ag-input-field">
      <div class="ag-wrapper ag-input-wrapper ag-text-field-input-wrapper">
      </div>
    </div>
    `

    // input
    this._input = document.createElement('input')
    this._input.className =
      'autocompleteInputWrapper__input ag-cell-edit-input ag-input-field-input ag-text-field-input'
    this._input.type = 'text'
    this._input.value = startValue
    this._input.tabIndex = 0

    this._gui.querySelector('.ag-input-wrapper').appendChild(this._input)

    if (pattern !== null) {
      this._input.setAttribute('pattern', pattern)
    }

    if (required === true) {
      this._input.setAttribute('required', 'required')
    }

    if (title !== null && title !== 'default') {
      this._input.title = title
    }

    this._onChange = this._onChange.bind(this)

    this._input.addEventListener('input', this._onChange)
    this._input.addEventListener('change', this._onChange)

    // setup the autocomplete component
    this._renderItemTemplate = this._params.itemTemplate
      ? template(this._params.itemTemplate)
      : ''
    this._renderGroupTemplate = this._params.groupTemplate
      ? template(this._params.groupTemplate)
      : ''

    console.log(params)
    this._autocomplete = autocomplete({
      input: this._input,
      debounceWaitMs: debounceWaitMs,
      // without this option enabled , the list wont be closed in GUI
      preventSubmit: true,
      fetch: this._onAutocompleteFetch.bind(this),
      onSelect: this._onAutocompleteSelect.bind(this),
      renderGroup: this._onAutocompleteRenderGroup.bind(this),
      render: this._onAutocompleteRenderItem.bind(this),
      customize: this._onAutocompleteCustomize.bind(this),
      emptyMsg: this._params.emptyMessage || null,
      minLength: this._params.minLength || 2,
      showOnFocus: this._params.showOnFocus || false,
      className: params.api.gridOptionsWrapper.eGridDiv.className.endsWith(
        'dark'
      )
        ? 'dark'
        : 'light',
    })
  }

  /**
   * Return the DOM element of the component, this is what the grid puts into the cell
   *
   * @return {HTMLElement}
   */
  getGui() {
    return this._gui
  }

  /**
   * Gets called once after GUI is attached to DOM.
   *
   * Make sure container is always focused to listen to key changes
   */
  afterGuiAttached() {
    if (this._highlightAllOnFocus) {
      this._input.select()
    } else {
      if (this._focusAfterAttached) {
        this.focusIn()
      }
    }
  }

  /**
   * Get The component value
   *
   * @return {Number}
   */
  getValue() {
    return this._input.value
  }

  /**
   * If doing full row edit, then gets called when tabbing into the cell.
   */
  focusIn() {
    this._input.focus()
  }

  /**
   * Gets called once when editing is finished (eg if enter is pressed).
   *
   * @returns {Boolean} true when the result of the edit will be ignored. false otherwise
   */
  isCancelAfterEnd() {
    const allowCustomValues = this._params.allowCustomValues || false
    let isValid = this._validateInput(this._input)

    if (isValid && allowCustomValues === false && this._lastFetchedData) {
      const filteredItems = this._lastFetchedData.filter(
        x => x.value === this._input.value
      )
      isValid = filteredItems.length === 1
    }

    return !isValid
  }

  /**
   * Gets called when the component is destroyed.
   *
   * Clear the registered event listeners and destroy the autocomplete
   */
  destroy() {
    this._input.removeEventListener('input', this._onChange)
    this._input.removeEventListener('change', this._onChange)
    this._autocomplete.destroy()
  }

  /**
   * This method will be called to prepare suggestions and then pass them to autocomplete.
   *
   * @param {String} text the text in the input field
   * @param {Function} update a callback function that must be called after suggestions are prepared
   *
   * @returns {Boolean} false when the request is ignored , false otherwise
   */
  _onAutocompleteFetch(text, update) {
    const suppressSuggestionOnInvalidInput =
      this._params.suppressSuggestionOnInvalidInput || false
    const isValid = this._validateInput(this._input)

    if (suppressSuggestionOnInvalidInput && !isValid) {
      return false
    }

    const id = this._params.eventId

    document.addEventListener(id, event => {
      this._lastFetchedData = event.detail
      update(event.detail)
    })

    window.basisDispatchCustomEvent(this._params.eGridCell, {
      type: 'gw.suggestion',
      detail: JSON.stringify({
        id,
        text,
        column: this._params.colDef.field,
        row: gw_parseNode(
          this._params.node,
          this._params.api.gridOptionsWrapper.gridOptions.context
        ),
      }),
    })

    return true
  }

  /**
   * This method will be called when user choose an item in autocomplete.
   *
   * @param {Object} item The selected item
   */
  _onAutocompleteSelect(item) {
    this._input.value = item.value
  }

  /**
   * This overrides the rendering function of autocomplete items.
   *
   * It will be called for each suggestion
   *
   * @param {Object} item suggestion object
   * @param {String} currentValue The current input field value
   *
   * @returns {HTMLElement}
   */
  _onAutocompleteRenderItem(item, currentValue) {
    const div = document.createElement('div')
    div.className = 'suggestion-item'

    if (this._renderItemTemplate) {
      div.innerHTML = this._renderItemTemplate({
        item,
        currentValue,
      })
    } else {
      div.innerHTML = item.label
    }

    return div
  }

  /**
   * This overrides the rendering function of autocomplete groups.
   *
   * It will be called for each group
   *
   * @param {String} groupName The group name
   * @param {String} currentValue The current input field value
   *
   * @returns {HTMLElement}
   */
  _onAutocompleteRenderGroup(groupName, currentValue) {
    const div = document.createElement('div')
    div.className = 'suggestion-group'

    if (this._renderGroupTemplate) {
      div.innerHTML = this._renderGroupTemplate({ groupName, currentValue })
    } else {
      div.innerHTML = groupName
    }

    return div
  }

  /**
   * Hook on the autocomplete container render and change the width and the
   * height according to the options
   *
   * @param {HTMLElement} input
   * @param {HTMLElement} inputRect
   * @param {HTMLElement} container
   * @param {String} maxHeight
   */
  // eslint-disable-next-line no-unused-vars
  _onAutocompleteCustomize(input, inputRect, container, maxHeight) {
    if (this._params.width) {
      container.style.width = `${this._params.width}px`
    }

    if (this._params.height) {
      container.style.height = `${this._params.height}px`
    }
  }

  /**
   * List to the input changes and validate it
   *
   * @param {Event} The event object
   *
   * @returns {Boolean} true when valid , false otherwise
   */
  _onChange(event) {
    return this._validateInput(event.target)
  }

  /**
   * Do validate the given input element
   *
   * @param {HTMLInputElement} input input element
   *
   * @return {Boolean} true when valid , false otherwise
   */
  _validateInput(input) {
    const isValid = input.checkValidity()

    if (!isValid) {
      input.classList.add('autocomplete-input-error')
      input.classList.remove('autocomplete-input-success')
    } else {
      input.classList.remove('autocomplete-input-error')
      input.classList.add('autocomplete-input-success')
    }

    return isValid
  }
}

export default SuggestionEditor
