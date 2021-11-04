/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarRating = ({ ratingResults }) => {
  // const [starRating, setStarRating] = useState([]);
  const [ratingTotal, setRatingTotal] = useState(0);
  // const ratings = ratingResults.results;
  // if (props.rating.length) {
  //   setStarRating(props.rating);
  // }
  // let starRating = totalRating;
  // useEffect(() => {
  //   // setStarRating(ratingResults)
  //   setRatingTotal(ratingResults.rating)
  // }, [ratingResults]);

  // let totalRating = 0;
  // const ratingLength = rating.length;

  // const starRating = totalRating / ratingLength;

  // if (rating.length >= 1) {
  //   // console.log(rating.length);

  //   rating.forEach((item) => {
  //     const currentRating = item.rating;
  //     totalRating += currentRating;
  //   });
  // }
  let totalRating = 0;
  ratingResults.forEach((item) => {
    const rateNum = item.rating;
    if (typeof rateNum === 'number' && rateNum !== 0) {
      totalRating += rateNum;
    }
  });

  const { length } = ratingResults;

  const stars = totalRating / length;

  console.log(stars);
  // console.log(ratingLength, 'CURRENT LENGTH')
  // console.log(ratings, 'THESE ARE THE RATING OBJECTS')
  // console.log(ratingId)
  return (
    <div>
      <p>{stars}</p>
    </div>
  );
};

export default StarRating;