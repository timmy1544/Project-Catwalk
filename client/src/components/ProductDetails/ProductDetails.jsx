/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import ProductStyle from './productStyle';
import ProductSlogan from './productSlogan';
// import config from '../../../../config';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      currentID: this.props.productId,
      style: null,
    };
  }

  componentDidMount() {
    this.getProductInfo();
  }

  getProductInfo() {
    axios.get(`/products/${this.state.currentID}`)
      .then((response) => {
        console.log('product info', this.state.currentID, response.data);
        this.setState({
          product: response.data,
        });
      })
      .then(axios.get(`/products/${this.state.currentID}/styles`)
        .then((response) => {
          console.log('product style', response.data);
          this.setState({
            style: response.data,
          });
        })
        .catch((err) => {
          throw err;
        }))
      .catch((err) => {
        throw err;
      });
  }

  render() {
    if (!this.state.product || !this.state.style) { return null; }
    return (
      <div className="productDetails">
        <ProductStyle style={this.state.style} product={this.state.product} />
        <ProductSlogan product={this.state.product} />
      </div>
    );
  }
}

export default ProductDetails;
