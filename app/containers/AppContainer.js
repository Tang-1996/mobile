import React, { Component } from 'react';

import { connect } from 'react-redux';

// ApolloClient imports.
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Api from '../lib/graphql-api';

import MainTabBar from '../components/MainTabBar';

const client = new ApolloClient({
  link: new HttpLink({ uri: Api.host }),
  cache: new InMemoryCache()
});

class AppContainer extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <MainTabBar {...this.props} />
            </ApolloProvider>
        );
    }
}

export default connect()(AppContainer);
