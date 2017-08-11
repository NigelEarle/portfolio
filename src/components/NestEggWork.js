import React from 'react';

import { NEST_EGG } from '../assets/images';

const NestEggWork = () => (
  <li className="listItem">
    <img src={NEST_EGG} className="singleImage" alt="nest-egg-guru"/>
    <div className="workHeading">
      <h1 className="contract">Nest Egg Guru</h1>
      <p className="company">Sudokrew Solutions - 2015</p>
    </div>
    <div className="experience">
      <p className="experienceDesc">
        Nest Egg Guru's web application is a customer facing service to calculate your retirement needs based on earnings and savings.
        The tech stack for this project is <code>Express.js</code>, <code>Gulp</code>, <code>jQuery</code>, <code>Stormpath</code>, <code>Stripe</code> and <code>PostgreSQL</code>. 
        Payment for this service was on a subscription basis, which was handled using <code>Stripe</code>.
      </p>
      <br/>
      <h2 className="contributions">Contributions:</h2>
      <br/>
      <ul className="experienceList">
        <li>
          <p className="experienceDesc">
            Built out new feature on existing codebase using the <code>Stripe</code> coupon feature. Coupons were 
            administered by the business owners or admin users to new or existing subscriptions.
          </p>
        </li>
        <br/>
      </ul>
    </div>
  </li>
);

export default NestEggWork;

