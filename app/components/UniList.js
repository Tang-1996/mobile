import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'

import MyFlatList from './myflatlist/MyFlatList'

export default class UniList extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <SearchBar
          onChangeText={(text) => this.setState({text})}
          onClearText={() => this.setState({searchBoxText: ''})}
          containerStyle={styles.searchBox}
          inputStyle={styles.searchBoxInput}
          placeholderTextColor='rgba(250,250,250,0.6)'
          icon={{ color: 'white' }}
          clearIcon={{ color: 'white', name: 'clear' }}
          placeholder='type to search' />

        <MyFlatList
          style={styles.uniList}
          data={this.props.data}
          onPressItem={this.props.onPressItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  uniList: {
    width: '100%',
    backgroundColor: 'rgba(50, 0, 0, 0.2)'
  },
  searchBox: {
    width: '94%',
    marginTop: 16,
    marginBottom: 16,
    height: 50,
    borderRadius: 8,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  searchBoxInput: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent'
  }
})
