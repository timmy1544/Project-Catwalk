/* eslint-disable eol-last */
import React from 'react';
import ProductLineList from './ProductLineList.jsx';
import OutFitList from './OutFitList.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="test">
        <div className="product-line-list-component">
          <ProductLineList />
        </div>
        <div className="outfit-list-component">
          <OutFitList />
        </div>
      </div>
    );
  }
}

export default RelatedProducts;