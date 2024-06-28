import CollapseButton from '../../assets/images/collapseButton.svg';
import React, { useState } from 'react';

export default function CollapseItem(props) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isDescriptionRotated, setDescriptionRotated] = useState(false);

  return (
    <div style={props.style} className="galleryCollapseDescription">
      <div className="galleryCollapseSectionHeader">
        <h2> {props.title}</h2>
        <button
          onClick={() => {
            setDescriptionVisible(!isDescriptionVisible);
            setDescriptionRotated(!isDescriptionRotated);
          }}
          className="galleryCollapseButton"
        >
          <img
            src={CollapseButton}
            alt="CollapseButton"
            className={isDescriptionRotated ? 'rotated' : ''}
          />
        </button>
      </div>
      <p
        className={`galleryCollapseDescriptionText ${isDescriptionVisible ? 'show' : ''
        }`}
      >
        {props.description}
      </p>
    </div>
  )
}