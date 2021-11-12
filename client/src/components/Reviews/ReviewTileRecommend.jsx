import React from 'react';

const ReviewTileRecommend = (props) => {
  const { recommend } = props;
  if (recommend === true) {
    return (
      <div>
        I recommend this product!
      </div>
    );
  }
  return (<div> </div>);
};

export default ReviewTileRecommend;