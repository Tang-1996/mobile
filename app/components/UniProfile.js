import React, { Component } from 'react'
import { View, Image, StyleSheet, Text, FlatList } from 'react-native'
import { Button } from 'react-native-elements'

import { connect } from 'react-redux'
import { favouriteUni } from '../actions/actions'

import { graphql } from 'react-apollo'
import * as Api from '../lib/Api'

import Loading from './Loading'

class UniProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      university: this.props.navigation.state.params.university
    }
  }

  tableDataFrom (university) {
    const tableRows = []

    console.log(university)

    // PUBUKPRN for debugging.
    // TODO: Remove for production.
    if (university.pubukprn !== null) {
      tableRows.push({
        key: 'PUBUKPRN',
        value: university.pubukprn
      })
    }

    // Nearest train station
    if (university.nearestTrainStation !== null) {
      tableRows.push({
        key: 'Nearest Station',
        value: university.nearestTrainStation
      })
    }

    // University URL
    if (university.url !== null) {
      tableRows.push({
        key: 'University URL',
        value: university.url
      })
    }

    // SU URL
    if (university.unionURL !== null) {
      tableRows.push({
        key: 'Union URL',
        value: university.unionURL
      })
    }

    // Location type
    if (university.uniLocationType !== null) {
      let uniLocationType = ''

      switch (university.uniLocationType) {
        case 'CITY':
          uniLocationType = 'City'
          break
        case 'SEASIDE_CITY':
          uniLocationType = 'Seaside City'
          break
        default:
          uniLocationType = 'Town'
      }

      tableRows.push({
        key: 'Location Type',
        value: uniLocationType
      })
    }

    // Uni type
    if (university.uniType !== null) {
      let uniType = ''

      if (university.uniType === 'CAMPUS') {
        uniType = 'Campus'
      } else {
        uniType = 'City'
      }

      tableRows.push({
        key: 'University Type',
        value: uniType
      })
    }

    // Average rent
    if (university.averageRent !== null) {
      tableRows.push({
        key: 'Average Rent (excl. bills)',
        value: '£' + university.averageRent
      })
    }

    return tableRows
  }

  imageFrom (university) {
    if (university.url !== null) {
      return <Image source={{ uri: Api.urlForUniLogo(university.url) }} style={styles.logoImage} />
    } else if (university.unionURL !== null) {
      return <Image source={{ uri: Api.urlForUniLogo(university.unionURL) }} style={styles.logoImage} />
    }
  }

  renderUniInfo (data) {
    if (data.loading) {
      return <Loading />
    } else {
      const university = this.props.data.university

      return (
        <View style={styles.container}>
          {this.imageFrom(university)}

          <Text style={styles.uniName}>{university.name}</Text>

          <FlatList
            style={styles.infoTable}
            data={this.tableDataFrom(university)}
            renderItem={({item}) =>
              <View style={styles.infoRow}>
                <Text style={styles.heading}>{item.key}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>} />

          <Button
            containerViewStyle={{marginLeft: -10, marginRight: null, width: '105%', justifyContent: 'center'}}
            text='Find Courses'
            onPress={() => favouriteUni('1234')}
            style={styles.searchButton} />
        </View>
      )
    }
  }

  render () {
    const { data } = this.props

    return (
      <View style={styles.container}>
        {this.renderUniInfo(data)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a64db',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  logoImage: {
    marginTop: 16,
    width: 70,
    height: 70,
    borderRadius: 5
  },
  uniName: {
    color: 'rgba(255,255,255,0.7)',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '900',
    fontSize: 20
  },
  infoTable: {
    width: '100%'
  },
  infoRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    minHeight: 40,
    alignItems: 'center'
  },
  heading: {
    flex: 1,
    color: 'lightgray',
    marginLeft: 16
  },
  value: {
    flex: 1,
    textAlign: 'right',
    color: 'white',
    marginRight: 16
  }
})

const UniProfileWithData = graphql(Api.uniInfoGQL(), {
  options: (props) => ({
    variables: {
      pubukprn: props.navigation.state.params.university.pubukprn
    }
  })
})(UniProfile)

const mapStateToProps = state => {
  return { }
}

const mapDispatchToProps = dispatch => {
  return {
    favouriteUni: pubukprn => dispatch(favouriteUni(pubukprn))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UniProfileWithData)
