import React from 'react';

import './WorkContent.css';

import {
  CulturWork,
  BluePlanetWork,
  NestEggWork,
  RevolusunWork,
} from '../components';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
}

const WorkContent = () => (
  <div className="content">
    <ul className="workList">
      <BluePlanetWork settings={settings} />
      <RevolusunWork settings={settings} />
      <NestEggWork settings={settings} />
      <CulturWork settings={settings} />
    </ul>
  </div>
);

export default WorkContent;