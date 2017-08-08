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
        <h1>Blue Planet Energy</h1>
        <div>
          <p>
            Some of my responsibilities for this project were developing dynamic React
            components for the component library (to be used across several different
            front-end portals), styling of React components using CSS-Modules and developing
            the Manage Billing pages for the project owner portal using React.js and Redux.
          </p>
          <br/>
          <p>
            Working on the component library gave me the mindset of thinking about how a
            developer should be using and interacting with the tools and libraries available.
            We built out this dynamic component library to cut down on code redundancy throughout
            the front end portals, given that a lot of the same React components would be used throughout.
            Some of the dynamic UI components we developed were tables, search inputs, radio buttons,
            inputs (with validation), drop-downs, buttons, lists and list-items. Pairing with two
            other very experienced in-house developers on this project allowed us to streamline our
            development process and start using these dynamic components in production relatively quickly.
          </p>
          <br/>
          <p>
            One of the larger tasks I was assigned to was the Manage Billing pages for the
            project owner, front-end portal. This section of the project owner portal was
            responsible for setting up billing specifications for homeowners - i.e. billing cycles
            and plans, flat rate fees, additional fees and taxes, kilowatt-hour usage tiers. Using
            Redux as a global state manager for these components and pages made huge difference while
            developing, which allowed for the usage of dynamic data outside the scope of a single component hierarchy.
          </p>
        </div>
      </li>
    );
  }
}
