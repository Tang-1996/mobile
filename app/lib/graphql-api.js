import gql from 'graphql-tag'
import { SERVER_API_ENDPOINT, LOCAL_API_ENDPOINT, API_KEY } from './constants'

const debugModeEnabled = true

export const getEndpoint = () => {
  if (debugModeEnabled) {
    return LOCAL_API_ENDPOINT
  } else {
    return SERVER_API_ENDPOINT
  }
}

export const getApiKey = () => {
  return API_KEY
}

export const allUnisQueryGQL = () => {
  return gql`
    query {
        universities {
            name
            pubukprn
        }
    }
  `
}

export const uniInfoByPubukprnGQL = (pubukprn) => {
  return gql`
    query {
      university($pubukprn: String!) {
        name
        url
        unionURL
        color
        courses
        lat
        lon
        averageRent
        uniLocationType
        uniType
        nearestTrainStation
      }
    }
  `
}
