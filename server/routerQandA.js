const express = require('express');
const { QandA } = require('./controller');

const routerQandA = express.Router();

// Questions

routerQandA.route('/questions/:product_id')
  .get(QandA.getQuestions)
  .post(QandA.postQuestion);

routerQandA.route('/questions/:question_id/answers')
  .get(QandA.getAnswers)
  .post(QandA.postAnswer);

routerQandA.route('/questions/:question_id/helpful')
  .put(QandA.putQuestionHelpful);

routerQandA.route('/questions/:question_id/report')
  .put(QandA.putQuestionReport);

// Answers

routerQandA.route('/answers/:answer_id/helpful')
  .put(QandA.putAnswerHelpful);

routerQandA.route('/answers/:answer_id/report')
  .put(QandA.putAnswerReport);

module.exports = routerQandA;