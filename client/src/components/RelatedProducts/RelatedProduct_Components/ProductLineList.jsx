// USING HOOKS
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductLineList = ({ productId, IDchanger }) => {
  const [relatedProductIds, setrelatedProductIds] = useState([]);

  useEffect(() => {
    // maybe refactor this to async
    axios.get(`/products/${productId}/related`)
      .then((results) => setrelatedProductIds(results.data))
      .catch((err) => console.log(err));
  }, [productId]);

  const relatedProduct = relatedProductIds.map((item) => (
    <ProductCard
      key={item}
      relatedId={item}
      productId={productId}
      IDchanger={IDchanger}
    />
  ));

  return (
    <div className="relatedProduct-wrapper">
      {relatedProduct}
    </div>
  );
};

export default ProductLineList;
