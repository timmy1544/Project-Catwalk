import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Styles = ({ styleId }) => {
  const [style, setStyle] = useState([]);

  useEffect(() => {
    if (styleId) {
      axios.get(`products/${styleId}/styles`)
        .then((results) => {
          setStyle(results.data.results);
        })
        .catch((err) => console.error(err));
    }
  }, [styleId]);

  // const styleImage = style.map(img => {
  //   console.log(img)
  //   return (
  //     <img src={img.photos[0].url} />

  //   )
  // })
  let imgUrl;
  let name;

  if (style[0]) {
    const photosArr = style[0].photos;
    name = style[0].name;
    imgUrl = photosArr[0].thumbnail_url;
    // imgUrl = photosArr[0].url;
    // console.log(photosArr)
  }
  // console.log(name)
  // console.log(style[0])
  // console.log(styleImage)
  return (
    <div>
      <img src={imgUrl} alt={name} />
    </div>
  )
}

export default Styles;