import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import AddOutfit from './AddOutfit';
import Outfit from './Outfit';

const OutfitCard = ({ outfitItem }) => {
  const [outfitList, setOutfitList] = useState([]);
  const [currentOutfit, setCurrentOutfit] = useState({
    outfitItem: outfitItem.product,
  });


  console.log(outfitList)

  return (
    <div className="product-card__body">
      <div className="product-card-IMGcontainer">
        <div className="star-placeholder__top-right">
          <button type="button"></button>
        </div>
        <img alt="img"></img>
      </div>
      <p className="product-card__category">category</p>
      <p className="product-card__name">name</p>
      <p className="product-card__price">default Price</p>
      {/* <StarRating
          ratingResults={product.ratings}
        /> */}
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