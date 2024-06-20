import React from 'react';
import { useParams } from 'react-router-dom';
import LocationSlider from '../../components/LocationSlider/';
import LocationDetails from '../../components/LocationDetails/';
import GalleryCollapse from '../../components/GalleryCollapse/';

export default function Location() {
  const { locationId } = useParams();

  console.log('Location ID:', locationId); // Logging to verify if locationId is received

  return (
    <div className="main">
      <LocationSlider />
      <LocationDetails />
      <GalleryCollapse />
      <p>DEBUGGING: Location ID: {locationId}</p>
    </div>
  );
}
