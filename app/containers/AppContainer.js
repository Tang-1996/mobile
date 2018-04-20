import React, { Component } from 'react';

import { connect } from 'react-redux';

// ApolloClient imports.
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

import Api from '../lib/graphql-api';

import MainTabBar from '../components/MainTabBar';

import { fetchUniLookupTable } from "../actions/actions";

// Set up the HTTP Basic Authentication method.
const auth = setContext((_, { headers }) => {
    return {
        headers: headers.append('Authorization', 'Basic ' + Api.key)
    }
});

const client = new ApolloClient({
    link: auth.concat(createHttpLink({ uri: Api.host })),
    cache: new InMemoryCache()
});

class AppContainer extends Component {
    componentDidMount() {
        const { fetchList } = this.props;

        // Fetch the latest copy of the uni lookup table.
        fetchList();
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <MainTabBar {...this.props} />
            </ApolloProvider>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
