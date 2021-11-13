import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import OutfitCard from './OutfitCard';
import AddOutfit from './AddOutfit';
import Modal from 'react-bootstrap/Modal'

const OutFitList = ({ productId }) => {
  const [outfitItem, setOutfitItem] = useState({
    product: [],
    reviews: [],
    ratings: [],
    features: [],
    photos: '',
  })
  let [outfitList, setOutfitList] = useState([]);
  const [smShow, setSmShow] = useState(false);

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

  }, [productId])

  useEffect(() => {
    getProduct();
  }, [productId])

  const addOutfit = (item) => {
    const check = outfitList.some(el => {
      return el.product.id === item.product.id
    })

    if (check) {
      return setSmShow(true);
    } else {
      setOutfitList(outfitList = [...outfitList, item])

    }
  }

  const removeItem = (itemId) => {
    for (let key in outfitList) {
      const targetId = outfitList[key].product.id;
      if (targetId === itemId) {
        setOutfitList(prev => prev.filter((el) => el.product.id !== itemId))
      }
    }
  }

  const userOutfits = outfitList.map((outfit, i) => {

    return (
      <div className="outfitProduct-wrapper" key={`outfit-${i}`}>
        <OutfitCard
          productId={productId}
          outfitItem={outfitItem}
          outfitList={outfit}
          removeItem={removeItem}
          key={`ProductId-${productId}`}
        />
      </div>
    )
  })

  return (
    <div id="outfit-outer-container">
      <AddOutfit
        outfitItem={outfitItem}
        addOutfit={addOutfit}
        key={`current-${productId}`}
      />
      <div id="outfit-Container">
        <div className="outfit-wrapper">
          <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Hey! Listen here dude! >:(
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>"You already have {outfitItem.product.name} in your outfit!"</Modal.Body>
          </Modal>
          <div id="OF_slider-wrapper">
            {/* <Slider {...OFsettings}> */}
            {userOutfits.length ? userOutfits : null}
            {/* </Slider> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutFitList;