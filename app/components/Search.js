import React, { Component } from 'react'
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native'
import { Button, SearchBar } from 'react-native-elements'

import { connect } from 'react-redux'

import { favouriteUni } from '../actions/actions'
import MyFlatList from './myflatlist/MyFlatList'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = { searchBoxText: '' }
    this.onPressItem = this.onPressItem.bind(this)
  }

  onPressItem (item) {
    this.props.favouriteUni(item)
  }

  render () {
    const { favouriteUni, uniList } = this.props

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

        <Button
          text='Find Universities'
          onPress={() => favouriteUni('1234')}
          style={styles.searchButton} />

        {uniList.isFetching ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size='large' color='rgba(255, 255, 255, 1.0)' />
            <Text style={styles.loadingText}>Loading Data...</Text>
          </View>
        ) : (
          <MyFlatList
            style={styles.uniList}
            data={uniList.lookupTable}
            onPressItem={this.onPressItem} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a64db',
    alignItems: 'center'
  },
  logo: {
    marginTop: 35,
    width: 100,
    height: 100
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
  },
  loadingContainer: {
    marginTop: 50
  },
  loadingText: {
    color: 'white',
    marginTop: 12
  },
  searchButton: {
    marginTop: 30,
    display: 'none'
  },
  uniList: {
    width: '100%',
    backgroundColor: 'rgba(50, 0, 0, 0.2)'
  }
})

const mapStateToProps = state => {
  return { uniList: state.uniLookupTable }
}

const mapDispatchToProps = dispatch => {
  return {
    favouriteUni: pubukprn => dispatch(favouriteUni(pubukprn))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
