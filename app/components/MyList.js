import React, { Component } from 'react'
import {View, StyleSheet, Switch, Text} from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'

import { connect } from 'react-redux'

class MyList extends Component {
  render () {
    return (
      <View style={styles.container}>
        <FontAwesome style={styles.logo}>{Icons.list}</FontAwesome>
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
    fontSize: 42
  }
})

const mapStateToProps = state => {
  return { }
}

const mapDispatchToProps = dispatch => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyList)
