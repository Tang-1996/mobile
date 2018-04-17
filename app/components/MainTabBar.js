import React, { Component } from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import { connect } from 'react-redux';

import Search from './Search';

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
                    <Search {...this.props} />
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
    tabBarIconImage: {
        height: 26,
        width: 26
    }
});

function mapStateToProps(state) {
    return state;
    // return { unis: state.unis }
}

export default connect(mapStateToProps)(MainTabBar);
