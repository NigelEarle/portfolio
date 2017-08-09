import React, { Component } from 'react';
import './NestEggWork.css';

export default class NestEggWork extends Component {
  state = { showMore: false };
  
  
  render() {
    const { showMore } = this.state;
    return (
      <li className="listItem">
        <img src="#" alt="#"/>
        <div className="workHeading">
          <h1 className="contract">Nest Egg</h1>
          <p className="company">Sudokrew Solutions - 2015</p>
        </div>
        <div className="experience">
          <p className="experienceDesc">
            I was very excited to jump on to this project as a subcontractor for Sudokrew
            Solutions. They are an amazing JavaScript development house and I knew that I would 
            learn a lot from their codebase. The Nest Egg Financial Calculator web application was 
            written in JavaScript using Node.js/Express.js, Gulp, Stripe, jQuery and PostgreSQL. I 
            reported to the project manager and two in-house developers that had previously worked on 
            this project. The key feature of this application would calculate your retirement needs 
            based on earnings and savings. Payment for this service was on a subscription basis, which was handled using the Stripe API.
          </p>
          { showMore &&
            <div>
              <br/>
              <p className="experienceDesc">
                My responsibilities were to build out a new feature utilizing the Stripe API’s
                coupons feature. Coupons were administered by the business owner or other admin
                users, which could then be applied to a new or existing subscription.
                The scope of this particular feature spanned across the front and back end of the application
                forcing me to know and understand what tools and modules I was working with in depth. Working with a particular design spec, given to me
                by the in-house designer, allowed me to devise a correct plan of action to complete this feature.
              </p>
            </div>
          }
          <p
            className="showMore"
            onClick={
              () => this.setState({ showMore: !showMore})
            }
          >
          {!showMore ? 'Show more...' : 'Show less...'}
          </p>
        </div>
      </li>
    );
  }
}
