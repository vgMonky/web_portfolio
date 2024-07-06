// src/layouts/Main.js
import React from 'react';
import M1 from './main/M1';
import M2 from './main/M2';
import M3 from './main/M3';
import './Main.css';
import { useAppContext } from '../AppContext';

const Main = () => {
  const { mainState } = useAppContext();

  return (
    <div className="main">
      <div className='main-content'>
        {mainState === 'm1' && <M1 />}
        {mainState === 'm2' && <M2 />}
        {mainState === 'm3' && <M3/>}
      </div>
    </div>
  );
};

export default Main;