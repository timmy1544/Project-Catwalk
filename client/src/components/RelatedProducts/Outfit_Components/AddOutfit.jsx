import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddOutfit = ({ outfitItem, addOutfit }) => {
  const [outfitList, setOutfitList] = useState([]);

  function addComponent() {
    return setOutfitList(prevList => [...prevList, <Outfit />]);
  }

  return (
    <div className="add-outfit-card">
      <div className="outfit-card__body">
        <div id="OF-add-to-outfit">
          Add to Outfit
        </div>
        {/* <img className="outfit__overlay__plusIcon" alt="" /> */}
        <div className="outfit-card-IMGcontainer">
          <h3 className="plusIcon-placeholder__center"><Fab color="secondary" aria-label="add">
            <AddIcon />
          </Fab></h3>
          {/* <button type="button" >click to add</button> */}
          <img className="outfit__image" alt="" />
        </div>
      </div>
    </div >
  )
};

export default AddOutfit;