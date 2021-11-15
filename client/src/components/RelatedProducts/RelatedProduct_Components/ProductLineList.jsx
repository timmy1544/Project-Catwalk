// USING HOOKS
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import ProductSlider from './ProductSlider';

const ProductLineList = ({ productId, IDchanger }) => {
  const [relatedProductIds, setrelatedProductIds] = useState([]);
  const [mainProduct, setMainProduct] = useState({
    mainFeatures: [],
    mainProduct: []
  })

  useEffect(() => {
    const relatedUrl = `/products/${productId}/related`;

    let controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const response = await axios.get(relatedUrl, {
          signal: controller.signal
        })
          .then((results) => {
            setrelatedProductIds([...new Set(results.data)]);
            controller = null;
          })
      } catch (error) {
        console.error(error)
      }
    }
    fetchProducts();

    return () => {
      controller?.abort();
    }
  }, [productId]);

  // SECOND USE EFFECT TO GET INITAL PRODUCT
  useEffect(() => {
    let controller = new AbortController();
    const mainProductUrl = `/products/${productId}`;

    const getMainProducts = async () => {
      try {
        const getMainProductFeatures = await axios.get(mainProductUrl, { signal: controller.signal })
          .then(({ data }) => {
            setMainProduct({
              mainFeatures: data.features,
              mainProduct: data
            });
            controller = null;
          })
      } catch (error) {
        console.error(error)
      }
    }
    getMainProducts();

    return () => {
      controller?.abort;
    }

  }, [productId])

  const filterIDs = relatedProductIds.filter(id => {
    return id !== productId
  })

  const relatedProduct = filterIDs.map((item) => {
    return (
      <ProductCard
        key={item}
        relatedId={item}
        productId={productId}
        IDchanger={IDchanger}
        mainProduct={mainProduct}
      />
    );
  });

  return (
    <div className="relatedProduct-wrapper">
      {/* <div id="RP_slider-wrapper"> */}
      {/* <Slider {...RPsettings}> */}
      <ProductSlider
        card={relatedProduct}
        key={`slider-${productId}`}
      />
      {/* {relatedProduct} */}
      {/* {filterIds} */}
      {/* {testFilter} */}
      {/* </Slider> */}
      {/* </div> */}
    </div>
  );
};

export default ProductLineList;
