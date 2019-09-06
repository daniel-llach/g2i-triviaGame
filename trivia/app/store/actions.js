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
    // Check which is the right answer of the corresponded question and convert it to a bool
    const rightAnswer =
      questions[currentQuestion].correct_answer.toLowerCase() === 'true'
    // Compare if the right answer is the same that the user did choose
    const result = rightAnswer === answer
    // Add the result to the score
    const updateScore = [...score, result]
    // Set next question, be careful with the questions length
    const next = currentQuestion === 9 ? 9 : ++currentQuestion
    return {
      score: updateScore,
      currentQuestion: next,
      currentQuestionTitle: questions[next].category,
      currentQuestionContent: questions[next].question,
      finish: currentQuestion === 9,
    }
  },
  reStart: () => {
    return {
      score: [],
      questions: [],
      currentQuestion: 0,
      currentQuestionTitle: '',
      currentQuestionContent: '',
      finish: false,
    }
  },
}
