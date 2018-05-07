import * as types from './types'
import Api from '../lib/graphql-api'

export function fetchUnis () {
  return (dispatch, getState) => {
  // TODO: Perform a GraphQL request here.

    return Api.get(`/unis`).then(response => {
      console.log(response)
      dispatch(setFetchedUnis(response))
    }).catch((exception) => {
      console.log(exception)
    })
  }
}

export function setFetchedUnis ({ unis }) {
  return { type: types.FETCH_UNIS, unis }
}
