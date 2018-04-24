import React, { Component } from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'

import { connect } from 'react-redux'

import ListItem from './ListItem'

class MyList extends Component {
  favouriteUnis () {
    const { favouriteUnis } = this.props
    return favouriteUnis
  }

  renderItem (item) {
    return (
      <ListItem
        title={'University of Sussex'}
        pubukprn={item}
        key={item}
        onPressItem={this._onPressItem()} />
    )
  }

  _onPressItem (id) {
    console.log(id + ' PRESSED!!')
  };

  render () {
    return (
      <View style={styles.container}>
        <FontAwesome style={styles.logo}>{Icons.list}</FontAwesome>

        {this.favouriteUnis().length > 0 ? (
          <FlatList
            style={styles.list}
            data={this.favouriteUnis()}
            renderItem={({item}) => this.renderItem(item)}
          />
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
  list: {
    width: '100%'
  }
})

const mapStateToProps = state => {
  return { favouriteUnis: state.favouriteUnis }
}

const mapDispatchToProps = dispatch => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyList)
