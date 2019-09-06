import React, {PureComponent} from 'react'
import {StyleSheet, View} from 'react-native'
import Header from '../../components/Header'
import Questions from '../../components/Questions'
import {actions} from '../../store'

class QuizView extends PureComponent {
  static navigationOptions = () => {
    return {
      headerTitle: <Header getTitleFromcurrentQuestion />,
      headerLeft: null,
    }
  }

  componentDidMount() {
    actions.getQuestions()
  }

  render() {
    return (
      <View style={styles.container}>
        <Questions />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f2f0',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
})

export default QuizView
