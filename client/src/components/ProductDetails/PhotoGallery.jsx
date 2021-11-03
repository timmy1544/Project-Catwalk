/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { FiMaximize2 } from 'react-icons/fi';

const PhotoGallery = ({ currentStyle }) => {
  // console.log('currentStyle', currentStyle);
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState('photoGallery');
  const slides = currentStyle.photos;
  const { length } = slides;
  const nextPic = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevPic = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const zoomOut = () => {
    setZoom(zoom === 'photoGallery' ? 'photoGalleryZoom' : 'photoGallery');
  };
  // console.log('currentindex', current);

  return (
    <div className={zoom}>
      <BsArrowLeftCircle className={zoom === 'photoGalleryZoom' ? 'hide' : 'leftArrow'} onClick={prevPic} />
      <BsArrowRightCircle className={zoom === 'photoGalleryZoom' ? 'hide' : 'rightArrow'} onClick={nextPic} />
      {slides.map((item, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          <FiMaximize2 className="zoomOut" onClick={zoomOut} />
          {index === current && (<img src={item.url} alt="pic" className="photo" />)}
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;