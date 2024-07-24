import React from 'react';
import './Numbers.css';

const Numbers = () => {

  return (
    <div className="numbers">
        <div className='pair'>
            <div className='box'>
                <h1>01</h1>
                <h3>They understand the UX principles.</h3>
            </div>
            <div className='box'>
                <h1>02</h1>
                <h3>They have an eye for aesthetics.</h3>
            </div>
        </div>
        <div className='pair'>
            <div className='box'>
                <h1>03</h1>
                <h3>They can write HTML, CSS & JavaScript.</h3>
            </div>
            <div className='box'>
                <h1>04</h1>
                <h3>They understand the possibilities of frontend development.</h3>
            </div>
        </div>
    </div>
  );
};

export default Numbers;


