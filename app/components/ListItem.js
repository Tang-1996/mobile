import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

class ListItem extends Component {
  _onPress () {
    this.props.onPressItem(this.props.id)
  };

  render () {
    const { title, id } = this.props

    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.item}>
          <Text>{title}{id}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
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

export default ListItem
