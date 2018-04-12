import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { connect } from 'react-redux';

// GraphQL and API imports
import { graphql } from 'react-apollo';
import Api from '../lib/graphql-api';

class UniList extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render() {
		return (
            <View style={styles.container}>
                <TextInput
                    style={styles.searchBox}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
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

function mapStateToProps(state) {
    return { unis: state.unis }
}

export default connect(mapStateToProps)(UniList);
