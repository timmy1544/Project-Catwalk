/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import Styles from './Styles';
import axios from 'axios';

const Product = ({ relatedId }) => {
  const [product, setProduct] = useState([]);
  const [features, setFeatures] = useState([]);
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    axios.get(`/products/${relatedId}`)
      .then((results) => {
        setProduct(results.data);
        // setFeatures(results.data.features);
      })
      .catch((err) => console.log(err));
  }, [relatedId]);

  // console.log(relatedId)
  // console.log(features, 'features')
  const {
    id, name, category, default_price,
  } = product;

  // const styleComponent = styles.results.map((style) => {
  //   console.log(style);
  //   return (
  //     <Styles
  //     />
  //   )
  // })
  // console.log(styles.results, 'RESULTS')
  // console.log(relatedId)
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