import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'

import MyFlatList from './myflatlist/MyFlatList'
import UniProfile from './UniProfile'

class Favourites extends Component {
  favouriteUnis () {
    const { favouriteUnis } = this.props
    return favouriteUnis
  }

  onPressItem (item) {
    // TODO: Navigate to UniProfile page for this uni.
    console.log(item)
  }

  renderFavouriteUniversitiesList (universities) {
    if (universities.length <= 0) {
      return <Text style={styles.noUnisText}>Universities You Favourite Will Appear Here</Text>
    } else {
      return (
        <MyFlatList
          style={styles.favouriteUniList}
          data={this.favouriteUnis()}
          onPressItem={this.onPressItem} />
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Ionicons name={'ios-star'} style={styles.logo} />

        {this.renderFavouriteUniversitiesList(this.favouriteUnis())}
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
    color: 'lightgray',
    marginTop: 45,
    marginBottom: 16,
    fontSize: 42
  },
  noUnisText: {
    color: 'white',
    fontWeight: '900',
    marginTop: 20,
    marginLeft: 24,
    marginRight: 24,
    textAlign: 'center'
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

const favourites = connect(mapStateToProps, mapDispatchToProps)(Favourites)

const FavouritesNavigator = StackNavigator(
  {
    Favourites: { screen: favourites },
    UniProfile: { screen: UniProfile }
  },
  {
    headerMode: 'float',
    navigationOptions: {
      headerTitle: 'Favourites',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'rgb(28,68,138)'
      }
    }
  }
)

export default FavouritesNavigator
