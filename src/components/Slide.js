import React from 'react';
import './Slide.css';

const Slide = ({ children, dir }) => {
  const content = React.Children.toArray(children);

  return (
    <div className="slide-container">
      {[1, 2, 3].map((_, index) => (
        <div key={index} className={`slide-track slide-track-${dir}`}>
          {content}
        </div>
      ))}
    </div>
  );
};

export default Slide;