import React, { Component } from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'

import { connect } from 'react-redux'

class MyList extends Component {
  favouriteUnis () {
    const { favouriteUnis } = this.props
    return favouriteUnis
  }

  renderItem (item) {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>University of Sussex</Text>
        <Text style={styles.itemText}>PUBUKPRN: {item}</Text>
      </View>
    )
  }

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
          <Text>No Unis To Show</Text>
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
  list: {
    width: '100%'
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(50, 0, 0, 0.2)',
    minHeight: 50,
    borderColor: 'rgba(50, 0, 0, 0.2)',
    borderBottomWidth: 1
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 12
  }
})

const mapStateToProps = state => {
  return { favouriteUnis: state.favouriteUnis }
}

const mapDispatchToProps = dispatch => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyList)
