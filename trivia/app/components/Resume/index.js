import React from 'react'
import {FlatList, ScrollView, StyleSheet} from 'react-native'
import {connect} from '../../store'
import ResumeRow from '../ResumeRow'

const Resume = ({questions, score}) => {
  console.log('score: ', score)
  return (
    <ScrollView style={styles.resume}>
      <FlatList
        data={questions}
        renderItem={({item, index}) => {
          return <ResumeRow item={item} success={score[index]} />
        }}
        keyExtractor={(item, i) => `r-${i}`}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  resume: {
    marginBottom: 50,
  },
})

export default connect(({questions, score}) => ({
  questions,
  score,
}))(Resume)
