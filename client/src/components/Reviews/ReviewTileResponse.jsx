import React from 'react';

const ReviewTileResponse = (props) => {
  const { response } = props;
  if (response !== null) {
    return (
      <div>
        <div id="Review_tile_responseTitle"> Response </div>
        {response}
      </div>
    );
  }
  return (<div> </div>);
};

export default ReviewTileResponse;