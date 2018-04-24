import gql from 'graphql-tag'
import { store } from '../../index'
import { SERVER_API_ENDPOINT, LOCAL_API_ENDPOINT, API_KEY } from './constants'

class Api {
  static get endpoint () {
    if (store === undefined) {
      return LOCAL_API_ENDPOINT
    }

    let debugModeEnabled = store.getState().debugModeEnabled

    if (debugModeEnabled) {
      return LOCAL_API_ENDPOINT
    } else {
      return SERVER_API_ENDPOINT
    }
  }

  static get key () {
    return API_KEY
  }

  // GraphQL Queries

  static get allUnisGqlQuery () {
    return gql`
          query {
              universities {
                  name
                  pubukprn
              }
          }
      `
  }
}

export default Api
