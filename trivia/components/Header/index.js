import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {connect} from '../../store'

const Header = ({
  line1,
  line2,
  currentQuestionTitle,
  getTitleFromcurrentQuestion,
}) => {
  return (
    <View>
      <Text style={styles.title}>
        {getTitleFromcurrentQuestion ? currentQuestionTitle : line1}
      </Text>
      <Text style={styles.title}>{line2}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    maxWidth: 320,
    textAlign: 'center',
  },
})

Header.defaultProps = {
  getTitleFromcurrentQuestion: false,
}

export default connect(({currentQuestionTitle}) => ({
  currentQuestionTitle,
}))(Header)
