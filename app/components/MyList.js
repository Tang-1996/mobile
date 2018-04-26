import React, { Component } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'

import { connect } from 'react-redux'

import MyFlatList from './myflatlist/MyFlatList'

class MyList extends Component {
  favouriteUnis () {
    const { favouriteUnis } = this.props
    return favouriteUnis
  }

  onPressItem (item) {
    console.log(item)
  }

  render () {
    return (
      <View style={styles.container}>
        <FontAwesome style={styles.logo}>{Icons.list}</FontAwesome>

        {this.favouriteUnis().length > 0 ? (
          <MyFlatList
            style={styles.favouriteUniList}
            data={this.favouriteUnis()}
            onPressItem={this.onPressItem} />
        ) : (
          <Text style={styles.noUnisText}>Unis you favourite will appear here</Text>
        )}
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
    marginBottom: 16,
    fontSize: 42
  },
  noUnisText: {
    color: '#CCCCCC',
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 24,
    marginRight: 24,
    textAlign: 'center',
    fontSize: 18
  },
  favouriteUniList: {
    width: '100%',
    backgroundColor: 'rgba(50, 0, 0, 0.2)'
  }
})

const mapStateToProps = state => {
  return { favouriteUnis: state.favouriteUnis }
}

const mapDispatchToProps = dispatch => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyList)
