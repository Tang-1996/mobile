import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { connect } from 'react-redux';

// GraphQL and API imports
import { graphql } from 'react-apollo';
import Api from '../lib/graphql-api';

class UniList extends Component {
    render() {
		return <UniListComponentWithData />;
	}
}

const UniListComponentWithData = graphql(Api.allUnis())(props => {
    if (!props.data.loading) {
        console.log(props.data);
        return <Text>{props.data.universities[0].name}</Text>;
    } else {
        return <Text>Loading...</Text>;
    }
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#1a64db',
	}
});

function mapStateToProps(state) {
    return { unis: state.unis }
}

export default connect(mapStateToProps)(UniList);
