import * as types from '../actions/types'
import { combineReducers } from 'redux'

function favouriteUnisReducer (state = [], action) {
  if (action.type === types.FAVOURITE_UNI) {
    const favourites = [...state]

    const indexOfUni = favourites.indexOf(action.uni)

    if (indexOfUni === -1) {
      // The uni is not in the favourites list, so add it.
      favourites.push(action.uni)
    } else {
      // Otherwise, remove the uni from the list.
      favourites.splice(indexOfUni, 1)
    }

    return favourites
  } else {
    return state
  }
}

function uniLookupTableReducer (state = { isFetching: false, fetchFailed: false, lookupTable: {} }, action) {
  switch (action.type) {
    case types.REQUEST_UNI_LOOKUP_TABLE:
      return {...state,
        isFetching: true
      }
    case types.RECEIVE_UNI_LOOKUP_TABLE:
      return {...state,
        isFetching: false,
        fetchFailed: false,
        lookupTable: action.lookupTable
      }
    case types.UNI_LOOKUP_TABLE_NETWORK_ERR:
      return {...state,
        isFetching: false,
        fetchFailed: true
      }
    default:
      return state
  }
}

export default combineReducers({
  favouriteUnis: favouriteUnisReducer,
  uniLookupTable: uniLookupTableReducer
})
