import React from 'react';
import './SlideL.css';
import ProjectCard from './ProjectCard';

const Content = () => (
  <>
    <ProjectCard path="projects/unis" />
    <ProjectCard path="projects/reinventar" />
    <ProjectCard path="projects/scrum_go" />
    <ProjectCard path="projects/skygpu" />
    <ProjectCard path="projects/sonder" />
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