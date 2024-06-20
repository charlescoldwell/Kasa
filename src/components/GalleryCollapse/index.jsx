import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Logements from '../../assets/json/logements.json';
import CollapseButton from '../../assets/images/collapseButton.svg';
import './style.css'; // Import the CSS file

export default function GalleryCollapse() {
  const { locationId } = useParams();

  // Find the current location's details
  const currentLocation = Logements.find(
    (logement) => logement.id === locationId
  );

  // State to manage the visibility of the description and equipment text
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isEquipmentVisible, setEquipmentVisible] = useState(false);

  // State to manage the rotation of the buttons
  const [isDescriptionRotated, setDescriptionRotated] = useState(false);
  const [isEquipmentRotated, setEquipmentRotated] = useState(false);

  // Send to error page if ID is wrong
  const navigate = useNavigate();
  if (!currentLocation) {
    navigate('/Error');
    return null; // Return null to prevent rendering the rest of the component
  }

  return (
    <div className="galleryCollapseWrapper">
      <div className="galleryCollapseDescription">
        <div className="galleryCollapseSectionHeader">
          <h2>Description</h2>
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
          className={`galleryCollapseDescriptionText ${
            isDescriptionVisible ? 'show' : ''
          }`}
        >
          {currentLocation.description}
        </p>
      </div>
      <div className="galleryCollapseEquipment">
        <div className="galleryCollapseSectionHeader">
          <h2>Équipements</h2>
          <button
            onClick={() => {
              setEquipmentVisible(!isEquipmentVisible);
              setEquipmentRotated(!isEquipmentRotated);
            }}
            className="galleryCollapseButton"
          >
            <img
              src={CollapseButton}
              alt="CollapseButton"
              className={isEquipmentRotated ? 'rotated' : ''}
            />
          </button>
        </div>
        <div
          className={`galleryCollapseEquipmentText ${
            isEquipmentVisible ? 'show' : ''
          }`}
        >
          {currentLocation.equipments.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
