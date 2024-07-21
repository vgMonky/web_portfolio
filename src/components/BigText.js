import React from 'react';
import './BigText.css';

const BigText = ({text}) => {

  return (
    <div className="big_text">
        <h1><span className='accent'>Front end Designer</span> with +4 years of experience.</h1>
        <h3>Let me help you expand your bussiness with the power of technology.</h3>
        <div className='buttons_container'>
          <div className='button'>Action</div>
      </div>
    </div>
  );
};

export default BigText;