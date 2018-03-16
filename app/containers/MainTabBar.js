import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import TabNavigator from 'react-native-tab-navigator';

import { connect } from 'react-redux';

import UniList from './UniList';

class MainTabBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'universities'
        };
    }

    render() {
        const tabBarIconsPath = "../../static/images/tab_icons/";

		return (
            <TabNavigator>
                <TabNavigator.Item
                    title="Universities"
                    selected={this.state.selectedTab === "universities"}
                    renderIcon={ () => <Image source={require(tabBarIconsPath + "universities.png")} style={styles.tabBarIconImage} /> }
                    renderSelectedIcon={ () => <Image source={require(tabBarIconsPath + "universities_selected.png")} style={styles.tabBarIconImage} /> }
                    onPress={ () => this.setState({ selectedTab: "universities" }) }>
                    <UniList {...this.props} />
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="My List"
                    selected={this.state.selectedTab === "mylist"}
                    renderIcon={ () => <Image source={require(tabBarIconsPath + "mylist.png")} style={styles.tabBarIconImage} /> }
                    renderSelectedIcon={ () => <Image source={require(tabBarIconsPath + "mylist_selected.png")} style={styles.tabBarIconImage} /> }
                    onPress={ () => this.setState({ selectedTab: "mylist" }) }>
                    <Text>My List</Text>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="Settings"
                    selected={this.state.selectedTab === "settings"}
                    renderIcon={ () => <Image source={require(tabBarIconsPath + "settings.png")} style={styles.tabBarIconImage} /> }
                    renderSelectedIcon={ () => <Image source={require(tabBarIconsPath + "settings_selected.png")} style={styles.tabBarIconImage} /> }
                    onPress={ () => this.setState({ selectedTab: "settings" }) }>
                    <Text>Settings</Text>
                </TabNavigator.Item>
            </TabNavigator>
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
    },
    tabBarIconImage: {
        height: 26,
        width: 26
    }
});

function mapStateToProps(state) {
    return { unis: state.unis }
}

export default connect(mapStateToProps)(MainTabBar);
