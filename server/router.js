const express = require('express');
const { products, reviews, QandA } = require('./controller');

const router = express.Router();

router.route('/products')
  .get(products.getProducts);

module.exports = router;
