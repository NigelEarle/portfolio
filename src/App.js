import React from 'react';
import WorkContent from './components/WorkContent';
import './App.css';

const App = () => (
  <div className="container">
    <div className="heading">
      <h1 className="name">Nigel Earle</h1>
      <h3 className="role">Full-Stack Software Developer</h3>
      <hr/>
      <p className="title">Professional Portfolio</p>
    </div>
    <WorkContent />
  </div>
);

export default App;
