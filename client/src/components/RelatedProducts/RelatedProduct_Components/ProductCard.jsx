import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import StylePhotos from './StylePhotos';
import StarRating from './StarRating';
import ComparisonModal from './ComparisonModal';

const ProductCard = ({ relatedId, productId, IDchanger }) => {
  const [product, setProduct] = useState({
    products: [],
    ratings: [],
    features: [],
    mainFeatures: [],
    mainProduct: []
  });
  const isMountedRef = useRef(null)

  // ASYNC W/ AXIOS.ALL
  const getRelatedProducts = useCallback(async () => {
    const getProducts = await axios.get(`/products/${relatedId}`);
    const getRatings = await axios.get(`/reviews/${relatedId}`);
    const getMainProductFeatures = await axios.get(`/products/${productId}`)

    axios.all([getProducts, getRatings, getMainProductFeatures])
      .then(axios.spread((...allResponseData) => {
        const allProducts = allResponseData[0].data;
        const allFeatures = allResponseData[0].data.features;
        const allRatings = allResponseData[1].data.results;
        const allMainFeatures = allResponseData[2].data.features
        const mainProduct = allResponseData[2].data

        setProduct({
          products: allProducts,
          ratings: allRatings,
          features: allFeatures,
          mainFeatures: allMainFeatures,
          mainProduct: mainProduct
        });
      }));
  }, [relatedId, productId])

  useEffect(() => {
    isMountedRef.current = true;
    if (isMountedRef.current) {
      getRelatedProducts();
    }
    return () => isMountedRef.current = false;
  }, [relatedId, productId]);

  const {
    id, name, category, default_price,
  } = product.products;

  const defaultPrice = `$${default_price}`;


  return (
    <div key={id} className="product-card" >
      <div className="product-card__body" >
        <div className="product-card-IMGcontainer" >
          <div className="star-placeholder__top-right">
            <ComparisonModal
              features={product.features}
              mainFeatures={product.mainFeatures}
              productObj={product.mainProduct}
              relatedProductsObj={product.products}
            />
          </div>
          <StylePhotos
            key={relatedId}
            styleId={id}
            IDchanger={() => IDchanger(relatedId)}
          />
        </div>
        <p className="product-card__category">{category}</p>
        <p className="product-card__name">{name}</p>
        <p className="product-card__price">{defaultPrice}</p>
        <StarRating
          ratingResults={product.ratings}
        />
      </div>
    </div>
  );
};

export default ProductCard;




// MOST CURRENT COPY
  // ASYNC W/ AXIOS.ALL
  // const getRelatedProducts = useCallback(async () => {
  //   const getProducts = await axios.get(`/products/${relatedId}`);
  //   const getRatings = await axios.get(`/reviews/${relatedId}`);
  //   const getMainProductFeatures = await axios.get(`/products/${productId}`)

  //   axios.all([getProducts, getRatings, getMainProductFeatures])
  //     .then(axios.spread((...allResponseData) => {
  //       const allProducts = allResponseData[0].data;
  //       const allFeatures = allResponseData[0].data.features;
  //       const allRatings = allResponseData[1].data.results;
  //       const allMainFeatures = allResponseData[2].data.features
  //       const mainProduct = allResponseData[2].data

  //       setProduct({
  //         products: allProducts,
  //         ratings: allRatings,
  //         features: allFeatures,
  //         mainFeatures: allMainFeatures,
  //         mainProduct: mainProduct
  //       });
  //     }));
  // }, [])

  // useEffect(() => {
  //   getRelatedProducts();
  //   return () => console.log('cleanup')
  // }, [relatedId, productId]);

  // ASYNC TEST 1
  // const getRelatedProducts = useCallback(async () => {
  //   let productsResponse = await axios.get(`/products/${relatedId}`)
  //   let reviewResponse = await axios.get(`/reviews/${relatedId}`)

  //   setProduct(productsResponse.data)
  //   setFeatures(productsResponse.data.features)
  //   setRatings(reviewResponse.data.results)
  // }, [relatedId])


  // ASYNC W/ AXIOS.ALL
  // const getRelatedProducts = useCallback(async () => {
  //   const getProducts = await axios.get(`/products/${relatedId}`);
  //   const getRatings = await axios.get(`/reviews/${relatedId}`);

  //   axios.all([getProducts, getRatings])
  //     .then(axios.spread((...allResponseData) => {
  //       const allProducts = allResponseData[0].data;
  //       const allFeatures = allResponseData[0].data.features;
  //       const allRatings = allResponseData[1].data.results;

  //       setProduct(allProducts);
  //       setRatings(allRatings);
  //       setFeatures(allFeatures);
  //     }));
  // }, [relatedId])

  // AXIOS.ALL TEST
  // const getRelatedProducts = () => {
  //   const getProducts = axios.get(`/products/${relatedId}`);
  //   const getRatings = axios.get(`/reviews/${relatedId}`);

  //   axios.all([getProducts, getRatings])
  //     .then(axios.spread((...allResponseData) => {
  //       const allProducts = allResponseData[0].data;
  //       const allFeatures = allResponseData[0].data.features;
  //       const allRatings = allResponseData[1].data.results;

  //       setProduct(allProducts);
  //       setRatings(allRatings);
  //       setFeatures(allFeatures);
  //     }));

  // };