/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable eol-last */
import React from 'react';
import ProductLineList from './ProductLineList';
import OutFitList from './OutFitList';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.productId,
    };
  }

  render() {
    const { productId } = this.state;

    return (
      <div>
        <h3>Related Products</h3>
        <ProductLineList productId={productId} />
        <h3>Your Outfit</h3>
        <OutFitList />
      </div>
    );
  }
}

export default RelatedProducts;