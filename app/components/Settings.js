import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'

import { connect } from 'react-redux'

class Settings extends Component {
  render () {
    return (
      <View style={styles.container}>
        <FontAwesome style={styles.logo}>{Icons.cog}</FontAwesome>
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
  }
})

const mapStateToProps = state => {
  return { }
}

const mapDispatchToProps = dispatch => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
