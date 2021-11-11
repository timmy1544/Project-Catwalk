// USING HOOKS
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import ProductCard from './ProductCard';

const ProductLineList = ({ productId, IDchanger }) => {
  const [relatedProductIds, setrelatedProductIds] = useState([]);
  const [mainProduct, setMainProduct] = useState({
    mainFeatures: [],
    mainProduct: []
  })
  const RPsettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    const relatedUrl = `/products/${productId}/related`;

    let controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const response = await axios.get(relatedUrl, {
          signal: controller.signal
        })
          .then((results) => {
            setrelatedProductIds(results.data);
            controller = null;
          })
      } catch (error) {
        console.error(error)
      }
    }
    fetchProducts();
    return () => {
      controller?.abort();
    }
  }, [productId]);

  // SECOND USE EFFECT TO GET INITAL PRODUCT
  useEffect(() => {
    let controller = new AbortController();
    const mainProductUrl = `/products/${productId}`;

    const getMainProducts = async () => {
      try {
        const getMainProductFeatures = await axios.get(mainProductUrl, { signal: controller.signal })
          .then(({ data }) => {
            console.log(data, 'FROM USEEFFECT')
            setMainProduct({
              mainFeatures: data.features,
              mainProduct: data
            });
            controller = null;
          })
      } catch (error) {
        console.error(error)
      }
    }
    getMainProducts();

    return () => {
      controller?.abort;
    }

  }, [productId])

  let trackArray = [];
  const relatedProduct = relatedProductIds.map((item) => {
    if (item !== productId && trackArray.indexOf(item) === -1) {
      trackArray = [...trackArray, item];
      return (
        <ProductCard
          key={item}
          relatedId={item}
          productId={productId}
          IDchanger={IDchanger}
          mainProduct={mainProduct}
        />
      );
    }
  });

  console.log(trackArray, '<<TrackArray>>')
  return (
    <div className="relatedProduct-wrapper">
      <Slider {...RPsettings}>
        {relatedProduct}
      </Slider>
    </div>
  );
};

export default ProductLineList;
