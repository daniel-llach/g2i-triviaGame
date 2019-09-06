import React, {PureComponent} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Header from '../../components/Header'
import ButtonWidthBorder from '../../components/ButtonWidthBorder'

class HomeView extends PureComponent {
  static navigationOptions = () => {
    return {
      headerTitle: <Header line1="Welcome to the" line2="Trivia Challenge!" />,
    }
  }

  pressBeginButton = () => {
    const {navigation} = this.props
    const {navigate} = navigation
    navigate('Quiz')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.advice}>
          You will presented with 10 True or False questions.
        </Text>
        <Text style={styles.advice2}>Can you score 100%?</Text>
        <ButtonWidthBorder title={'BEGIN'} action={this.pressBeginButton} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  advice: {
    width: 230,
    textAlign: 'center',
    fontSize: 28,
    marginTop: 80,
  },
  advice2: {
    textAlign: 'center',
    fontSize: 24,
  },
  container: {
    backgroundColor: '#f5f2f0',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
})

export default HomeView
