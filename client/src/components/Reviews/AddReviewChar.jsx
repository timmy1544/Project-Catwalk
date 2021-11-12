/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Box, Slider } from '@mui/material';

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

const marksHelper = (charObj) => {
  const arr = [];
  for (let i = 1; i < 6; i += 1) {
    const obj = {
      value: i,
      label: charObj[i],
    };
    arr.push(obj);
  }
  return arr;
};

const AddReviewChar = (props) => {
  const { characteristics, charItem } = props;
  const [char, setChar] = useState(characteristics);

  const valueText = (value, id) => {
    if (char[id] !== value) {
      console.log(value, id);
      char[id] = value;
      setChar(char);
    }
  };

  return (
    <label htmlFor="characteristics" id="Review_form_char">
      <br />
      {Object.keys(charItem).map((title, index) => {
        const { id } = charItem[title];
        const marks = marksHelper(charText[title]);
        return (
          <Box sx={{ width: 500 }} key={index}>
            <Slider
              aria-label={title}
              defaultValue={3}
              getAriaValueText={(value) => valueText(value, id)}
              valueLabelDisplay="auto"
              step={1}
              marks={marks}
              min={1}
              max={5}
              track={false}
            />
          </Box>
        );
      })}
    </label>
  );
};

export default AddReviewChar;