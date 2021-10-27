import React from 'react';
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import QandA from './QandA/QandA.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Reviews from './Reviews/Reviews.jsx';
import config from '../../../config.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.getProducts = this.getProducts.bind(this);
  }


  componentDidMount() {
    this.getProducts()


  }

  getProducts() {
    axios.get(`${config.ALTELIER_API}/products`, {
      headers: {
        'Authorization': `${config.API_KEY}`
      }
    })
    .then((res) => {
      console.log('data', res.data);
    })
    .catch(err => console.log('error', err));
  }

  render() {
    console.log(config)
    return (
      <div>
        <p>Hello Cat Trap</p>
        <ProductDetails />
        <RelatedProducts />
        <QandA />
        <Reviews />
      </div>
    )
  }
}

export default App;