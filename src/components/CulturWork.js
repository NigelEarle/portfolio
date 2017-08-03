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
        <div className="experience">
          <p>
            The Cultur Guru API was my first full-scale project I had the pleasure of working
            on for a little over 10 months. The API, written in Ruby on Rails, was responsible
            for scraping event data across 25+ different sources. The API had already been 
            built out to an extent. Our back end team was responsible for developing new 
            server infrastructure - focusing on load balancing and back end processes, building
            additional features and squashing an existing bugs. Operating on a remote team of 7+
            people gave me the experience and wisdom of working in teams through pair programming
            and meeting tough deadlines.
          </p>
          <br/>
          <p>
            My main responsibilities for this position were building and configuring the server
            infrastructure across several different environments and micro-service workers, as
            well as adding and debugging existing features. Under the supervision of the senior
            engineer, we were able deploy to these environments and workers with ease using Digital
            Ocean, Docker, Puma and Ansible. An issue our deployment strategy solved was optimizing
            image processing of 10,000+ images. We figured that instead of scaling vertically by
            giving the existing workers more memory and ram, we could scale them horizontally by
            creating more servers with a minimum amount of memory and ran. This ended up costing the
            administrators and owners less with the most optimal processing power.
          </p>
        </div>
      </li>
    );
  }
}