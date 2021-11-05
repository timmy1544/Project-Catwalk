/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { BiCool } from 'react-icons/bi';

const ProductSlogan = ({ product }) => (
  <div className="slogan">
    <div />
    <div className="productDescription">
      <div className="sloganText">{product.slogan}</div>
      <div className="descriptionText">{product.description}</div>
    </div>
    <div className="productFeature">
      {product.features.map((item, index) => (
        <div key={index}>
          <div>
            <BiCool className="featureIcon" size={20} />
            {' '}
            {item.feature}
            :
            {' '}
            {item.value}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductSlogan;