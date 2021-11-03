/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import Styles from './Styles';
import axios from 'axios';

const Product = ({ relatedId }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`/products/${relatedId}`)
      .then((results) => {
        setProduct(results.data);
        // setFeatures(results.data.features);
      })
      .catch((err) => console.log(err));
  }, [relatedId]);

  const {
    id, name, category, default_price,
  } = product;

  return (
    <div key={id} className="related-product">
      <p>{category}</p>
      <p>{name}</p>
      <p>{default_price}</p>
      <Styles
        key={relatedId}
        styleId={id}
      />
    </div>
  );
};

export default Product;