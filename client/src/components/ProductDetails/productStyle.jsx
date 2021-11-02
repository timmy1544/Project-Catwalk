/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const ProductStyle = (props) => (
  <div>
    <Photos />
    <div className="styels">
      <div className="review">review goes here!</div>
      <div>{props.product.category}</div>
      <div>{props.product.name}</div>

    </div>
  </div>
);

const Photos = () => (
  <div>
    photoGallery
  </div>
);

export default ProductStyle;