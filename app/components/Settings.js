import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StackNavigator } from 'react-navigation'

import { connect } from 'react-redux'

class Settings extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Ionicons name={'ios-settings'} style={styles.logo} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1a64db'
  },
  logo: {
    color: 'lightgray',
    marginTop: 45,
    marginBottom: 16,
    fontSize: 42
  }
})

const mapStateToProps = state => {
  return { }
}

const mapDispatchToProps = dispatch => {
  return { }
}

const settings = connect(mapStateToProps, mapDispatchToProps)(Settings)

const SettingsNavigator = StackNavigator(
  {
    Settings: { screen: settings }
  },
  {
    headerMode: 'float',
    navigationOptions: {
      headerTitle: 'Settings',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'rgb(28,68,138)'
      }
    }
  }
)

export default SettingsNavigator
