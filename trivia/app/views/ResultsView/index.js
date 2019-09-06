import React, {PureComponent} from 'react'
import {StyleSheet, View} from 'react-native'
import Header from '../../components/Header'
import ButtonWidthBorder from '../../components/ButtonWidthBorder'
import Resume from '../../components/Resume'
import {actions} from '../../store'

class ResultsView extends PureComponent {
  static navigationOptions = () => {
    return {
      headerTitle: <Header line1={'You scored'} showScored />,
      headerLeft: null,
    }
  }

  pressPlayAgainButton = () => {
    const {navigation} = this.props
    const {navigate} = navigation
    // reset the store
    actions.reStart()
    // go to home
    navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <Resume />
        <ButtonWidthBorder
          title={'PLAY AGAIN?'}
          action={this.pressPlayAgainButton}
        />
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

export default ResultsView
