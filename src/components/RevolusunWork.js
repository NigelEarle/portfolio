import React from 'react';

import { REV } from '../assets/images';

const RevolusunWork = () => (
  <li className="listItem">
    <img src={REV} className="singleImage" alt="rev"/>
    <div className="workHeading">
      <h1 className="contract">Revolusun</h1>
      <p className="company">Sudokrew Solutions - 2016</p>
    </div>
    <div className="experience">
      <p className="experienceDesc">
        My second subcontract with Sudokrew Solutions and initial introduction to React.js!
        At the time, I was a little nervous being thrown in with a larger application not knowing React.
        Thankfully, the in-house developers taught me everything I needed to know to complete the given
        tasks.
      </p>
      <br/>
      <ul className="experienceList">
      <li>
        <p className="experienceDesc">
          Completely internal web application to Revolun's project managers team. Application for organizing and calculating costs based on the work that needs to be done at a residential home or space. Post estimate - application would calculate by dynamic inputs, deliver a dynamically generated PDF document for the homeowner.
        </p>
      </li>
      <br/>
      <li>
        <p className="experienceDesc">
          Built standalone, Node.js streaming server to generate PDF documents based on dynamic inputs. Used <code>PDFKit</code>, JavaScript library to format and create dynamic PDF's to exact specifications to be served at API endpoints. Particularly lengthy task, which freed up time of in-house developers, given my contributions.
        </p>
      </li>
      <br/>
      <li>
        <p className="experienceDesc">
          Developed multiple image upload components using <code>React.js</code> and <code>AWS S3</code>. After upload from the device, image blob would be streamed to <code>Express.js</code> server, formatted and uploaded to S3 bucket and the url returned would be stored in DB. This approach on storage optimized space in the DB and allowed AWS S3 handle the larger datasets.
        </p>
      </li>
      </ul>
    </div>
  </li>
);
export default RevolusunWork;
