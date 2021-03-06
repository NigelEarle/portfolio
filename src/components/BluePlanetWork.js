import React from 'react';

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
        The span of this project for Blue Planet Energy was a series of front-end portals built with <code>React.js</code> and <code>Redux</code>.
        These front-end portals access endpoints from a single, RESTful API built with <code>Node.js</code>, <code>Express.js</code> and <code>Strongloop</code>.
        The breadth of these applications spanned across Blue Planet Energy's customers, sales teams, project 
        owners and current tenants for home and commercial battery monitoring and administrative actions for specific portals.
      </p>
      <br/>
      <h2 className="contributions">Contributions:</h2>
      <br/>
      <ul className="experienceList">
        <li>
          <p className="experienceDesc">
            Built out the dynamic component library to be used across several different front-end
            portals. The component library cut down on code redundancy and sped up development
            time for all teammates.
          </p>
        </li>
        <br/>
        <li>
          <p className="experienceDesc">
            Applied styles for various React components using <code>CSS-Modules</code> and the <code>Classnames</code> React plugin 
            to free up more time for teammates to complete tasks on a tight deadline.
          </p>
        </li>
        <br/>
        <li>
          <p className="experienceDesc">
            Developed the 'Manage Billing' pages/components for homeowner billing specifications -
            billing cycles and plans, flat rate fees, additional fees and taxes, kilowatt-hour usage
            tiers. Used <code>Redux</code> as global state manager to interact with dynamic input data
            outside the scope of single component heirarchy.
          </p>
        </li>
      </ul>
    </div>
  </li>
);

export default BluePlanetWork;
