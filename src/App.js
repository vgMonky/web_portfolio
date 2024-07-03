// src/App.js
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Foot from './components/foot/Foot'


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

