import React from 'react';
import Intro from './Intro';
import Projects from './Projects';
import Info from './Info';
import './Main.css';

const Main = ({ mainState }) => {
  return (
    <div className="main">
        <div className='main_content'>
            {mainState === 'intro' && <Intro />}
            {mainState === 'projects' && <Projects />}
            {mainState === 'info' && <Info />}
        </div>
    </div>
  );
};

export default Main;
