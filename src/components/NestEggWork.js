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
        I was very excited to jump on to this project as a subcontractor for Sudokrew
        Solutions. They are an amazing JavaScript development house and I knew that I would 
        learn a lot from their codebase. The key feature of this application would calculate your retirement needs 
        based on earnings and savings. Payment for this service was on a subscription basis, which was handled using the Stripe API.
      </p>
      <br/>
      <ul className="experienceList">
        <li>
          <p className="experienceDesc">
            Built with <code>Express.js</code>, <code>Gulp</code>, 
            <code>Stripe</code>, <code>jQuery</code> and <code>PostgreSQL</code>.
          </p>
        </li>
        <li>
          <p className="experienceDesc">
            Built out new feature using the <code>Stripe API</code> coupon feature. Coupons were 
            administered by the business owners or other admin users to new or existing subscriptions.
          </p>
        </li>
        <li>
          <p className="experienceDesc">
            Overall scope of this feature spanned across the front and back end of the application forcing 
            me to know and understand what tools, libraries and modules I was working with in depth.
          </p>
        </li>
      </ul>
    </div>
  </li>
);

export default NestEggWork;

