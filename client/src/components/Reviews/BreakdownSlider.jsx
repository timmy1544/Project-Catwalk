import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

const charText = {
  Size: {
    1: 'A size too small',
    2: '1/2 a size too small',
    3: 'Perfect',
    4: '1/2 a size too big',
    5: 'A size too big',
  },
  Width: {
    1: 'Too narrow',
    2: 'Slightly narrow',
    3: 'Perfect',
    4: 'Slightly wide',
    5: 'Too wide',
  },
  Comfort: {
    1: 'Uncomfortable',
    2: 'Slightly Uncomfortable',
    3: 'Ok',
    4: 'Comfortable',
    5: 'Perfect',
  },
  Quality: {
    1: 'Poor',
    2: 'Below average',
    3: 'What I expected',
    4: 'Pretty great',
    5: 'Perfect',
  },
  Length: {
    1: 'Runs Short',
    2: 'Runs slightly Short',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
  Fit: {
    1: 'Runs tight',
    2: 'Runs slightly tight',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
};

const marksHelper = (title) => (
  [
    {
      value: 1,
      label: charText[title][1],
    },
    {
      value: 3,
      label: charText[title][3],
    },
    {
      value: 5,
      label: charText[title][5],
    },
  ]
);

const BreakdownSlider = (props) => {
  const { title, characteristics } = props;
  if (title === undefined || characteristics === undefined) {
    return (
      <div> </div>
    );
  }
  const marks = marksHelper(title);
  const value = parseFloat(characteristics[title].value, 10);

  return (
    <div id="Review_breakdown_sliders">
      <Box sx={{ width: 230 }}>
        <Typography gutterBottom>
          {title}
        </Typography>
        <Slider
          aria-label={title}
          defaultValue={value}
          valueLabelDisplay="auto"
          marks={marks}
          min={1}
          max={5}
          track={false}
          disabled
          size="small"
        />
      </Box>
    </div>
  );
};

export default BreakdownSlider;