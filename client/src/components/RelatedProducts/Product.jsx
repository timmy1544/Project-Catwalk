/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './Styles';
import StarRating from './StarRating';

const Product = ({ relatedId }) => {
  const [product, setProduct] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    axios.get(`/products/${relatedId}`)
      .then((results) => {
        setProduct(results.data);
        // setFeatures(results.data.features);
      })
      .catch((err) => console.log(err));
  }, [relatedId]);

  useEffect(() => {
    axios.get(`/reviews/${relatedId}`)
      .then((reviewReponse) => setRatings(reviewReponse.data.results))
      .catch((err) => console.error(err));
  }, [relatedId]);

  const {
    id, name, category, default_price,
  } = product;

  // console.log(ratings, 'these are the ratings')
  return (
    <div key={id} className="product-card">
      <div className="product-card__body">
        <Styles
          key={relatedId}
          styleId={id}
        />
        <p className="product-card__category">{category}</p>
        <p className="product-card__name">{name}</p>
        <p className="product-card__price">${default_price}</p>
        <p className="product-card__rating">star placeholder: * * * * *</p>
        <StarRating
          // key={name}
          rating={ratings}
        />
      </div>
    </div>
  );
};

export default Product;