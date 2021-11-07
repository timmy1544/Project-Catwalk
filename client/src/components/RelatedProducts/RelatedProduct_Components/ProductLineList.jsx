// USING HOOKS
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductLineList = ({ productId }) => {
  const [relatedProductIds, setrelatedProductIds] = useState([]);

  useEffect(() => {
    axios.get(`/products/${productId}/related`)
      .then((results) => setrelatedProductIds(results.data))
      .catch((err) => console.log(err));
  }, [productId]);

  const relatedProduct = relatedProductIds.map((item) => (
    <ProductCard
      key={item}
      relatedId={item}
      productId={productId}
    />
  ));

  return (
    <div className="relatedProduct-wrapper">
      {relatedProduct}
    </div>
  );
};

export default ProductLineList;
