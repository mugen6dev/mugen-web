import React from 'react';
import hand from '../assets/hand.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return (
    <img 
      src={hand} 
      className="hand1 custom-arrow left-arrow" 
      alt="left arrow" 
      onClick={() => onClick()} 
    />
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return (
    <img 
      src={hand} 
      className="hand2 custom-arrow right-arrow" 
      alt="right arrow" 
      onClick={() => onClick()} 
    />
  );
};

export { CustomLeftArrow, CustomRightArrow };
