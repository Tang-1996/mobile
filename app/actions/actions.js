import * as types from './types'
import Api from '../lib/graphql-api'

export function favouriteUni (pubukprn) {
  return {
    type: types.FAVOURITE_UNI,
    pubukprn
  }
}

// Uni Lookup Table

export function requestUniLookupTable () {
  return {
    type: types.REQUEST_UNI_LOOKUP_TABLE
  }
}

export function receiveUniLookupTable (lookupTable) {
  return {
    type: types.RECEIVE_UNI_LOOKUP_TABLE,
    lookupTable
  }
}

export function fetchUniLookupTable () {
  return function (dispatch) {
    dispatch(requestUniLookupTable())

    // We are now in the 'fetching' state.

    const query = '?query=query%20Query%20%7B%0A%20%20universities%20%7B%0A%20%20%20%20name%0A%20%20%20%20pubukprn%0A%20%20%7D%0A%7D'
    const url = Api.endpoint + query

    return fetch(url, { // eslint-disable-line
      headers: {
        'Authorization': 'Basic ' + Api.key
      }
    }).then(
      response => {
        if (response.ok) {
          response.json().then(json => {
            dispatch(receiveUniLookupTable(json.data.universities))
          })
        }
      }, error => {
        console.log('ERROR: ', error)
      }
    )
  }
}

export function toggleDebugMode () {
  return {
    type: types.TOGGLE_DEBUG_MODE
  }
}

export function selectTab (index) {
  return {
    type: types.SELECT_TAB,
    index
  }
}
