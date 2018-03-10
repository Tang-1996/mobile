import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { connect } from 'react-redux';

class UniList extends Component {
    showUniversitiesPressed() {
        this.props.fetchUnis();
    }

    unis() {
        return Object.keys(this.props.unis).map( id => this.props.unis[id]);
    }

    render() {
		return (
			<View style={styles.container}>
				<Image source={require('../../static/images/logo.png')} style={styles.logo} />

				<Text style={styles.welcome}>
					Welcome to UniNinja
				</Text>

				<Text style={styles.instructions}>
					Press the button below to fetch and display the available universities.
				</Text>

				<Button text="Show Universities" onPress={ () => this.showUniversitiesPressed() } />

                <ScrollView style={styles.scrollView}>
                    {this.unis().map((uni) => {
                        return (
                            <View key={uni.id}>
                                <Text style={{ fontWeight: '700', fontSize: 16, color: 'white' }}>{uni.name}</Text>
                            </View>
                        );
                    })}
                </ScrollView>
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
		marginTop: 60,
		width: 60,
		height: 60,
	},
	welcome: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#F5FCFF',
		margin: 30,
	},
	instructions: {
		fontSize: 18,
		textAlign: 'center',
		color: '#CCCCCC',
		marginBottom: 10,
		padding: 20,
	},
    scrollView: {
        marginTop: 24
    }
});

function mapStateToProps(state) {
    return { unis: state.unis }
}

export default connect(mapStateToProps)(UniList);
