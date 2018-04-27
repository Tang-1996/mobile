import React, {Component} from 'react'
import {Image, View, StyleSheet, Text, FlatList} from 'react-native'
import {Button, SearchBar} from 'react-native-elements'

import {connect} from 'react-redux'


import {favouriteUni} from '../actions/actions'

class UniProfile extends Component {
  constructor(props) {
    super(props)
    // this.state = { searchBoxText: '' }
  }

  render() {
    //const { favouriteUni } = this.props

    return (<View style={styles.container}>
      <Text style={styles.uniName}>
        University of Sussex
      </Text>
      <Text style={styles.townName}>
        Brighton
      </Text>

      <FlatList
        style={styles.infoTable}
        data={[
          {
            key: 'Falmer',
            heading: 'Nearest Station'
          },
          {
            key: 'Brighton',
            heading: 'Nearest Town'
          }
        ]}
        renderItem={({item}) =>
          <View style={styles.infoRow}>
            <Text style={styles.heading}>{item.heading}</Text>
            <Text style={styles.value}>{item.key}</Text>
          </View>} />

          <Button
            containerViewStyle={{marginLeft:-10,marginRight:null,width:"105%",justifyContent:'center'}}
            text='Find Courses'
            onPress={() => favouriteUni('1234')}
            style={styles.searchButton} />



    </View>)
  }
}

const styles = StyleSheet.create({
  uniName:{
    color: 'white',
    fontSize: 40
  },
  townName:{
    color: 'white',
    fontSize: 30
  },
  container: {
    backgroundColor: '#1a64db',
    alignItems: 'center',
  },
  infoTable: {
    width: '100%',
  },
  infoRow:{
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    height: 25,
    alignItems: 'center'
  },
  heading:{
    flex: 1,
    color: 'lightgray',
    marginLeft: 16
  },
  value:{
    flex: 1,
    textAlign: 'right',
    color: 'white',
    marginRight: 16
  },
  searchButton: {
    marginTop: 30,
    marginBottom: 30
  }

})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UniProfile)
