import CollapseButton from '../../assets/images/collapseButton.svg';
import React, { useState } from 'react';

export default function CollapseItem({ title, description, style, className }) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isDescriptionRotated, setDescriptionRotated] = useState(false);

  return (
    <div style={style} className={className}>
      <div className="galleryCollapseSectionHeader">
        <h2> {title}</h2>
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
      <div
        className={`galleryCollapseDescriptionText ${
          isDescriptionVisible ? 'show' : ''
        }`}
      >
        {description}
      </div>
    </div>
  );
}
