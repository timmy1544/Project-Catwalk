// USING HOOKS
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductLineList = ({ productId }) => {
  const currentId = productId;

  const [relatedProductIds, setrelatedProductIds] = useState([]);

  useEffect(() => {
    axios.get(`/products/${currentId}/related`)
      .then((results) => setrelatedProductIds(results.data))
      .catch((err) => console.log(err));
  }, [currentId]);

  const relatedProduct = relatedProductIds.map((item, i) => (
    <ProductCard
      key={i}
      relatedId={item}
    />
  ));

  return (
    <div className="relatedProduct-wrapper">
      {relatedProduct}
    </div>
  );
};

export default ProductLineList;
