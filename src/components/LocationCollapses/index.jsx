import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Logements from '../../assets/json/logements.json';
import CollapseItem from '../Shared/CollapseItem';

export default function LocationCollapses() {
  const { locationId } = useParams();

  // Find the current location's details
  const currentLocation = Logements.find(
    (logement) => logement.id === locationId
  );

  // Send to error page if ID is wrong
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentLocation) {
      return navigate('/Error');
    }
  }, [currentLocation, navigate]);

  return currentLocation ? (
    <div className="galleryCollapseWrapper">
      <CollapseItem
        className={"galleryCollapseDescription"}
        style={{ marginRight: '6.129%' }}
        title={'Description'}
        description={currentLocation.description}
      />

      <CollapseItem      
        className={"galleryCollapseDescription"}
        title={'Équipements'}
        description={currentLocation.equipments.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      />
    </div>
  ) : null;
}
