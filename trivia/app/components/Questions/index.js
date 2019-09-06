import React, {PureComponent} from 'react'
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native'
import {actions, connect} from '../../store'
import ButtonWidthBorder from '../ButtonWidthBorder'
import he from 'he'

class Questions extends PureComponent {
  next = answer => {
    const {finish, navigate} = this.props

    if (finish) {
      // go to the result view
      navigate('Results')
    } else {
      actions.nextQuestion(answer)
    }
  }

  render() {
    const {currentQuestion, currentQuestionContent} = this.props

    return (
      <View style={styles.questions}>
        <View styles={styles.question}>
          <View style={styles.box}>
            {currentQuestionContent.length > 0 ? (
              <Text style={styles.content}>
                {he.decode(currentQuestionContent)}
              </Text>
            ) : (
              <ActivityIndicator color="black" />
            )}
          </View>
          <Text style={styles.paginator}>{currentQuestion + 1} of 10</Text>
        </View>
        <View style={styles.alternatives}>
          <ButtonWidthBorder
            title={'TRUE'}
            action={() => this.next(true)}
            disabled={currentQuestionContent.length === 0}
          />
          <ButtonWidthBorder
            title={'FALSE'}
            action={() => this.next(false)}
            disabled={currentQuestionContent.length === 0}
          />
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

export default connect(({currentQuestionContent, currentQuestion, finish}) => ({
  currentQuestionContent,
  currentQuestion,
  finish,
}))(Questions)
