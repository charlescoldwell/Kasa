import React from 'react';
import { useParams } from 'react-router-dom';
import LocationSlider from '../../components/LocationSlider/';
import LocationDetails from '../../components/LocationDetails/';
import LocationCollapses from '../../components/LocationCollapses/';

export default function Location() {
  const { locationId } = useParams();

  console.log('Location ID:', locationId); // Logging to verify if locationId is received

  return (
    <div className="main">
      <LocationSlider />
      <LocationDetails />
      <LocationCollapses />
      <p>DEBUGGING: Location ID: {locationId}</p>
    </div>
  );
}
