import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const OutFitCard = () => {
  const outfitArr = [];

  if (outfitArr) {
    return (
      <div className="add-outfit-card">
        <div className="outfit-card__body">
          <h2>Add to Outfit</h2>
          {/* <img className="outfit__overlay__plusIcon" alt="" /> */}
          <div className="outfit-card-IMGcontainer">
            <h3 className="plusIcon-placeholder__center"><FaPlusCircle size={70} /></h3>
            <img className="outfit__image" alt="" />
          </div>
        </div>
      </div>
    );
  }
};

export default OutFitCard;
