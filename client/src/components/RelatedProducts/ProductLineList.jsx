/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductLineList = ({ productId }) => {
  const currentId = productId;
  const [relatedProductIds, setrelatedProductIds] = useState([]);
  const [products, setProducts] = useState([]);
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    axios.get(`/products/${currentId}/related`)
      .then((results) => {
        setrelatedProductIds(results.data);
      })
      .then(axios.get(`/products/${relatedProductIds}`)
        .then((results) => {
          setProducts(results.data);
        }))
      .catch((err) => console.error(err));
  }, []);

  // useEffect(() => {
  //   axios.get(`/products/${relatedProductIds}/styles`)
  //     .then((results) => {
  //       console.log(results)
  //       setStyles(results.data);
  //     })
  // })

  console.log(relatedProductIds)

  const product = products.map((item) => {
    const {
      id, name, slogan,
      description, default_price,
      category,
    } = item;

    return (
      <div key={id}>
        <p>{category}</p>
        <h3>{name}</h3>
        <p>{default_price}</p>
      </div>
    );
  });

  return (
    <div className="related-products">
      {product}
    </div>
  );
};


export default ProductLineList;