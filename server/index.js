const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('port', 3000);

app.listen(app.get('port'), (err) => {
  if(err) throw err;
  console.log('listening to port 3000');
});



// app.listen('port', () => {
//   console.log(`Listening on port: ${port}`)
// })