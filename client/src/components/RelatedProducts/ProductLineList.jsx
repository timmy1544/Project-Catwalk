/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductLineList = ({ productId }) => {
  const currentId = productId;
  const [relatedProductIds, setrelatedProductIds] = useState([]);
  const [products, setProducts] = useState([]);
  const [productStyles, setProductStyles] = useState([]);

  useEffect(() => {
    async function fetchData() {

      try {
        const getRelatedProducts = await axios.get(`/products/${currentId}/related`)
        setrelatedProductIds(getRelatedProducts.data);
        console.log(getRelatedProducts.data, 'GET RELATED PRODUCTS')

        const getRelatedProductIds = await axios.get(`/products/${relatedProductIds}`)
        setProducts(getRelatedProductIds.data);

        const getStyles = await axios.get(`/products/${relatedProductIds}/styles`)
        console.log(getStyles)
        setProductStyles(getStyles.data);
      }
      catch (err) {
        console.error(err)
      }

    }
    fetchData()
  }, [currentId]);


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



      // const getStyles = await axios.get(`/products/${relatedProductIds}/styles`);
      // setStyles(getStyles.data)
      // return request;
      //     .then((results) => {
      //       setrelatedProductIds(results.data);
      //     })
      //     .then(axios.get(`/products/${relatedProductIds}`)
      //       .then((results) => {
      //         setProducts(results.data);
      //       }))
      //     .catch((err) => console.error(err));
    // }