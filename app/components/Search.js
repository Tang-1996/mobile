import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { connect } from 'react-redux';

// GraphQL and API imports
import { graphql } from 'react-apollo';
import Api from '../lib/graphql-api';

import { favouriteUni } from '../actions/actions'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render() {
        const {favouriteUniTest} = this.props;
		return (
            <View style={styles.container}>
                <TextInput
                    style={styles.searchBox}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />

                <Button
                    text="Favourite Uni"
                    onPress={() => favouriteUniTest('13254643')} />
            </View>
        );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: '#1a64db',
	},
    searchBox: {
        color: 'white',
        textAlign: 'center',
        height: 50,
        marginTop: 50,
        marginRight: 12,
        marginLeft: 12,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.3)'
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
