import React, { Component } from 'react';
import {View, StyleSheet, Switch, Text} from 'react-native';
import FontAwesome, { Icons } from "react-native-fontawesome";
import Api from '../lib/graphql-api';

import { connect } from 'react-redux';

import {fetchUniLookupTable, toggleDebugMode} from '../actions/actions';

class Settings extends Component {
    // unis() {
    //     // TODO: This isn't so much an urgent change, but React has a key prop that components should be uniquely identified by, which makes sense to use over the id prop used here.
    //     // return Object.keys(this.props.unis).map( id => this.props.unis[id]);
		// return []
    // }

    render() {
    	const { debugModeEnabled, toggleDebugMode, fetchUniLookupTable } = this.props;

    	console.log(this.props);

		return (
			<View style={styles.container}>
                <FontAwesome style={styles.logo}>{Icons.cog}</FontAwesome>

				<View style={styles.debugModeContainer}>
					<Text>Debug Mode {debugModeEnabled ? 'Enabled' : 'Disabled'}</Text>
					<Text>{Api.host}</Text>
                    <Switch
						value={debugModeEnabled}
						onValueChange={() => {
							toggleDebugMode();
							fetchUniLookupTable();
                        }}
					/>
				</View>

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
    debugModeContainer: {
        marginTop: 24,
    }
});

const mapStateToProps = state => {
    return { debugModeEnabled: state.debugModeEnabled };
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDebugMode: () => dispatch(toggleDebugMode()),
		fetchUniLookupTable: () => dispatch(fetchUniLookupTable())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);