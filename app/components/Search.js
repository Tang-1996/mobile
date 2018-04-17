import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';

import { connect } from 'react-redux';

import { favouriteUni } from '../actions/actions'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { searchBoxText: '' };
    }

    render() {
        const {favouriteUniTest} = this.props;
		return (
            <View style={styles.container}>
                <Image source={require('../../static/images/logo.png')} style={styles.logo} />

                <SearchBar
                    onChangeText={(text) => this.setState({text})}
                    onClearText={() => this.setState({searchBoxText: ''})}
                    containerStyle={styles.searchBox}
                    inputStyle={styles.searchBoxInput}
                    placeholderTextColor='rgba(250,250,250, 0.6)'
                    icon={{ color: 'white' }}
                    clearIcon={{ color: 'white', name: 'clear' }}
                    placeholder='Type Here...' />

                <Button
                    text="Find Universities"
                    onPress={() => favouriteUniTest('13254643')}
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
        marginTop: 45,
        width: 60,
        height: 60
    },
    searchBox: {
        width: '90%',
        marginTop: 35,
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
        favouriteUniTest: pubukprn => dispatch(favouriteUni(pubukprn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
