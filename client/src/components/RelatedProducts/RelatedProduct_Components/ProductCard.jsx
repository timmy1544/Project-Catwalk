import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import StylePhotos from './StylePhotos';
import StarRating from './StarRating';
import ComparisonModal from './ComparisonModal';

const ProductCard = ({ relatedId, productId, IDchanger, mainProduct }) => {
  const [product, setProduct] = useState({
    products: [],
    ratings: [],
    features: [],
  });

  useEffect(() => {
    let controller = new AbortController;

    const getRelatedProducts = async () => {
      try {
        const getProducts = await axios.get(`/products/${relatedId}`, { controller: controller.signal });
        const getRatings = await axios.get(`/reviews/${relatedId}`, { controller: controller.signal });

        axios.all([getProducts, getRatings])
          .then(axios.spread((...allResponseData) => {
            const allProducts = allResponseData[0].data;
            const allFeatures = allResponseData[0].data.features;
            const allRatings = allResponseData[1].data.results;

            setProduct({
              products: allProducts,
              ratings: allRatings,
              features: allFeatures,
            });
            controller = null;
          }));
      } catch (error) {
        console.error(error, 'Error in axios Product card', 'ERROR STATUS:', error.response.status)
      }
    }
    getRelatedProducts();

    return () => {
      controller?.abort()
    }
  }, [productId, relatedId]);

  const {
    id, name, category, default_price,
  } = product.products;

  const defaultPrice = `$${default_price}`;
  // console.log('product name:', product.products.name)
  // console.log('product ID:', relatedId)
  return (
    <div key={id} className="product-card" >
      <div className="product-card__body" >
        <div className="product-card-IMGcontainer" >
          <div className="star-placeholder__top-right">
            <ComparisonModal
              features={product.features}
              mainFeatures={mainProduct.mainFeatures}
              productObj={mainProduct.mainProduct}
              relatedProductsObj={product.products}
            />
          </div>
          <StylePhotos
            key={relatedId}
            styleId={id}
            IDchanger={() => IDchanger(relatedId)}
          />
        </div>
        <div onClick={() => IDchanger(relatedId)}>

          <p className="product-card__category">{category}</p>
          <p className="product-card__name">{name}</p>
          <p className="product-card__price">{defaultPrice}</p>
        </div>
        <StarRating
          ratingResults={product.ratings}
        />
      </div>
    </div>
  );
};

export default ProductCard;



  // // ASYNC W/ AXIOS.ALL
  // const getRelatedProducts = useCallback(async () => {
  //   try {
  //     const getProducts = await axios.get(`/products/${relatedId}`);
  //     const getRatings = await axios.get(`/reviews/${relatedId}`);
  //     const getMainProductFeatures = await axios.get(`/products/${productId}`)

  //     axios.all([getProducts, getRatings, getMainProductFeatures])
  //       .then(axios.spread((...allResponseData) => {
  //         const allProducts = allResponseData[0].data;
  //         const allFeatures = allResponseData[0].data.features;
  //         const allRatings = allResponseData[1].data.results;
  //         const allMainFeatures = allResponseData[2].data.features
  //         const mainProduct = allResponseData[2].data

  //         setProduct({
  //           products: allProducts,
  //           ratings: allRatings,
  //           features: allFeatures,
  //           mainFeatures: allMainFeatures,
  //           mainProduct: mainProduct
  //         });
  //       }));
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }, [relatedId, productId])
  // // [relatedId, productId]

  // //  USE EFFECT 3 TIMES???
  // useEffect(() => {
  //   getRelatedProducts();

  //   return () => {
  //     console.log('CLEAN THIS COMPONENT UP')
  //   }
  // }, [productId]);


// USE AS BACKUP

//   import React, { useState, useEffect, useCallback, useRef } from 'react';
// import axios from 'axios';
// import StylePhotos from './StylePhotos';
// import StarRating from './StarRating';
// import ComparisonModal from './ComparisonModal';

// const ProductCard = ({ relatedId, productId, IDchanger }) => {
//   const [product, setProduct] = useState({
//     products: [],
//     ratings: [],
//     features: [],
//   });

//   // ORIGINAL
//   //   const [product, setProduct] = useState({
//   //   products: [],
//   //   ratings: [],
//   //   features: [],
//   //   mainFeatures: [],
//   //   mainProduct: []
//   // });

//   const [mainProduct, setMainProduct] = useState({
//     mainFeatures: [],
//     mainProduct: []
//   })
//   // const isMountedRef = useRef(null)
//   const [isLoading, setIsLoading] = useState(true);


//   // ASYNC W/ AXIOS.ALL
//   const getRelatedProducts = useCallback(async () => {
//     try {
//       const getProducts = await axios.get(`/products/${relatedId}`);
//       const getRatings = await axios.get(`/reviews/${relatedId}`);
//       // const getMainProductFeatures = await axios.get(`/products/${productId}`)

//       axios.all([getProducts, getRatings, getMainProductFeatures])
//         .then(axios.spread((...allResponseData) => {
//           const allProducts = allResponseData[0].data;
//           const allFeatures = allResponseData[0].data.features;
//           const allRatings = allResponseData[1].data.results;
//           // const allMainFeatures = allResponseData[2].data.features
//           // const mainProduct = allResponseData[2].data

//           setProduct({
//             products: allProducts,
//             ratings: allRatings,
//             features: allFeatures,
//             // mainFeatures: allMainFeatures,
//             // mainProduct: mainProduct
//           });
//         }));
//     } catch (error) {
//       console.error(error)
//     }
//   }, [])

//   useEffect(() => {
//     const getMainProducts = async () => {
//       let controller = new AbortController();
//       try {
//         const getMainProductFeatures = await axios.get(`/products/${productId}`, { signal: controller.signal })
//           .then(({ data }) => {
//             // console.log(data)
//             setMainProduct({
//               mainFeatures: data.features,
//               mainProduct: data
//             });
//             controller = null;
//           })
//       } catch (error) {
//         console.error(error)
//       }
//     }
//     getMainProducts();

//     return () => {
//       controller?.abort;
//     }

//   }, [])
//   // [relatedId, productId]

//   //  USE EFFECT 3 TIMES???
//   useEffect(() => {
//     getRelatedProducts();
//     // getMainProducts();

//     return () => {
//       console.log('CLEAN THIS COMPONENT UP')
//     }
//   }, []);

//   const {
//     id, name, category, default_price,
//   } = product.products;

//   const defaultPrice = `$${default_price}`;
//   console.log(relatedId, '<<RelatedID>>')
//   // console.log(product)

//   return (
//     <div key={id} className="product-card" >
//       <div className="product-card__body" >
//         <div className="product-card-IMGcontainer" >
//           <div className="star-placeholder__top-right">
//             <ComparisonModal
//               features={product.features}
//               mainFeatures={product.mainFeatures}
//               productObj={product.mainProduct}
//               relatedProductsObj={product.products}
//             />
//           </div>
//           <StylePhotos
//             key={relatedId}
//             styleId={id}
//             IDchanger={() => IDchanger(relatedId)}
//           />
//         </div>
//         <div onClick={() => IDchanger(relatedId)}>

//           <p className="product-card__category">{category}</p>
//           <p className="product-card__name">{name}</p>
//           <p className="product-card__price">{defaultPrice}</p>
//         </div>
//         <StarRating
//           ratingResults={product.ratings}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductCard;