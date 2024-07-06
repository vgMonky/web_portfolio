// src/App.js
import './var.css';
import React from 'react';
import Navbar from './layouts/Navbar';
import Main from './layouts/Main';
import Foot from './layouts/Foot';
import { AppProvider } from './AppContext';

const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <Navbar />
        <Main />
        <Foot />
      </div>
    </AppProvider>
  );
};

export default App;