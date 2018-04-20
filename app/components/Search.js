import React, { Component } from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import { Button, SearchBar } from 'react-native-elements';

import { connect } from 'react-redux';

import { favouriteUni } from '../actions/actions';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { searchBoxText: '' };
    }

    render() {
        const { favouriteUni } = this.props;

		return (
            <View style={styles.container}>
                <Image source={require('../../static/images/logo.png')} style={styles.logo} />

                <Text style={styles.welcome}>
                    Welcome to UniNinja
                </Text>

                <Text style={styles.instructions}>
                    Browse for universities by name using the input box below.
                </Text>

                <SearchBar
                    onChangeText={(text) => this.setState({text})}
                    onClearText={() => this.setState({searchBoxText: ''})}
                    containerStyle={styles.searchBox}
                    inputStyle={styles.searchBoxInput}
                    placeholderTextColor='rgba(250,250,250, 0.6)'
                    icon={{ color: 'white' }}
                    clearIcon={{ color: 'white', name: 'clear' }}
                    placeholder='Type Here' />

                <Button
                    text="Find Universities"
                    onPress={() => favouriteUni('1234') }
                    style={styles.searchButton}/>
            </View>
        );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: '#1a64db',
        alignItems: 'center'
	},
    logo: {
        marginTop: 35,
        width: 80,
        height: 80
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
        padding: 20,
    },
    searchBox: {
        width: '90%',
        marginTop: 20,
        height: 50,
        borderRadius: 8,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        backgroundColor: 'rgba(255,255,255,0.3)'
    },
    searchBoxInput: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'transparent'
    },
    searchButton: {
        marginTop: 30,
    }
});

const mapStateToProps = state => {
    return { }
}

const mapDispatchToProps = dispatch => {
    return {
        favouriteUni: pubukprn => dispatch(favouriteUni(pubukprn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
