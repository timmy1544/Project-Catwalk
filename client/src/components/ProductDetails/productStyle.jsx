/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const ProductStyle = (props) => (
  <div className="productStyle">
    <Photos />
    <div>
      <div className="review">review goes here!</div>
      <div>{props.product.category}</div>
      <div>{props.product.name}</div>
      <div>{props.product.default_price}</div>
      <div className="styleOptions">
        {props.style.results.map((result, index) => (
          <img src={result.photos[0].thumbnail_url} alt="first thumbail of style" key={index} />))}
      </div>
    </div>
  </div>
);

const Photos = () => (
  <div className="photoGallery">
    photoGallery
  </div>
);

export default ProductStyle;