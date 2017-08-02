import React, { Component } from 'react';
import Slider from 'react-slick';

import {
  CULTUR_1,
  CULTUR_2,
} from '../assets/images';

import './CulturWork.css';

export default class CulturWork extends Component {
  state = { showMore: false };

  render() {
    return (
      <li className="listItem">
        <Slider {...this.props.settings}>
          <div className="item"><img src={CULTUR_1} alt="work"/></div>
          <div className="item"><img src={CULTUR_2} alt="work"/></div>
        </Slider>
        <p>cultur guru</p>
      </li>
    );
  }
}
