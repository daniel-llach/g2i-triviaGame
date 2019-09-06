import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const ButtonWidthBorder = ({title, action}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => action()}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 10,
    width: 120,
    borderWidth: 4,
    borderColor: 'black',
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
  },
})

export default ButtonWidthBorder
