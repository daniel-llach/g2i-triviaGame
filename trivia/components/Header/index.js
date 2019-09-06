import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Header = ({line1, line2}) => {
  return (
    <View>
      <Text style={styles.title}>{line1}</Text>
      <Text style={styles.title}>{line2}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
})

export default Header
