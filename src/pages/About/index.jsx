import React from 'react';
import AboutCollapse from '../../components/AboutCollapse/';
import AboutImg from '../../assets/images/aboutImg.png';

export default function About() {
  return (
    <div className="about">
      <div
        className="aboutImg"
        style={{ backgroundImage: `url(${AboutImg})` }}
      ></div>
      <AboutCollapse />
    </div>
  );
}
