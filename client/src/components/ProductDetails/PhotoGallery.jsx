/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, {
  useState, useRef, useLayoutEffect, useEffect,
} from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

const PhotoGallery = ({ currentStyle }) => {
  console.log('currentStyle', currentStyle);
  const [current, setCurrent] = useState(0);
  const [selectThumb, setSelectThumb] = useState('');
  const [showArrow, setShowArrow] = useState(false);

  const slides = currentStyle.photos;
  const { length } = slides;
  const ref = useRef(null);
  const selectThumbnail = (index) => {
    setSelectThumb(index);
  };
  const nextPic = () => { // fix here: when its end of index, one side arrow will disappear
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevPic = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  useEffect(() => {
    setSelectThumb(current);
  }, [current]);

  const scroll = (scrollOffset) => {
    ref.current.scrollTop += scrollOffset;
  };

  useLayoutEffect(() => {
    if (ref.current.clientHeight < ref.current.scrollHeight) {
      setShowArrow(true);
    }
  }, [ref]);

  return (
    <div className="photoGallery">
      <BsArrowLeftCircle className="leftArrow" onClick={prevPic} />
      <BsArrowRightCircle className="rightArrow" onClick={nextPic} />
      {slides.map((item, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (<img src={item.url} alt="pic" className="photo" />)}
        </div>
      ))}
      <div className="sliderWrapper">
        {showArrow && <TiArrowSortedUp onClick={() => scroll(-20)} className="upArrow" />}
        <div ref={ref} className="slider">
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
          {/* <div class="thumbnailPic"><img src="https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80" alt="thumbnail" class="thumbnail"></img></div>
          <div class="thumbnailPic"><img src="https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80" alt="thumbnail" class="thumbnail"></img></div> */}
        </div>
        {showArrow && <TiArrowSortedDown onClick={() => scroll(20)} className="downArrow" />}
      </div>
    </div>
  );
};

export default PhotoGallery;