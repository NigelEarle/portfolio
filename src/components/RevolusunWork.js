import React, { Component } from 'react';

import { REV } from '../assets/images';

export default class RevolusunWork extends Component {

  render() {
    return (
      <li className="listItem">
        <img src={REV} className="singleImage" alt="rev"/>
        <div className="workHeading">
          <h1 className="contract">Revolusun</h1>
          <p className="company">Sudokrew Solutions - 2016</p>
        </div>
        <div className="experience">
          <p className="experienceDesc">
            This was my second subcontract with Sudokrew Solutions and initial introduction to React.js!
            At the time, I was a little nervous being thrown in with a larger application not knowing React.
            Thankfully, the in-house developers taught me everything I needed to know to complete the given
            tasks.
          </p>
          {showMore && 
            <div>
              <br/>
              <p className="experienceDesc">
                The application was completely internal to Revolusun's project managers - organizing and calculating
                costs based on the work that needs to be done at a residential home or space. After the estimate
                had been calculated by dynamic inputs, the application would deliver a dynamically generated PDF document for the
                homeowner to view.
              </p>
              <br/>
              <p className="experienceDesc">
                One of my tasks for this project was to build out a standalone server (written in Node.js),
                which would generate several PDF documents with dynamic content based on user input. After doing some research on
                possible libraries with supported communities, I came across PDFKit. A JavaScript plugin to
                dynamically generate PDF documents on the client and/or server. This proved to be the correct tool
                for the job and I was able to generate PDF documents with exact specifications, which would
                be served on several API endpoints. My development time for the PDF generation proved to be a bit
                lengthy, given the many aspects of the document specs. Ultimately, my contributions freed up time for
                other team members to focus on pressing features and issues to show the client. When the time came to
                show a demo of the completed features, the client loved the work that had been done by the team.
              </p>
              <br/>
              <p className="experienceDesc">
                A sparate task I was assigned to was multiple image uploads for project owners using React.js and
                Amazon S3. Learning the architecture of parent/child component hierarchy and unidirectional data flow
                helped me solidify my overall understanding of React. After uploading images from a user/client, image
                blobs would then streamed to our Express.js server, formatted and uploaded to an AWS S3 bucket and the url returned would be stored in the PostgreSQL DB. This approach
                on storage optimized space in the DB and allowed AWS S3 handle the larger sets of data.
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
