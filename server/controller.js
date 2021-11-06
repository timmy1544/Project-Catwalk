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
    getProductById: (req, res) => {
      axios.get(`${config.ALTELIER_API}/products/${req.params.product_id}`, {
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
    getStyles: (req, res) => {
      axios.get(`${config.ALTELIER_API}/products/${req.params.product_id}/styles`, {
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
    getRelated: (req, res) => {
      axios.get(`${config.ALTELIER_API}/products/${req.params.product_id}/related`, {
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
  },
  reviews: {
    getReviews: (req, res) => {
      const productStr = `?product_id=${req.params.product_id}`;
      axios.get(`${config.ALTELIER_API}/reviews/${productStr}`, {
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
    getMetadata: (req, res) => {
      const productStr = `?product_id=${req.params.product_id}`;
      axios.get(`${config.ALTELIER_API}/reviews/meta/${productStr}`, {
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
    postReviews: () => {},
    putReviewHelpful: (req, res) => {
      axios.put(`${config.ALTELIER_API}/reviews/${req.params.review_id}/helpful`, {}, {
        headers: {
          Authorization: `${config.API_KEY}`,
        },
      })
        .then(() => {
          res.status(200).send('Successfully made PUT request: helpful');
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    },
    putReviewReport: (req, res) => {
      axios.put(`${config.ALTELIER_API}/reviews/${req.params.review_id}/report`, {}, {
        headers: {
          Authorization: `${config.API_KEY}`,
        },
      })
        .then(() => {
          res.status(200).send('Successfully made PUT request: report');
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    },
  },
  QandA: {
    getQuestions: (req, res) => {
      // count 3 shows 2 questions. not sure why it's not consistent with the number
      // ${req.params.product_id}
      console.log('req params QA', req.params);
      axios.get(`${config.ALTELIER_API}/qa/questions/?product_id=42366&count=3`, {
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
    getAnswers: (req, res) => {
      // need to figure out how to get question id number to replace 426006
      axios.get(`${config.ALTELIER_API}/qa/questions/426006/answers?count=2`, {
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
    postQuestion: (req, res) => {
      // need to send product id with body
      // body: {"body": "Is the sizing accurate?", "name": "fashionista123",
      // "email": "fashionista123@gmail.com", "product_id": 42366}
      axios.post(`${config.ALTELIER_API}/qa/questions/`, {
        body: req.body.body,
        name: req.body.name,
        email: req.body.email,
        product_id: req.body.product_id,
      }, {
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
    postAnswer: (req, res) => {
      // need to send question id with body
      // need to figure out how to get img url from user photo uploads
      // body: {"body": "True to size", "name": "jane",
      // "email": "jane@gmail.com", "photos": []}
      axios.post(`${config.ALTELIER_API}/qa/questions/${req.params.question_id}/answers`, {
        body: req.body.body,
        name: req.body.name,
        email: req.body.email,
        photos: [],
      }, {
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
    putQuestionHelpful: (req, res) => {
      axios.put(`${config.ALTELIER_API}/qa/questions/${req.body.question_id}/helpful`, {
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
    putAnswerHelpful: (req, res) => {
      axios.put(`${config.ALTELIER_API}/qa/questions/${req.body.answer_id}/helpful`, {
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
    putQuestionReport: (req, res) => {
      axios.put(`${config.ALTELIER_API}/qa/questions/${req.body.question_id}/report`, {
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
    putAnswerReport: (req, res) => {
      axios.put(`${config.ALTELIER_API}/qa/questions/${req.body.answer_id}/report`, {
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
  },
};