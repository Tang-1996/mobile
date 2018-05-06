import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function () {
  return (
    <View style={styles.networkErrorContainer}>
      <Ionicons name='ios-alert' size={40} color='lightgray' />
      <Text style={styles.errorTitle}>You Are Not Connected to the Internet</Text>
      <Text style={styles.errorDescription}>Unable to retrieve list of universities from server.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  networkErrorContainer: {
    marginTop: 50,
    alignItems: 'center'
  },
  errorTitle: {
    color: 'white',
    fontWeight: '900',
    marginTop: 22
  },
  errorDescription: {
    color: 'lightgray',
    fontWeight: '400',
    marginTop: 18
  }
})
