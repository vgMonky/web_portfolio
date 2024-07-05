import React from 'react';
import './main_grid.css';
import BigText from '../micro_components/BigText';
import ProfileImg from '../micro_components/ProfileImg';
import ProfileText from '../micro_components/ProfileText';


const Intro = () => {
  return (
    <div className="main-container">
      <div className='row'>
        <div className='m10'><BigText/></div>
      </div>
      <div className='row'>
        <div className='m3'><ProfileImg/></div>
        <div className='m7'><ProfileText/></div>
      </div>
      <div className='row'>
        <div className='m6'>6</div>
        <div className='m4'>4</div>
      </div>
    </div>
  );
};

export default Intro;
