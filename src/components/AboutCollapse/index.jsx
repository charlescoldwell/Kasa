import React, { useState } from 'react';
import CollapseButton from '../../assets/images/collapseButton.svg';
import './style.css'; // Import the CSS file

export default function AboutCollapse() {
  // State to manage the visibility of the sections
  const [visibleSections, setVisibleSections] = useState({
    reliability: false,
    respect: false,
    service: false,
    security: false,
  });

  // Toggle the visibility of a section
  const toggleVisibility = (section) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="aboutCollapseWrapper">
      <div className="aboutCollapseSection">
        <h2>Fiabilité</h2>
        <button
          onClick={() => toggleVisibility('reliability')}
          className="aboutCollapseButton"
        >
          <img src={CollapseButton} alt="CollapseButton" />
        </button>
        <p
          className={`aboutCollapseText ${
            visibleSections.reliability ? 'show' : ''
          }`}
        >
          Les annonces postés sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </div>
      <div className="aboutCollapseSection">
        <h2>Respect</h2>
        <button
          onClick={() => toggleVisibility('respect')}
          className="aboutCollapseButton"
        >
          <img src={CollapseButton} alt="CollapseButton" />
        </button>
        <p
          className={`aboutCollapseText ${
            visibleSections.respect ? 'show' : ''
          }`}
        >
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>
      <div className="aboutCollapseSection">
        <h2>Service</h2>
        <button
          onClick={() => toggleVisibility('service')}
          className="aboutCollapseButton"
        >
          <img src={CollapseButton} alt="CollapseButton" />
        </button>
        <p
          className={`aboutCollapseText ${
            visibleSections.service ? 'show' : ''
          }`}
        >
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>
      <div className="aboutCollapseSection">
        <h2>Sécurité</h2>
        <button
          onClick={() => toggleVisibility('security')}
          className="aboutCollapseButton"
        >
          <img src={CollapseButton} alt="CollapseButton" />
        </button>
        <p
          className={`aboutCollapseText ${
            visibleSections.security ? 'show' : ''
          }`}
        >
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </div>
    </div>
  );
}
