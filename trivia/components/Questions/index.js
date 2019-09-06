import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {actions, connect} from '../../store'
import ButtonWidthBorder from '../ButtonWidthBorder'
import he from 'he'

const Questions = ({
  questions,
  currentQuestion,
  currentQuestionContent,
  score,
}) => {
  const next = answer => {
    console.log(score.length)
    if (currentQuestion === 9) {
      // go to the result view
      console.log('RESULTS!: ', score)
    } else {
      actions.nextQuestion(answer)
    }
  }
  return (
    <View style={styles.questions}>
      <Text style={styles.content}>{he.decode(currentQuestionContent)}</Text>
      <View style={styles.choose}>
        <ButtonWidthBorder title={'TRUE'} action={() => next(true)} />
        <ButtonWidthBorder title={'FALSE'} action={() => next(false)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  questions: {
    flex: 1,
  },
  content: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  choose: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
})

export default connect(
  ({questions, currentQuestionContent, currentQuestion, score}) => ({
    questions,
    currentQuestionContent,
    currentQuestion,
    score,
  }),
)(Questions)
