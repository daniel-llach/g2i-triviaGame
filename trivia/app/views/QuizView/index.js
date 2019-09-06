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
    // hydrate the store with the questions
    actions.getQuestions()
  }

  render() {
    const {navigation} = this.props
    const {navigate} = navigation
    return (
      <View style={styles.container}>
        <Questions navigate={navigate} />
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
