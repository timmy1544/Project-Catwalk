import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import OutfitCard from './OutfitCard';
import AddOutfit from './AddOutfit';

const OutFitList = ({ productId }) => {
  const [outfitItem, setOutfitItem] = useState({
    product: [],
    reviews: [],
    ratings: [],
    features: [],
    photos: '',
  })
  let [outfitList, setOutfitList] = useState([]);


  const OFsettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const getProduct = useCallback(async () => {
    const getCurrentlyViewedProduct = await axios.get(`/products/${productId}`);
    const getCurrentlyViewedRating = await axios.get(`/reviews/${productId}`);
    const getCurrentlyViewedPhotos = await axios.get(`/products/${productId}/styles`);

    axios.all([getCurrentlyViewedProduct, getCurrentlyViewedRating, getCurrentlyViewedPhotos])
      .then(axios.spread((...allResponseData) => {
        const mainProduct = allResponseData[0].data;
        const mainFeatures = allResponseData[0].data.features;
        const mainReviews = allResponseData[1].data;
        const mainRatings = allResponseData[1].data.results;
        const mainPhotos = allResponseData[2].data.results[0].photos[0].url;

        setOutfitItem({
          product: mainProduct,
          reviews: mainReviews,
          ratings: mainRatings,
          features: mainFeatures,
          photos: mainPhotos
        })

      }))

  }, [])

  useEffect(() => {
    getProduct();
  }, [productId])

  const addOutfit = (item) => {
    setOutfitList(outfitList = [...outfitList, item])
  }

  const removeItem = (itemId) => {
    console.log(itemId, 'ITEM ID INSIDE REMOVE ITEM')
    for (let key in outfitList) {
      console.log(key, 'key')
      console.log(outfitList[key], 'atKEY')
    }
  }

  console.log(outfitList, 'OUTFITS ARRAY')

  const userOutfits = outfitList.map((outfit, i) => {

    return (
      <div className="outfitProduct-wrapper" key={`outfit-${i}`}>
        <OutfitCard
          productId={productId}
          outfitItem={outfitItem}
          removeItem={removeItem}
          key={`ProductId-${productId}`}
        />
      </div>
    )
  })

  return (
    <div id="outfit-Container">
      <AddOutfit
        outfitItem={outfitItem}
        addOutfit={addOutfit}
        key={`current-${productId}`}
      />
      <div className="outfit-wrapper">
        <Slider {...OFsettings}>
          {userOutfits.length ? userOutfits : null}
        </Slider>
      </div>
    </div>
  );
}

export default OutFitList;