import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'

const StylePhotos = ({ styleId, IDchanger }) => {
  const [style, setStyle] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  let imgUrl;
  let name;

  useEffect(() => {
    const photosUrl = `products/${styleId}/styles`;
    let controller = new AbortController();

    const getPhotos = async () => {
      if (styleId) {
        try {
          const photosResponse = await axios.get(photosUrl, {
            signal: controller.signal
          })
            .then((results) => {
              setStyle(results.data.results);
              controller = null;
              setIsLoading(!isLoading)
            })
        } catch (error) {
          console.error(error)
        }
      }
    }
    getPhotos();

    return () => {
      controller?.abort();
    }

  }, []);

  if (style[0]) {
    const photosArr = style[0].photos;

    if (photosArr[0].url === null) {
      name = style[0].name;
      imgUrl = 'https://stalbertseniors.ca/wp-content/uploads/2019/10/image-coming-soon.jpg'
    } else {
      name = style[0].name;
      // imgUrl = photosArr[0].thumbnail_url;
      imgUrl = photosArr[0].url;
    }
  }

  return (
    <div onClick={IDchanger} aria-hidden="true">
      {isLoading ?
        <div className="product-card__image">
          <div className="RP__spinner">
            <Spinner animation="border" role="status" variant="primary">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </div>
        :
        <img className="product-card__image" src={imgUrl} alt={name} />
      }

    </div>
  );
};

export default StylePhotos;