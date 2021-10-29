const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const routerProducts = require('./routerProducts');
const routerReviews = require('./routerReviews');
const routerQandA = require('./routerQandA');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/products', routerProducts);
app.use('/reviews', routerReviews);
app.use('/qanda', routerQandA);

app.set('port', 3000);

app.listen(app.get('port'), (err) => {
  if (err) throw err;
  console.log('listening to port 3000');
});
