/* eslint-disable guard-for-in */
import React from 'react';
import Rating from '@mui/material/Rating';
import { Chart } from 'react-google-charts';

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
  const dataArr = [];
  // eslint-disable-next-line guard-for-in
  for (let i = 1; i <= 5; i += 1) {
    const starNum = parseInt(ratings[i], 10) || 0;
    const arr = [`${i} Stars`, starNum];
    dataArr.push(arr);
  }
  return [['stars', 'numbers']].concat(dataArr);
};

const CharHelper = (characteristics) => {
  const dataArr = [];
  for (const i in characteristics) {
    const value = parseFloat(characteristics[i].value, 10);
    const arr = [i, value];
    dataArr.push(arr);
  }
  return [['characteristic', 'rating']].concat(dataArr);
};

const Breakdown = (props) => {
  const { meta } = props;
  if (Object.keys(meta).length === 0) {
    return (
      <div> </div>
    );
  }
  const { ratings, recommended, characteristics} = meta;
  const aveRating = parseFloat(AverageRatingsHelper(ratings).toFixed(1), 10);
  const recommendPercentage = parseFloat(RecommendHelper(recommended).toFixed(0), 10);
  const barchartData = BarChartHelper(ratings);
  const charData = CharHelper(characteristics);

  return (
    <div id="Review_breakdown">
      {aveRating}
      <Rating id="ReviewStars" name="read-only" value={aveRating} precision={0.25} readOnly />
      <div>{`${recommendPercentage}% user recommend this product`}</div>
      <Chart
        width="220px"
        height="220px"
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={barchartData}
        options={{
          chartArea: { width: '50%' },
          legend: 'none',
          hAxis: {
            gridlines: {
              color: 'transparent',
            },
            textPosition: 'none',
          },
        }}
      />
      {'\n'}
      <Chart
        width="220px"
        height="220px"
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={charData}
        options={{
          chartArea: { width: '50%' },
          legend: 'none',
          hAxis: {
            gridlines: {
              color: 'transparent',
            },
            textPosition: 'none',
          },
        }}
      />
    </div>
  );
};

export default Breakdown;