import React from 'react';
import './SlideL.css';
import ProjectCard from './ProjectCard';

const Content = () => (
  <>
    <ProjectCard path="projects/futurama" />
    <ProjectCard path="projects/futurama" />
    <ProjectCard path="projects/futurama" />
    <ProjectCard path="projects/ingenia" />
  </>
);

const SlideL = () => {
  return (
    <div className="slide-container">
      <div className="slide-track">
        <Content />
      </div>
      <div className="slide-track">
        <Content />
      </div>
      <div className="slide-track">
        <Content />
      </div>
    </div>
  );
};

export default SlideL;