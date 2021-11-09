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
  const trueNum = parseInt(recommended.true, 10);
  const falseNum = parseInt(recommended.false, 10);
  return (100 * trueNum) / (trueNum + falseNum);
};

const BarChartHelper = (ratings) => {
  const dataArr = [];
  // eslint-disable-next-line guard-for-in
  for (const i in ratings) {
    const arr = [`${i} Stars`, parseInt(ratings[i], 10)];
    dataArr.push(arr);
  }
  return [['stars', 'numbers']].concat(dataArr);
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

  return (
    <div>
      <h3> Reviews and Ratings </h3>
      Average Rating:
      {aveRating}
      <Rating id="ReviewStars" name="read-only" value={aveRating} precision={0.25} readOnly />
      <div>{`${recommendPercentage}% user recommend this product`}</div>
      <Chart
        width="500px"
        height="300px"
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={barchartData}
        options={{
          // title: 'Population of Largest U.S. Cities',
          chartArea: { width: '50%' },
          // hAxis: {
          //   title: 'Total Population',
          //   minValue: 0,
          // },
          legend: 'none',
          hAxis: {
            gridlines: {
              color: 'transparent',
            },
            textPosition: 'none',
          },
        }}
      />
      <div>char bar</div>
    </div>
  );
};

export default Breakdown;