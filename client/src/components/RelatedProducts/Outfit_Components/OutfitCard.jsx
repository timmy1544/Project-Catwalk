import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const OutFitCard = () => {
  const outfitArr = [];
  if (outfitArr) {
    return (
      <div className="add-outfit-card">
        <div className="outfit-card__body">
          <h2>Add Outfit Here</h2>
          {/* <img className="outfit__overlay__plusIcon" alt="" /> */}
          <h3 className="plusIcon"><FaPlusCircle size={70} /></h3>
          <img className="outfit__image" alt="" />
        </div>
      </div>
    );
  }
};

export default OutFitCard;