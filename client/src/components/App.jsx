/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-console */
/* eslint-disable eol-last */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails/ProductDetails';
import QandA from './QandA/QandA';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import Reviews from './Reviews/Reviews';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsData: null,
    };

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get('/products')
      .then((res) => {
        this.setState({
          productsData: res.data,
        });
      })
      .catch((err) => console.log('error', err));
  }

  render() {
    if (!this.state.productsData) { return null; }
    return (
      <div>
        <p>Hello Cat Trap</p>
        <ProductDetails productsData={this.state.productsData} />
        <RelatedProducts />
        <QandA />
        <Reviews />
      </div>
    );
  }
}

export default App;