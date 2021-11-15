import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ProductSlider = ({ card }) => {
  const [current, setCurrent] = useState(0)
  const { length } = card;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  };

  if (!Array.isArray(card) || card.length <= 4) {
    return (
      <section className="RP_slider">
        {card}
      </section>
    );
  }

  return (
    <section className="RP_slider">
      {current === 0
        ? <FaArrowAltCircleLeft className="left-arrow-null" onClick={null} />
        : <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />}
      {card[current]}
      {card[current + 1]}
      {card[current + 2]}
      {card[current + 3]}
      {current + 4 === length
        ? <FaArrowAltCircleRight className="right-arrow-null" onClick={null} />
        : <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />}
    </section>
  );
};

export default ProductSlider;