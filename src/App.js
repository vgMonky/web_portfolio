// src/App.js
import './var.css';
import './App.css';
import React from 'react';
import Navbar from './layouts/Navbar';
import Main from './layouts/Main';
import Foot from './layouts/Foot';
import { AppProvider } from './AppContext';

const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <div className="color-bg"></div>
        <div className="bg"></div>
        <div className="glass"></div>
        <Navbar />
        <Main />
        <Foot />
      </div>
    </AppProvider>
  );
};

export default App;
