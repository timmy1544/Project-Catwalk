import React, { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import AddOutfit from './AddOutfit';
import OFstarRating from './OFstarRating'
import axios from 'axios';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const OutfitCard = ({ outfitList, productId, removeItem }) => {
  return (
    <div key={`outfitItem-${outfitList.product.created_at}`} className="outfit-card">
      <div className="outfit-card__body" key={outfitList.product.created_at}>
        <div className="outfit-card-IMGcontainer">
          <div className="cancel-placeholder__top-right">
            <CancelRoundedIcon sx={{ fontSize: 40 }} onClick={() => removeItem(outfitList.product.id)} />
          </div>
          <div className="outfit-card__image">
            <img alt={outfitList.product.name} src={(outfitList.photos === null) ? "https://stalbertseniors.ca/wp-content/uploads/2019/10/image-coming-soon.jpg" : outfitList.photos} className="outfit-card__image" />
          </div>
        </div>
        <div>
          <p className="product-card__category">{outfitList.product.category}</p>
          <p className="product-card__name">{outfitList.product.name}</p>
          <p className="product-card__price">${outfitList.product.default_price}</p>
        </div>
        <OFstarRating
          ratingResults={outfitList.ratings}
        />
      </div>
    </div>
  );
};

export default OutfitCard;