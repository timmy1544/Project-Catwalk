const express = require('express');
const { QandA } = require('./controller');

const routerQandA = express.Router();

routerQandA.route('/question')
  .get(QandA.getQuestions)
  .post(QandA.postQuestion);

routerQandA.route('/questions/:question_id/answers')
  .get(QandA.getAnswers)
  .post(QandA.postAnswer);

routerQandA.route('/questions/:question_id/helpful')
  .put(QandA.putQuestionHelpful);

routerQandA.route('/questions/:answer_id/helpful')
  .put(QandA.putAnswerHelpful);

routerQandA.route('/questions/:question_id/report')
  .put(QandA.putQuestionReport);

routerQandA.route('/questions/:answer_id/report')
  .put(QandA.putAnswerReport);

module.exports = routerQandA;