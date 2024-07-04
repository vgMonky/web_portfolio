// src/App.js
import './var.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Foot from './components/Foot'


const App = () => {
  const [mainState, setMainState] = useState('intro');

  return (
    <div className="app">
      <Navbar setMainState={setMainState} />
      <Main mainState={mainState} />
      <Foot />
    </div>
  );
};

export default App;

