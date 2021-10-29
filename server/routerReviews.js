const express = require('express');
const { reviews } = require('./controller');

const routerReviews = express.Router();

routerReviews.route('/')
  .get(reviews.getReviews)
  .post(reviews.postReviews);

routerReviews.route('/meta')
  .get(reviews.getMetadata);

routerReviews.route('/:review_id/helpful')
  .put(reviews.putReviewHelpful);

routerReviews.route('/:review_id/report')
  .put(reviews.putReviewReport);

module.exports = routerReviews;
