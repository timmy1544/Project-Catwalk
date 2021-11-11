import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const StylePhotos = ({ styleId, IDchanger }) => {
  // const [styleID, setStyleId] = useState(styleId)

  const [style, setStyle] = useState([]);
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
            })
        } catch (error) {
          console.error(error)
        }
      }
    }

    // useEffect(() => {
    //   const photosUrl = `products/${styleId}/styles`;
    //   const getPhotos = async () => {
    //     if (styleId) {
    //       const photosResponse = await axios.get(photosUrl)
    //         .then((results) => {
    //           setStyle(results.data.results);
    //         })
    //         .catch((err) => console.error(err))
    //     }
    //   }


    getPhotos();
    return () => controller?.abort();
  }, []);

  if (style[0]) {
    const photosArr = style[0].photos;

    if (photosArr[0].url === null) {
      name = style[0].name;
      // imgUrl = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
      imgUrl = 'https://stalbertseniors.ca/wp-content/uploads/2019/10/image-coming-soon.jpg'
    } else {
      name = style[0].name;
      imgUrl = photosArr[0].url;
    }
  }

  return (
    <div onClick={IDchanger} aria-hidden="true">
      <img className="product-card__image" src={imgUrl} alt={name} />
    </div>
  );
};

export default StylePhotos;