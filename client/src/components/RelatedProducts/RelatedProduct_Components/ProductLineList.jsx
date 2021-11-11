// USING HOOKS
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import ProductCard from './ProductCard';

const ProductLineList = ({ productId, IDchanger }) => {
  const [relatedProductIds, setrelatedProductIds] = useState([]);
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
          infinite: true,
          dots: true
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
    const url = `/products/${productId}/related`;
    let controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const response = await axios.get(url, {
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
        />
      );
    }
  });

  return (
    <div className="relatedProduct-wrapper">
      <Slider {...RPsettings}>
        {relatedProduct}
      </Slider>
    </div>
  );
};

export default ProductLineList;



  //   useEffect(() => {
  //   const url = `/products/${productId}/related`;
  //   let controller = new AbortController();

  //   const fetchProducts = async () => {
  //     const responst = await
  //       axios.get(url)
  //         .then((results) => {
  //           setrelatedProductIds(results.data)
  //         })
  //         .catch((err) => console.log(err));
  //   }
  //   fetchProducts();

  //   return () => {
  //     console.log('cleanup')
  //   }
  // }, [productId]);