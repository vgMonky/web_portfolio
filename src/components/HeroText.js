import React from 'react';
import './HeroText.css';

const HeroText = ({text}) => {

  return (
    <div className="big_text">
        <h1><span className='accent'>Front end Designer</span> with +4 years of experience.</h1>
        <h3>Let me help you expand your bussiness.</h3>
        <div className='buttons_container'>
          <div className='button'>Discover More</div>
      </div>
    </div>
  );
};

export default HeroText