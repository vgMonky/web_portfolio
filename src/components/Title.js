import React from 'react';
import './Title.css';

const Title = ({text, text2}) => {

  return (
    <div className="title">
        <h2>{text}</h2>
        <h3>{text2}</h3>
    </div>
  );
};

export default Title