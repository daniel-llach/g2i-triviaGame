import React, {PureComponent} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {actions, connect} from '../../store'
import ButtonWidthBorder from '../ButtonWidthBorder'
import he from 'he'

class Questions extends PureComponent {
  next = answer => {
    const {finish, score} = this.props
    if (finish) {
      // go to the result view
      console.log('RESULTS!: ', score)
    } else {
      actions.nextQuestion(answer)
    }
  }

  render() {
    const {currentQuestion, currentQuestionContent} = this.props

    return (
      <View style={styles.questions}>
        <View style={styles.box}>
          <Text style={styles.content}>
            {he.decode(currentQuestionContent)}
          </Text>
        </View>
        <Text style={styles.paginator}>{currentQuestion + 1} of 10</Text>
        <View style={styles.alternatives}>
          <ButtonWidthBorder title={'TRUE'} action={() => this.next(true)} />
          <ButtonWidthBorder title={'FALSE'} action={() => this.next(false)} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  questions: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    height: '100%',
  },
  box: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    padding: 20,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 50,
  },
  content: {
    fontSize: 26,
    textAlign: 'center',
  },
  alternatives: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paginator: {
    marginTop: 50,
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
  },
})

export default connect(
  ({currentQuestionContent, currentQuestion, score, finish}) => ({
    currentQuestionContent,
    currentQuestion,
    score,
    finish,
  }),
)(Questions)
