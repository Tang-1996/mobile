import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { connect } from 'react-redux';

// GraphQL and API imports
import { graphql } from 'react-apollo';
import Api from '../lib/graphql-api';

class UniList extends Component {
    render() {
        console.log(this.props);
		return <UniListComponentWithData />;
	}
}

const UniListComponentWithData = graphql(Api.allUnis())(props => <Text>Hello</Text>);

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
