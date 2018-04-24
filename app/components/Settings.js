import React, { Component } from 'react'
import {View, StyleSheet, Switch, Text} from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import Api from '../lib/graphql-api'

import { connect } from 'react-redux'

import {fetchUniLookupTable, toggleDebugMode} from '../actions/actions'

class Settings extends Component {
  render () {
    const { debugModeEnabled, toggleDebugMode, fetchUniLookupTable } = this.props

    return (
      <View style={styles.container}>
        <FontAwesome style={styles.logo}>{Icons.cog}</FontAwesome>

        <View style={styles.debugModeContainer}>
          <View>
            <Text style={styles.debugModeTitle}>Debug Mode {debugModeEnabled ? 'Enabled' : 'Disabled'}</Text>
            <Text style={{color: 'lightgray'}}>{Api.endpoint}</Text>
          </View>

          <Switch
            value={debugModeEnabled}
            onValueChange={() => {
              toggleDebugMode()
              fetchUniLookupTable()
            }}
          />
        </View>

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
    color: 'white',
    marginTop: 35,
    fontSize: 48
  },
  debugModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    width: '90%'
  },
  debugModeTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 6
  }
})

const mapStateToProps = state => {
  return { debugModeEnabled: state.debugModeEnabled }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleDebugMode: () => dispatch(toggleDebugMode()),
    fetchUniLookupTable: () => dispatch(fetchUniLookupTable())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
