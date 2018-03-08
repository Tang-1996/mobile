import React, { Component } from 'react';
import {
	Image,
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { Button } from 'react-native-elements';

type Props = {};
export default class App extends Component<Props> {
	constructor(props) {
		super(props);
		this.showUniversityPressed = this.showUniversityPressed.bind(this);
	}

	showUniversityPressed = (event) => {

	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={require('../static/images/logo.png')} style={styles.logo} />

				<Text style={styles.welcome}>
					Welcome to UniNinja
				</Text>

				<Text style={styles.instructions}>
					Press the button below to display the name of the first uni!
				</Text>

				<Button buttonStyle={styles.buttonStyle} text="Show University" onPress={this.showUniversityPressed} />
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
	buttonStyle: {
		
	}
});
