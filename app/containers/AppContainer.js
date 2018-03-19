import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

// ApolloClient imports.
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Api from '../lib/graphql-api';

import MainTabBar from './MainTabBar';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
    return { }
}, mapDispatchToProps)(AppContainer);
