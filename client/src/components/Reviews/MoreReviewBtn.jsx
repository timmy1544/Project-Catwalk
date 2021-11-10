import React from 'react';

const MoreReviewBtn = (props) => {
  const { reviews, handleMoreReviewsClick, moreReviewtext } = props;
  if (reviews.length > 2) {
    return (
      <button type="button" id="Review_Btn" onClick={handleMoreReviewsClick}>
        {moreReviewtext}
      </button>
    );
  }
  return (
    <div> </div>
  );
};

export default MoreReviewBtn;