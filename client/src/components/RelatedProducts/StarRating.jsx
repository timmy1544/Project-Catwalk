/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const StarRating = ({ rating }) => {
  // const [starRating, setStarRating] = useState([]);

  // if (props.rating.length) {
  //   setStarRating(props.rating);
  // }
  // let starRating = totalRating;

  let totalRating = 0;
  const ratingLength = rating.length;

  const starRating = totalRating / ratingLength;

  if (rating.length >= 1) {
    // console.log(rating.length);

    rating.forEach((item) => {
      const currentRating = item.rating;
      totalRating += currentRating;
    });
  }
  // console.log(ratingLength, 'CURRENT LENGTH')

  return (
    <div>
      <p>{totalRating}</p>
    </div>
  );
};

export default StarRating;