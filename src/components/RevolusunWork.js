import React, { Component } from 'react';
import './RevolusunWork.css';

export default class RevolusunWork extends Component {
  state = { showMore: false };

  render() {
    return (
      <li className="listItem">
        <div>
          <img src="#" alt="#"/>
          <h1>Revolusun</h1>
        </div>
        <div>
          <p>
            My second subcontract with Sudokrew Solutions and initial introduction to React.js!
            At the time, I was a little nervous being thrown in with a larger application not knowing React.
            Thankfully, the in-house developers taught me everything I needed to know to complete the given
            tasks.
          </p>
          <br/>
          <p>
            The application was completely internal to Revolusun's project managers, organizing and calculating
            costs based on the work the needs to be done at the residential home or space. After the estimate
            had been calculated the application would deliver a dynamically generated PDF document for the
            homeowner to view.
          </p>
          <br/>
          <p>
            One of my tasks for this project was to build out a standalone server, written in Node.js,
            which would generate several PDF documents with dynamic content. After doing some research on
            possible libraries with supported communities, I came across PDFKit. A JavaScript plugin to
            dynamically generate PDF documents on the client and server. This proved to be the correct tool
            for the job and I was able to generate dynamic PDF documents with exact specifications, which would
            be served on several API endpoints . My development time for the PDF generation proved to be a bit
            lengthy, given the many aspects of the document specs. Ultimately, my contributions freed up time for
            other team members to focus on pressing features and issues to show the client. When the time came to
            show a demo of the completed features, the client loved the work that had been done.
          </p>
          <br/>
          <p>
            A sparate task I was assigned to was multiple image uploads for project owners using React.js and
            Amazon S3. Learning the architecture of parent/child component hierarchy and unidirectional data flow
            helped a lot with my overall understanding of React. After uploading images from a client, image
            blobs would then be saved to an S3 bucket and the url returned would be saved in the DB. This approach
            on storage optimized space in the DB and let S3 handle the larger sets of data.
          </p>
        </div>
      </li>
    );
  }
}
