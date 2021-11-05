import React from 'react';
import { Rating } from '@mui/material';

const StarRating = ({ ratingResults }) => {
  let totalRating = 0;

  ratingResults.forEach((item) => {
    const rateNum = item.rating;
    if (typeof rateNum === 'number' && rateNum !== 0) {
      totalRating += rateNum;
    }
  });

  const { length } = ratingResults;
  const stars = totalRating / length;

  return (
    <div>
      <Rating
        name="read-only"
        value={stars}
        readOnly
      />
    </div>
  );
};

export default StarRating;