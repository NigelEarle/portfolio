import React from 'react';

import { CULTUR_1 } from '../assets/images';

const CulturWork = () => (
  <li className="listItem">
    <div className="workHeading">
      <img src={CULTUR_1} className="singleImage" alt="work"/>
      <h1 title="contract">Cultur Guru API</h1>
      <p className="company">Goma Games - 2015</p>
    </div>
    <div className="experience">
      <p className="experienceDesc">
        The Cultur Guru API was my first full-scale project I had the pleasure of working
        on. The API, written in <code>Ruby on Rails</code>, was responsible
        for scraping event data across 25+ different sources. The API had already been 
        built out to an extent by a previous devlopment team before our back-end team jumped on.
      </p>
      <br/>
      <h2 className="contributions">Overview / Contributions:</h2>
      <br/>
      <ul className="experienceList">
        <li>
          <p className="experienceDesc">
            Built and configured the server infrastructure across several different environments 
            and micro-service workers under the supervision of my senior engineer.
          </p>
        </li>
        <br/>
        <li>
          <p className="experienceDesc">
           Streamlined deployment to these server instances using tools and services such 
           as <code>Digital Ocean</code>, <code>Puma</code>, <code>Docker</code> and <code>Ansible</code>.
          </p>
        </li>
        <br/>
        <li>
          <p className="experienceDesc">
            Configured horizontal server and deployment strategy solution for background image processing 
            of 700,000+ event images to solve failing background workers issue. Our team came up with this horizontal 
            instance solution by scaling microservice workers out to 60+ small instances instead of adding more CPU and 
            RAM to existing workers. This solution ended up costing owners and administrators less with optimal 
            processing power.
          </p>
        </li>
      </ul>
    </div>
  </li>
);

export default CulturWork

