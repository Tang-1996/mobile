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

  // Filters the list of data to only include those that match the search term.
  filterUniListBy (searchTerm) {
    const { data } = this.props

    if (searchTerm === undefined || searchTerm === '') {
      return data
    }

    if (data.length > 0) {
      let filteredList = data.filter((uni) => {
        return uni.name.toLowerCase().match(searchTerm.toLowerCase())
      })

      return filteredList
    }

    return data
  }

  render () {
    const { style, filterTerm } = this.props

    return (
      <FlatList
        style={style}
        data={this.filterUniListBy(filterTerm)}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={(item, index) => item.name} />
    )
  }
}
