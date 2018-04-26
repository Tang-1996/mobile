import React, { Component } from 'react'
import {StyleSheet, SafeAreaView, StatusBar, View, Text} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import FontAwesome, { Icons } from 'react-native-fontawesome'

// Redux imports
import { selectTab } from '../actions/actions'
import { connect } from 'react-redux'

// Component imports
import Search from './Search'
import MyList from './MyList'
import Settings from './Settings'

class MainTabBar extends Component {
  headerTitleForSelectedTab (selectedTab) {
    switch (selectedTab) {
      case 0:
        return 'Universities'
      case 1:
        return 'My List'
      default:
        return 'Settings'
    }
  }

  render () {
    const { selectTab, selectedTab } = this.props

    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle='light-content' />

        <View style={styles.searchBarContainer}>
          <Text style={styles.headerTitleText}>{this.headerTitleForSelectedTab(selectedTab)}</Text>
        </View>

        <TabNavigator tabBarStyle={styles.tabBar} >
          <TabNavigator.Item
            title='Universities'
            tabBarOptions={styles.tabBar}
            selected={this.props.selectedTab === 0}
            renderIcon={() => <FontAwesome style={styles.tabBarIconImage}>{Icons.university}</FontAwesome>}
            renderSelectedIcon={() => <FontAwesome style={styles.tabBarIconImageSelected}>{Icons.university}</FontAwesome>}
            titleStyle={styles.tabStyle}
            selectedTitleStyle={styles.tabStyleSelected}
            onPress={() => selectTab(0)}>
            <Search {...this.props} />
          </TabNavigator.Item>

          <TabNavigator.Item
            title='My List'
            selected={this.props.selectedTab === 1}
            renderIcon={() => <FontAwesome style={styles.tabBarIconImage}>{Icons.list}</FontAwesome>}
            renderSelectedIcon={() => <FontAwesome style={styles.tabBarIconImageSelected}>{Icons.list}</FontAwesome>}
            titleStyle={styles.tabStyle}
            selectedTitleStyle={styles.tabStyleSelected}
            onPress={() => selectTab(1)} >
            <MyList {...this.props} />
          </TabNavigator.Item>

          <TabNavigator.Item
            title='Settings'
            selected={this.props.selectedTab === 2}
            renderIcon={() => <FontAwesome style={styles.tabBarIconImage}>{Icons.cog}</FontAwesome>}
            renderSelectedIcon={() => <FontAwesome style={styles.tabBarIconImageSelected}>{Icons.cog}</FontAwesome>}
            titleStyle={styles.tabStyle}
            selectedTitleStyle={styles.tabStyleSelected}
            onPress={() => selectTab(2)} >
            <Settings {...this.props} />
          </TabNavigator.Item>
        </TabNavigator>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#12438f'
  },
  searchBarContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#12438f',
    justifyContent: 'center'
  },
  headerTitleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tabBar: {
    backgroundColor: '#12438f'
  },
  tabBarIconImage: {
    color: 'rgb(122,122,159)',
    fontSize: 24
  },
  tabBarIconImageSelected: {
    color: 'rgb(122,186,255)',
    fontSize: 24
  },
  tabStyle: {
    color: 'rgb(122,122,159)'
  },
  tabStyleSelected: {
    color: 'rgb(122,186,255)'
  }
})

const mapStateToProps = state => {
  return { selectedTab: state.selectedTab }
}

const mapDispatchToProps = dispatch => {
  return {
    selectTab: index => dispatch(selectTab(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTabBar)
