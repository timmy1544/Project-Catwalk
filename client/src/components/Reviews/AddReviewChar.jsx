import React, { useState } from 'react';

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

const AddReviewChar = (props) => {
  const { handleChange, characteristics, charItem } = props;
  const [char, setChar] = useState(characteristics);

  const helperFunc = (e, num, id) => {
    char[id] = num;
    setChar(char);
    handleChange(e);
  };

  return (
    <label htmlFor="characteristics">
      characteristics:
      <br />
      {Object.keys(charItem).map((title, index) => {
        const { id } = charItem[title];
        const name = `char_${title}`;
        return (
          <label htmlFor={title} key={index}>
            {title}
            :
            <input
              type="radio"
              id={name + 1}
              name={name}
              onChange={(e) => {
                helperFunc(e, 1, id);
              }}
            />
            <label htmlFor={name + 1}>{charText[title][1]}</label>
            <input
              type="radio"
              id={name + 2}
              name={name}
              onChange={(e) => {
                helperFunc(e, 2, id);
              }}
            />
            <label htmlFor={name + 2}>{charText[title][2]}</label>
            <input
              type="radio"
              id={name + 3}
              name={name}
              onChange={(e) => {
                helperFunc(e, 3, id);
              }}
            />
            <label htmlFor={name + 3}>{charText[title][3]}</label>
            <input
              type="radio"
              id={name + 4}
              name={name}
              onChange={(e) => {
                helperFunc(e, 4, id);
              }}
            />
            <label htmlFor={name + 4}>{charText[title][4]}</label>
            <input
              type="radio"
              id={name + 5}
              name={name}
              onChange={(e) => {
                helperFunc(e, 5, id);
              }}
            />
            <label htmlFor={name + 5}>{charText[title][5]}</label>
            <br />
            <p>{'\n'}</p>
          </label>
        );
      })}
    </label>
  );
};

export default AddReviewChar;