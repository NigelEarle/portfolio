import React from 'react';
import Slider from 'react-slick';

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
      <CulturWork settings={settings} />
      <NestEggWork settings={settings} />
      <RevolusunWork settings={settings} />
      <BluePlanetWork settings={settings}/>
    </ul>
  </div>
);

export default WorkContent;