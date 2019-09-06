import React from 'react'
import {Text, View} from 'react-native'
import {connect} from '../../store'
import he from 'he'

const ResumeRow = ({item, success}) => {
  return (
    <View>
      <Text>{success ? '+' : '-'}</Text>
      <Text>{he.decode(item.question)}</Text>
    </View>
  )
}

export default connect(({questions, score}) => ({
  questions,
  score,
}))(ResumeRow)
