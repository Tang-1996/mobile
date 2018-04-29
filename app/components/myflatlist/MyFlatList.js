import React, { Component } from 'react'
import { FlatList } from 'react-native'

import ListItem from './ListItem'

export default class MyFlatList extends Component {
  renderItem (item) {
    return (
      <ListItem
        uni={item}
        onPressItem={this.props.onPressItem} />
    )
  }

  render () {
    const { data, style } = this.props

    return (
      <FlatList
        style={style}
        data={data}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={(item, index) => item.name} />
    )
  }
}
