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
        Revolusun's customer estimate web application is a completely internal to it's project managers team. The application organizes
        and calculates costs based on the work that needs to be done at a residential 
        home or space. After submission, the application would receive homeowner specifications and deliver 
        a dynamically generated PDF document for the homeowner to view.
      </p>
      <br/>
      <h2 className="contributions">Overview / Contributions:</h2>
      <br/>
      <ul className="experienceList">
        <li>
          <p className="experienceDesc">
            Built standalone, Node.js streaming server to generate PDF documents based on 
            dynamic inputs. Used <code>PDFKit</code>, JavaScript library to format and 
            create dynamic PDF's to exact specifications being served at API endpoints. 
            Particularly lengthy task, which freed up time of in-house developers, given my 
            contributions.
          </p>
        </li>
        <br/>
        <li>
          <p className="experienceDesc">
            Developed multiple image upload components using <code>React.js</code> and <code>AWS S3</code>. 
            After upload from the device, image blob would be streamed to <code>Express.js</code> server, formatted and uploaded to S3 bucket and the url 
            returned would be stored in DB. This approach on storage optimized space in the DB 
            and allowed AWS S3 handle the larger datasets.
          </p>
        </li>
      </ul>
    </div>
  </li>
);
export default RevolusunWork;
