import React from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'

export default function () {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='rgba(255, 255, 255, 1.0)' />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    marginTop: 50
  },
  loadingText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 12
  }
})
