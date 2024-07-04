import React from 'react';
import LocationSlider from '../../components/LocationSlider/';
import LocationDetails from '../../components/LocationDetails/';
import LocationCollapses from '../../components/LocationCollapses/';

export default function Location() {
  return (
    <div className="main">
      <LocationSlider />
      <LocationDetails />
      <LocationCollapses />
    </div>
  );
}
