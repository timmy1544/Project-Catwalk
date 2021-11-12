import React, { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import AddOutfit from './AddOutfit';
import axios from 'axios';
import Outfit from './Outfit';

const OutfitCard = ({ outfitItem, productId }) => {
  const [outfitList, setOutfitList] = useState([]);
  const [photos, setPhotos] = useState([]);

  let imgUrl;
  let name;

  useEffect(() => {
    const photosUrl = `products/${productId}/styles`;
    let controller = new AbortController();

    const getPhotos = async () => {
      if (productId) {
        try {
          const photosResponse = await axios.get(photosUrl, {
            signal: controller.signal
          })
            .then((results) => {
              setPhotos(results.data.results);
              controller = null;
            })
        } catch (error) {
          console.error(error)
        }
      }
    }
    getPhotos();

    return () => {
      controller?.abort();
    }

  }, [productId]);


  if (photos[0]) {
    const photosArr = photos[0].photos;

    if (photosArr[0].url === null) {
      name = photos[0].name;
      imgUrl = 'https://stalbertseniors.ca/wp-content/uploads/2019/10/image-coming-soon.jpg'
    } else {
      name = photos[0].name;
      // imgUrl = photosArr[0].thumbnail_url;
      imgUrl = photos[0].url;
    }
  }


  console.log(imgUrl)
  return (
    <div key={`outfitItem-${outfitItem.product.created_at}`} className="outfit-card">
      <div className="outfit-card__body" key={outfitItem.product.created_at}>
        <div className="outfit-card-IMGcontainer">
          <div className="star-placeholder__top-right">
            <button type="button">x</button>
          </div>
          <img alt={name} src={imgUrl} />
        </div>
        <div>
          <p className="product-card__category">{outfitItem.product.category}</p>
          <p className="product-card__name">{outfitItem.product.name}</p>
          <p className="product-card__price">{outfitItem.product.default_price}</p>
        </div>
      </div>
    </div>
  );
};

export default OutfitCard;

      // <div className="product-card__body">
      //   <div className="product-card-IMGcontainer">
      //     <div className="star-placeholder__top-right">
      //       <ComparisonModal
      //         features={product.features}
      //         mainFeatures={product.mainFeatures}
      //         productObj={product.mainProduct}
      //         relatedProductsObj={product.products}
      //       />
      //     </div>
      //     <StylePhotos
      //       key={relatedId}
      //       styleId={id}
      //     />
      //   </div>
      //   <p className="product-card__category">{category}</p>
      //   <p className="product-card__name">{name}</p>
      //   <p className="product-card__price">{defaultPrice}</p>
      //   <StarRating
      //     ratingResults={product.ratings}
      //   />
      // </div>


  // return (
  //   <div className="add-outfit-card">
  //     <div className="outfit-card__body">
  //       <h2>Add to Outfit</h2>
  //       {/* <img className="outfit__overlay__plusIcon" alt="" /> */}
  //       <div className="outfit-card-IMGcontainer">
  //         <h3 className="plusIcon-placeholder__center"><FaPlusCircle size={70} /></h3>
  //         <button type="button" onClick={addComponent}>click to add</button>
  //         {outFits}
  //         <img className="outfit__image" alt="" />
  //       </div>
  //     </div>
  //   </div>
  // );