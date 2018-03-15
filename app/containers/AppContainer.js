import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import MainTabBar from './MainTabBar';

class AppContainer extends Component {
    render() {
        return <MainTabBar {...this.props} />;
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
