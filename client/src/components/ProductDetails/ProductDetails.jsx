/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Album from './album';
import ProductStyle from './productStyle';
import ProductSlogan from './productSlogan';
// import axios from 'axios';
// import config from '../../../../config';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: this.props.productsData,
      currentProduct: this.props.productsData[0].id,
    };
  }

  render() {
    console.log('this.state', this.state);
    return (
      <div className="productDetails">
        <Album />
        <ProductStyle />
        <ProductSlogan />
      </div>
    );
  }
}

export default ProductDetails;
