import React, { useState, useEffect } from 'react';
import { Star } from '@mui/icons-material/';
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
        setRatings(reviewResponse.data.results);
      })
      .catch((err) => console.error(err));
  }, [relatedId]);

  const {
    id, name, category, default_price,
  } = product;

  return (
    <div key={id} className="product-card">
      <div className="product-card__body">
        <div className="product-card-IMGcontainer">
          <div className="star-placeholder__top-right">
            <Star
              sx={{ color: 'yellow' }}
            />
          </div>
          <StylePhotos
            key={relatedId}
            styleId={id}
          />
        </div>
        <p className="product-card__category">{category}</p>
        <p className="product-card__name">{name}</p>
        <p className="product-card__price">${default_price}</p>
        <StarRating
          ratingResults={ratings}
        />
      </div>
    </div>
  );
};

export default ProductCard;