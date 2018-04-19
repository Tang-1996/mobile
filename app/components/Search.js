import React, { Component } from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import { Button, SearchBar } from 'react-native-elements';

import { connect } from 'react-redux';

import { favouriteUni, fetchUniLookupTable } from '../actions/actions'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { searchBoxText: '' };
    }

    render() {
        const { favouriteUniTest } = this.props;

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
                    onPress={() => fetchUniLookupTable }
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
        width: 60,
        height: 60
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
        marginTop: 10,
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
    return state;
    // return { unis: state.unis }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUniLookupTable: dispatch(fetchUniLookupTable()),
        favouriteUniTest: pubukprn => dispatch(favouriteUni(pubukprn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
