/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
import React from 'react';
import Rating from '@mui/material/Rating';
import { Chart } from 'react-google-charts';
import BreakdownStars from './BreakdownStars';
import BreakdownSlider from './BreakdownSlider';

const AverageRatingsHelper = (ratings) => {
  let count = 0;
  let sum = 0;
  // eslint-disable-next-line guard-for-in
  for (const i in ratings) {
    count += parseInt(ratings[i], 10);
    sum += parseInt(ratings[i], 10) * parseInt(i, 10);
  }
  return sum / count;
};

const RecommendHelper = (recommended) => {
  const trueNum = parseInt(recommended.true, 10) || 0;
  const falseNum = parseInt(recommended.false, 10) || 0;
  return (100 * trueNum) / (trueNum + falseNum);
};

const BarChartHelper = (ratings) => {
  const obj = { max: 0 };
  for (let i = 1; i < 6; i += 1) {
    const star = parseInt(ratings[i], 10) || 0;
    obj[i] = star;
    if (star > obj.max) {
      obj.max = star;
    }
  }
  return obj;
};

// const CharHelper = (characteristics) => {
//   const dataArr = [];
//   for (const i in characteristics) {
//     const value = parseFloat(characteristics[i].value, 10);
//     const arr = [i, value];
//     dataArr.push(arr);
//   }
//   return [['characteristic', 'rating']].concat(dataArr);
// };

const Breakdown = (props) => {
  const { meta } = props;
  if (Object.keys(meta).length === 0) {
    return (
      <div> </div>
    );
  }
  const { ratings, recommended, characteristics } = meta;
  const aveRating = parseFloat(AverageRatingsHelper(ratings).toFixed(1), 10);
  const recommendPercentage = parseFloat(RecommendHelper(recommended).toFixed(0), 10);
  const barchartData = BarChartHelper(ratings);
  // const charData = CharHelper(characteristics);

  return (
    <div id="Review_breakdown">
      <div id="Review_breakdown_overview">
        <span id="Review_aveRating">{aveRating}</span>
        <Rating id="Review_stars" name="read-only" value={aveRating} precision={0.25} readOnly />
        <div>{`${recommendPercentage}% user recommend this product`}</div>
      </div>
      <div id="Review_breakdown_break"> </div>
      <div>
        {[1, 2, 3, 4, 5].map((star, index) =>
          <BreakdownStars star={star} key={index} barchartData={barchartData} />)}
      </div>
      <div id="Review_breakdown_break"> </div>
      <div>
        {Object.keys(characteristics).map((title, index) =>
          <BreakdownSlider title={title} key={index} characteristics={characteristics} />)}
      </div>
    </div>

  );
};

export default Breakdown;