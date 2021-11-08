import React, { useState } from 'react';

const charText = [
  {
    0: 'Size',
    1: 'A size too small',
    2: '1/2 a size too small',
    3: 'Perfect',
    4: '1/2 a size too big',
    5: 'A size too big',
  },
  {
    0: 'Width',
    1: 'Too narrow',
    2: 'Slightly narrow',
    3: 'Perfect',
    4: 'Slightly wide',
    5: 'Too wide',
  },
  {
    0: 'Comfort',
    1: 'Uncomfortable',
    2: 'Slightly Uncomfortable',
    3: 'Ok',
    4: 'Comfortable',
    5: 'Perfect',
  },
  {
    0: 'Quality',
    1: 'Poor',
    2: 'Below average',
    3: 'What I expected',
    4: 'Pretty great',
    5: 'Perfect',
  },
  {
    0: 'Length',
    1: 'Runs Short',
    2: 'Runs slightly Short',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
  {
    0: 'Fit',
    1: 'Runs tight',
    2: 'Runs slightly tight',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
];

const AddReviewChar = (props) => {
  const [char, setChar] = useState(props.characteristics);
  const { handleChange } = props;

  const helperFunc = (e, num, catagory) => {
    char[catagory] = num;
    setChar(char);
    handleChange(e);
  }

  return (
    <label htmlFor="characteristics">
      characteristics:
      <br />
      {charText.map((currentChar, index) => {
        const catagory = currentChar[0];
        const name = `char_${catagory}`;
        return (
          <label htmlFor={catagory} key={index}>
            {catagory}
            :
            <input type="radio" id={name + 1} name={name} onChange={(e) => {
              helperFunc(e, 1, catagory);
            }} />
            <label htmlFor={name + 1}>{currentChar[1]}</label>
            <input type="radio" id={name + 2} name={name} onChange={(e) => {
              helperFunc(e, 2, catagory);
            }} />
            <label htmlFor={name + 2}>{currentChar[2]}</label>
            <input type="radio" id={name + 3} name={name} onChange={(e) => {
              helperFunc(e, 3, catagory);
            }} />
            <label htmlFor={name + 3}>{currentChar[3]}</label>
            <input type="radio" id={name + 4} name={name} onChange={(e) => {
              helperFunc(e, 4, catagory);
            }} />
            <label htmlFor={name + 4}>{currentChar[4]}</label>
            <input type="radio" id={name + 5} name={name} onChange={(e) => {
              helperFunc(e, 5, catagory);
            }} />
            <label htmlFor={name + 5}>{currentChar[5]}</label>
            <br />
            <p>{'\n'}</p>
          </label>
        );
      })}
    </label>
  );
};

export default AddReviewChar;