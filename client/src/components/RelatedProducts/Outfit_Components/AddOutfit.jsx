import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddOutfit = ({ outfitItem, addOutfit }) => (
  <div className="add-outfit-card">
    <div className="outfit-card__body">
      <div id="OF-add-to-outfit">
        Add to Outfit
      </div>
      <div className="outfit-card-IMGcontainer">
        <h3 className="plusIcon-placeholder__center">
          <Fab color="secondary" aria-label="add">
            <AddIcon onClick={() => addOutfit(outfitItem)} />
          </Fab>
        </h3>
        <img className="outfit__image" alt="" src={outfitItem.photos === null ? 'https://stalbertseniors.ca/wp-content/uploads/2019/10/image-coming-soon.jpg' : outfitItem.photos} />
      </div>
      <div id="add-outfit-name">
        {outfitItem.product.name}
      </div>
    </div>
  </div>
);

export default AddOutfit;