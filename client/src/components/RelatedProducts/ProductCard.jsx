/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StylePhotos from './StylePhotos';
import StarRating from './StarRating';

const ProductCard = ({ relatedId }) => {
  const [product, setProduct] = useState([]);
  const [ratings, setRatings] = useState([]);


  useEffect(() => {
    axios.get(`/products/${relatedId}`)
      .then((productsResponse) => {
        setProduct(productsResponse.data);
        // setFeatures(results.data.features);
      })

      .catch((err) => console.log(err));
  }, [relatedId]);

  useEffect(() => {
    axios.get(`/reviews/${relatedId}`)
      .then((reviewResponse) => {
        // const responseData = reviewResponse.data;

        // setRatings(responseData)
        setRatings(reviewResponse.data.results)
      })
      .catch((err) => console.error(err))
  }, [relatedId])

  // setRatings(reviewReponse.data.results)


  //   useEffect(() => {
  //   axios.get(`/reviews/${relatedId}`)
  //     .then((reviewReponse) => setRatings(reviewReponse.data.results))
  //     .catch((err) => console.error(err));
  // }, []);

  // console.log(ratings, 'ratings')

  const {
    id, name, category, default_price,
  } = product;

  // console.log(ratings, 'these are the ratings')
  return (
    <div key={id} className="product-card">
      <div className="product-card__body">
        <StylePhotos
          key={relatedId}
          styleId={id}
        />
        <p className="product-card__category">{category}</p>
        <p className="product-card__name">{name}</p>
        <p className="product-card__price">${default_price}</p>
        <p className="product-card__rating">star placeholder: * * * * *</p>
        <StarRating
          ratingResults={ratings}
        />
      </div>
    </div>
  );
};

export default ProductCard;