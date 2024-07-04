import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Logements from '../../assets/json/logements.json';
import leftArrow from '../../assets/images/leftArrow.svg';
import rightArrow from '../../assets/images/rightArrow.svg';

export default function LocationSlider() {
  const [count, setCount] = useState(0); // Start from 0 for array indexing
  const { locationId } = useParams();

  // Find the current location's pictures
  const currentLocation = Logements.find(
    (logement) => logement.id === locationId
  );

  // Make sure pictures exist if so then store them
  const pictures = currentLocation ? currentLocation.pictures : [];

  // Hide button if only one image in set
  const buttonDisplay = pictures.length === 1 ? 'none' : 'flex';

  // Handle previous and next click while wrapping it in length of pictures array
  const handlePrevClick = () => {
    setCount(
      (prevCount) => (prevCount - 1 + pictures.length) % pictures.length
    );
  };

  const handleNextClick = () => {
    setCount((prevCount) => (prevCount + 1) % pictures.length);
  };

  useEffect(() => {
    // Reset count if pictures length changes (means locationId changed)
    setCount(0);
  }, [pictures.length]);

  return (
    <div className="locationSlider">
      <button
        onClick={handlePrevClick}
        className="leftArrow"
        id="previousSlide"
        style={{ display: buttonDisplay }}
      >
        <img src={leftArrow} alt="leftArrow" />
      </button>
      <button
        onClick={handleNextClick}
        className="rightArrow"
        id="nextSlide"
        style={{ display: buttonDisplay }}
      >
        <img src={rightArrow} alt="rightArrow" />
      </button>
      <div className="locationSliderNumber" id="locationSliderCounter">
        {pictures.length > 1 ? `${count + 1}/${pictures.length}` : ''}
      </div>
      {pictures.length > 0 && (
        <img
          className="locationSliderImage"
          id="locationSliderCurrentImage"
          src={pictures[count]}
          alt="LocationImage"
        />
      )}
    </div>
  );
}
