import gql from 'graphql-tag'
import { SERVER_API_ENDPOINT, LOCAL_API_ENDPOINT, API_KEY } from './constants'

const debugModeEnabled = false

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

export const uniInfoGQL = () => {
  return gql`
    query ($pubukprn: String!) {
      university(pubukprn: $pubukprn) {
        name
        pubukprn
        url
        unionURL
        color
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

export const urlForUniLogo = (uniURL) => {
  return `https://logo.clearbit.com/${uniURL}`
}
