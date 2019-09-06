import axios from 'axios'

export const actionsCreators = {
  getQuestions: async () => {
    // I commonly work with a strategy that includes AsyncStorage to cache
    // some data that is brought from repetitive calls or that involve other
    // expensive situations, but in this case the endpoint returns all the
    // data once and the content is random, so I keep everything simple by
    // making an axios call every time.

    const response = await axios.get(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
    )
    return {
      questions: response.data.results,
      currentQuestion: 0,
      currentQuestionTitle: response.data.results[0].category,
      currentQuestionContent: response.data.results[0].question,
    }
  },
  nextQuestion: ({score, questions, currentQuestion}, actions, answer) => {
    const next = currentQuestion < 10 ? ++currentQuestion : currentQuestion
    const rightAnswer =
      questions[currentQuestion].correct_answer.toLowerCase() === 'true'
    const result = rightAnswer === answer
    return {
      currentQuestion: next,
      currentQuestionTitle: questions[next].category,
      currentQuestionContent: questions[next].question,
      score: [...score, result],
    }
  },
  reStart: () => {
    return {
      questions: [],
      currentQuestion: 0,
      currentQuestionTitle: '',
      currentQuestionContent: '',
      score: [],
    }
  },
}
