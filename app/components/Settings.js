import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome, { Icons } from "react-native-fontawesome";

import { connect } from 'react-redux';

class UniList extends Component {
    // unis() {
    //     // TODO: This isn't so much an urgent change, but React has a key prop that components should be uniquely identified by, which makes sense to use over the id prop used here.
    //     // return Object.keys(this.props.unis).map( id => this.props.unis[id]);
		// return []
    // }

    render() {
		return (
			<View style={styles.container}>
                <FontAwesome style={styles.logo}>{Icons.cog}</FontAwesome>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#1a64db',
	},
	logo: {
		color: 'white',
		marginTop: 35,
		fontSize: 48
	},
    scrollView: {
        marginTop: 24
    }
});

function mapStateToProps(state) {
    return { unis: state.unis }
}

export default connect(mapStateToProps)(UniList);
