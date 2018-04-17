import React, { Component } from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import { connect } from 'react-redux';

import Search from './Search';
import { selectTab } from "../actions/actions";

class MainTabBar extends Component {
    render() {
        const tabBarIconsPath = "../../static/images/tab_icons/";

        const { selectTab } = this.props;

		return (
            <TabNavigator>
                <TabNavigator.Item
                    title="Universities"
                    selected={this.props.selectedTab == 0}
                    renderIcon={ () => <Image source={require(tabBarIconsPath + "universities.png")} style={styles.tabBarIconImage} /> }
                    renderSelectedIcon={ () => <Image source={require(tabBarIconsPath + "universities_selected.png")} style={styles.tabBarIconImage} /> }
                    onPress={ () => selectTab(0) } >
                    <Search {...this.props} />
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="My List"
                    selected={this.props.selectedTab == 1}
                    renderIcon={ () => <Image source={require(tabBarIconsPath + "mylist.png")} style={styles.tabBarIconImage} /> }
                    renderSelectedIcon={ () => <Image source={require(tabBarIconsPath + "mylist_selected.png")} style={styles.tabBarIconImage} /> }
                    onPress={ () => selectTab(1) } >
                    <Text>My List</Text>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="Settings"
                    selected={this.props.selectedTab == 2}
                    renderIcon={ () => <Image source={require(tabBarIconsPath + "settings.png")} style={styles.tabBarIconImage} /> }
                    renderSelectedIcon={ () => <Image source={require(tabBarIconsPath + "settings_selected.png")} style={styles.tabBarIconImage} /> }
                    onPress={ () => selectTab(2) } >
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

const mapStateToProps = state => {
    return { selectedTab: state.selectTab };
}

const mapDispatchToProps = dispatch => {
    return {
        selectTab: index => dispatch(selectTab(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTabBar);
