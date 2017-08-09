import React from 'react';
import './Footer.css'

const Footer = () => (
  <div className="footContainer">
    <ul className="linksList">
      <li className="link">
        <a target="_blank" rel="noopener noreferrer" href="mailto:nigel@earle.io">Mail</a>
      </li>
      <li className="link">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/NigelEarle">Twitter</a>
      </li>
      <li className="link">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/NigelEarle">Github</a>
      </li>
      <li className="link">
        <a target="_blank" rel="noopener noreferrer" href="http://stackoverflow.com/users/3996221/nigel-earle">Stack Overflow</a>
      </li>
      <li className="link">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nigelearle">LinkedIn</a>
      </li>
    </ul>
  </div>
);

export default Footer;