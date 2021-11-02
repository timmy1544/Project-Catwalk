/* eslint-disable eol-last */
import React from 'react';
import ProductLineList from './ProductLineList';
import OutFitList from './OutFitList';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.productId
    };
  }

  render() {
    const { productId } = this.state;

    return (
      <div className="test">
        <div className="product-line-list-component">
          <ProductLineList productId={productId} />
        </div>
        <div className="outfit-list-component">
          <OutFitList />
        </div>
      </div>
    );
  }
}

export default RelatedProducts;