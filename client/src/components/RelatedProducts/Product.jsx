/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './Styles';

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
    <div key={id} className="product-container">
      <div className="related-product">

        <Styles
          key={relatedId}
          styleId={id}
        />
        <p className="related-category">{category}</p>
        <p className="related-name">{name}</p>
        <p className="related-d-price">${default_price}</p>
        <p className="star-rating">star placeholder: * * * * *</p>
      </div>
    </div>
  );
};

export default Product;