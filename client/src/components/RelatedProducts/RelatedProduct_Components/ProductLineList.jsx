// USING HOOKS
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductLineList = ({ productId, IDchanger }) => {
  const [relatedProductIds, setrelatedProductIds] = useState([]);

  useEffect(() => {
    axios.get(`/products/${productId}/related`)
      .then((results) => {
        setrelatedProductIds(results.data)
      })
      .catch((err) => console.log(err));
  }, [productId]);
  // console.log('---------------------')
  // console.log(productId, 'MAIN ID')
  // console.log(relatedProductIds.indexOf(productId), 'INDEX OF ITEM')
  // console.log(relatedProductIds, 'PRODUCT IDS')
  // console.log('---------------------')

  let trackArray = [];
  const relatedProduct = relatedProductIds.map((item) => {
    if (item !== productId && trackArray.indexOf(item) === -1) {
      trackArray = [...trackArray, item]
      return (
        <ProductCard
          key={item}
          relatedId={item}
          productId={productId}
          IDchanger={IDchanger}
        />
      )
    }
  });

  return (
    <div className="relatedProduct-wrapper">
      {relatedProduct}
    </div>
  );
};

export default ProductLineList;
