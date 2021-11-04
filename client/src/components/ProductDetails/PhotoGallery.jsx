/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const PhotoGallery = ({ currentStyle }) => {
  // console.log('currentStyle', currentStyle);
  const [current, setCurrent] = useState(0);
  const [selectThumb, setSelectThumb] = useState('');
  const slides = currentStyle.photos;
  const { length } = slides;
  const selectThumbnail = (index) => {
    setSelectThumb(index);
  };
  const nextPic = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevPic = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // console.log('currentindex', current);

  return (
    <div className="photoGallery">
      <BsArrowLeftCircle className="leftArrow" onClick={prevPic} />
      <BsArrowRightCircle className="rightArrow" onClick={nextPic} />
      {slides.map((item, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (<img src={item.url} alt="pic" className="photo" />)}
        </div>
      ))}
      <div className="slider">
        {slides.map((item, index) => (
          <div className={index === selectThumb ? 'selectedThumbnailPic' : 'thumbnailPic'} key={index}>
            <img
              src={item.thumbnail_url}
              alt="thumbnail"
              className="thumbnail"
              onClick={() => {
                setCurrent(index);
                selectThumbnail(index);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;