import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { connect } from 'react-redux'
import { favouriteUni } from '../actions/actions'

import UniProfile from './UniProfile'
import Loading from './Loading'
import NetworkError from './NetworkError'
import UniList from './UniList'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = { searchBoxText: '' }
    this.onPressItem = this.onPressItem.bind(this)
  }

  onPressItem (item) {
    this.props.navigation.navigate(
      'UniProfile',
      { university: item }
    )
  }

  renderUniList (uniList) {
    if (uniList.isFetching) {
      return <Loading />
    } else if (uniList.fetchFailed) {
      return <NetworkError />
    } else {
      return <UniList data={uniList.lookupTable} onPressItem={this.onPressItem} />
    }
  }

  render () {
    const { uniList } = this.props

    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />

        {this.renderUniList(uniList)}
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

const search = connect(mapStateToProps, mapDispatchToProps)(Search)

const SearchNavigator = StackNavigator(
  {
    Search: { screen: search },
    UniProfile: { screen: UniProfile }
  },
  {
    headerMode: 'float',
    navigationOptions: {
      headerTitle: 'Search',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'rgb(28,68,138)'
      }
    }
  }
)

export default SearchNavigator
