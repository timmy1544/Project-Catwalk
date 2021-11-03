// USING HOOKS
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const ProductLineList = ({ productId }) => {
  const currentId = productId;
  const [relatedProductIds, setrelatedProductIds] = useState([]);

  useEffect(() => {
    axios.get(`/products/${currentId}/related`)
      .then((results) => setrelatedProductIds(results.data))
      .catch((err) => console.log(err));
  }, [currentId]);

  const relatedProduct = relatedProductIds.map((item, i) => (
    <Product
      key={i}
      relatedId={item}
    />
  ));

  return (
    <div className="relatedProduct-container">
      {relatedProduct}
    </div>
  );
};

export default ProductLineList;



















/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
// import React, { Component } from 'react';
// import axios from 'axios';

// class ProductLineList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentId: this.props.currentId,
//       relatedIds: []
//     };

//     this.getRelatedProductIds = this.getRelatedProductIds.bind(this);
//   }

//   componentDidMount() {
//     this.getRelatedProductIds();
//   }

//   getRelatedProductIds() {
//     axios.get(`products/${this.state.currentId}/related`)
//       .then((results) => console.log(results))
//       .catch((err) => console.log(err));
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <div className="related-products">
//       </div>
//     );
//   }
// }

// export default ProductLineList;
