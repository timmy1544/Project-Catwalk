const axios = require('axios');
const config = require('../config');

module.exports = {
  products: {
    getProducts: (req, res) => {
      axios.get(`${config.ALTELIER_API}/products`, {
        headers: {
          Authorization: `${config.API_KEY}`,
        },
      })
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    },
    getProductById: () => {},
    getStyles: () => {},
    getRelated: () => {},
  },
  reviews: {
    getReviews: () => {},
    getMetadata: () => {},
    postReviews: () => {},
    putReviewHelpful: () => {},
    putReviewReport: () => {},
  },
  QandA: {
    getQuestions: () => {},
    getAnswers: () => {},
    postQuestion: () => {},
    postAnswer: () => {},
    putQuestionHelpful: () => {},
    putAnswerHelpful: () => {},
    putQuestionReport: () => {},
    putAnswerReport: () => {},
  },
};