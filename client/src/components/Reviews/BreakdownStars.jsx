import React from 'react';
import { Box, Slider } from '@mui/material';

const BreakdownStars = (props) => {
  const { star, barchartData } = props;
  if (star === undefined || barchartData === undefined) {
    return (
      <div> </div>
    );
  }

  return (
    <div id="Review_breakdown_barchart">
      <div id="Review_breakdown_starText">
        {`${star} Stars`}
      </div>
      <Box sx={{ width: 250 }}>
        <Slider
          id="Review_breakdown_bar"
          defaultValue={barchartData[star]}
          min={0}
          max={barchartData.max}
          disabled
        />
      </Box>
    </div>
  );
};

export default BreakdownStars;