const express = require('express');
const { QandA } = require('./controller');

const routerQandA = express.Router();

routerQandA.route('/')
  .get(QandA.getQuestions)
  .post(QandA.postQuestion);

routerQandA.route('/:question_id/answers')
  .get(QandA.getAnswers)
  .post(QandA.postAnswer);

routerQandA.route('/:question_id/helpful')
  .put(QandA.putQuestionHelpful);

routerQandA.route('/:answer_id/helpful')
  .put(QandA.putAnswerHelpful);

routerQandA.route('/:question_id/report')
  .put(QandA.putQuestionReport);

routerQandA.route('/:answer_id/report')
  .put(QandA.putAnswerReport);

module.exports = routerQandA;