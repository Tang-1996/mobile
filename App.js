import React, { Component } from 'react';
import {
	Button,
	Image,
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
	showUniversityPressed(event) {
		console.log("Show university");
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={require('./static/images/logo.png')} style={styles.logo} />

				<Text style={styles.welcome}>
					Welcome to UniNinja
				</Text>

				<Text style={styles.instructions}>
					Press the button below to display the name of the first uni!
				</Text>

				<Button onPress={this.showUniversityPressed} title="Show University" color="#F5FCFF" />
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
		textAlign: 'center',
		color: '#F5FCFF',
		margin: 30,
	},
	instructions: {
		textAlign: 'center',
		color: '#BBBBBB',
		marginBottom: 10,
	},
});
