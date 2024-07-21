import React from 'react';
import './SlideR.css';
import ProjectCard from './ProjectCard';

const Content = () => (
  <>
    <ProjectCard path="projects/futurama" />
    <ProjectCard path="projects/futurama" />
    <ProjectCard path="projects/futurama" />
    <ProjectCard path="projects/ingenia" />
  </>
);

const SlideR = () => {
  return (
    <div className="slide-container">
      <div className="slide-track-R">
        <Content />
      </div>
      <div className="slide-track-R">
        <Content />
      </div>
      <div className="slide-track-R">
        <Content />
      </div>
    </div>
  );
};

export default SlideR;