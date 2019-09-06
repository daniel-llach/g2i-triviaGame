import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {connect} from '../../../store'
import he from 'he'

const ResumeRow = ({item, success}) => {
  return (
    <View style={styles.row}>
      <Text style={[styles.icon, success && styles.green]}>
        {success ? '+' : '-'}
      </Text>
      <Text style={[styles.question, success && styles.green]}>
        {he.decode(item.question)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'flex-start',
  },
  question: {
    width: '90%',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'left',
    paddingRight: 20,
  },
  green: {
    color: 'green',
  },
})

export default connect(({questions, score}) => ({
  questions,
  score,
}))(ResumeRow)
