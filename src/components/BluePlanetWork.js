import React, { Component } from 'react';
import Slider from 'react-slick';

import {
  BLUEPLANET_1,
  BLUEPLANET_2,
  BLUEPLANET_3,
  BLUEPLANET_4,
  BLUEPLANET_5,
  BLUEPLANET_6,
  BLUEPLANET_7,
  BLUEPLANET_8,
} from '../assets/images';

import './BluePlanetWork.css';

export default class BluePlanetWork extends Component {
  state = { showMore: false };
  
  render() {
    return (
      <li className="listItem">
        <Slider {...this.props.settings}>
          <div className="item"><img src={BLUEPLANET_1} alt="work"/></div>
          <div className="item"><img src={BLUEPLANET_2} alt="work"/></div>
          <div className="item"><img src={BLUEPLANET_3} alt="work"/></div>
          <div className="item"><img src={BLUEPLANET_4} alt="work"/></div>
          <div className="item"><img src={BLUEPLANET_5} alt="work"/></div>
          <div className="item"><img src={BLUEPLANET_6} alt="work"/></div>
          <div className="item"><img src={BLUEPLANET_7} alt="work"/></div>
          <div className="item"><img src={BLUEPLANET_8} alt="work"/></div>
          
        </Slider>
        <p>cultur guru</p>
      </li>
    );
  }
}
