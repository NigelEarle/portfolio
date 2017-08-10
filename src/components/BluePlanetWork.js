import React, { Component } from 'react';

import { BLUEPLANET_1 } from '../assets/images';

const BluePlanetWork = () => (
  <li className="listItem">
    <div className="workHeading">
      <img src={BLUEPLANET_1} className="singleImage" alt="work"/>
      <h1 className="contract">Blue Planet Energy</h1>
      <p className="company">Sudokrew Solutions - 2016</p>
    </div>
    <div className="experience">
      <p className="experienceDesc">
        Some of my responsibilities for this project were developing dynamic React
        components for the component library (to be used across several different
        front-end portals), styling of React components using CSS-Modules and developing
        the Manage Billing pages for the project owner portal using React.js and Redux.
      </p>
      <br/>
      <ul className="experienceList">
        <li>
          <p className="experienceDesc">
            Built out dynamic component library to be used across several different front-end
            portals. Gave me insight in to OSS (open source software) and how a developer should
            be interacting with tools and libraries. Cut down on code redundancy and sped up development
            time, given a lot of the same components would be used across the front-end portals.
          </p>
        </li>
        <br/>
        <li>
          <p className="experienceDesc">
            Styled for in-house developers on various React components using <code>CSS-Modules</code> 
            and <code>Classnames</code> library to free up more time for teammates.
          </p>
        </li>
        <br/>
        <li>
          <p className="experienceDesc">
            Developed the 'Manage Billing' pages/components for homeowner billing specifications
            i.e. billing cycles and plans, flat rate fees, additional fees and taxes, kilowatt-hour usage
            tiers. Used <code>Redux</code> as global state manager to interact with dynamic input data
            outside the scope of single component heirarchy.
          </p>
        </li>
      </ul>
    </div>
  </li>
);

export default BluePlanetWork;
