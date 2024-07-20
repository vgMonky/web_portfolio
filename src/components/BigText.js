import React from 'react';
import './BigText.css';

const BigText = ({text}) => {

  return (
    <div className="big_text">
        <h1>{text}</h1>
    </div>
  );
};

export default BigText;