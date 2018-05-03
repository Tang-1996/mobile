import React, { Component } from 'react'

// Redux imports
import { connect } from 'react-redux'
import { fetchUniLookupTable } from '../actions/actions'

// ApolloClient imports
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

import * as Api from '../lib/Api'

// Component imports
import MainTabBarNavigator from '../components/MainTabBarNavigator'

// @see: https://github.com/facebook/react-native/issues/9599
if (typeof global.self === 'undefined') {
  global.self = global
}

const link = new HttpLink({
  uri: Api.getEndpoint(),
  headers: {
    'Authorization': 'Basic ' + Api.getApiKey()
  }
})

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

class AppContainer extends Component {
  componentDidMount () {
    const { fetchList } = this.props

    // Fetch the latest copy of the uni lookup table when the app launches.
    fetchList()
  }

  render () {
    return (
      <ApolloProvider client={client}>
        <MainTabBarNavigator {...this.props} />
      </ApolloProvider>
    )
  }
}

const mapStateToProps = state => {
  return { }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchList: () => dispatch(fetchUniLookupTable())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
