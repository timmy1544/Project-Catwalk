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
    <div>
      <Box sx={{ width: 230 }} id="Review_breakdown_starText">
        <div id="Review_breakdown_starText">
          {`${star} Stars`}
        </div>
        <Slider defaultValue={barchartData[star]} min={0} max={barchartData.max} disabled />
      </Box>
    </div>
  );
};

export default BreakdownStars;