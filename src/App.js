import React from 'react';
import { WorkContent } from './components';
import './App.css';

const App = () => (
  <div className="container">
    <div className="heading">
      <h1 className="name">Nigel Earle</h1>
      <h3 className="role">Full-Stack Software Developer</h3>
      <hr/>
      <p className="title">Professional Portfolio</p>
      <div className="description">
        <p>
          Hello, I am a full-stack software developer specializing in JavaScript/ES6.
          Some technologies I enjoy working with are Node.js, Next.js, React.js, Redux, MobX,
          Webpack, Docker, Amazon Web Services and PostgreSQL.
        </p>
        <br/>
        <p>
          Building clean, stable and performant
          is as important to me as the people I am building it with! Currently, I am looking to
          contribute and be apart of a development team that shares same passion JavaScript web technologies that I do!
        </p>
      </div>
    </div>
    <WorkContent />
  </div>
);

export default App;
