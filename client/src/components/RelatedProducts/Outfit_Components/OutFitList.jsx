import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import OutfitCard from './OutfitCard';
import AddOutfit from './AddOutfit';

const OutFitList = ({ productId }) => {
  const [outfitItem, setOutfitItem] = useState({
    product: [],
    reviews: [],
    ratings: [],
    features: []
  })
  const [outfitList, setOutfitList] = useState([]);


  const getProduct = useCallback(async () => {
    const getCurrentlyViewedProduct = await axios.get(`/products/${productId}`);
    const getCurrentlyViewedRating = await axios.get(`/reviews/${productId}`);

    axios.all([getCurrentlyViewedProduct, getCurrentlyViewedRating])
      .then(axios.spread((...allResponseData) => {
        const mainProduct = allResponseData[0].data;
        const mainFeatures = allResponseData[0].data.features;
        const mainReviews = allResponseData[1].data;
        const mainRatings = allResponseData[1].data.results;

        setOutfitItem({
          product: mainProduct,
          reviews: mainReviews,
          ratings: mainRatings,
          features: mainFeatures
        })

      }))

  }, [])

  useEffect(() => {
    getProduct();
  }, [productId])

  const addOutfit = (item) => {
    setOutfitList(prevState = [...prevState, item])
  }

  const userOutfits = outfitList.map((outfit) => {
    return (
      <OutfitCard
        productId={productId}
        outfitItem={outfitItem}
        key={`ProductId-${productId}`}
      />
    )
  })

  return (
    <div className="outfit-wrapper">
      <AddOutfit
        outfitItem={outfitItem}
        addOutfit={addOutfit}
      />
      {userOutfits.length ? userOutfits : null}
    </div>
  );
}

export default OutFitList;