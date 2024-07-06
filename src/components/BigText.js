import React from 'react';
import './BigText.css';

const BigText = ({text}) => {

  return (
    <div className="big_text">
        <div className='text'>{text}</div>
    </div>
  );
};

export default BigText;