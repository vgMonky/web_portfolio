import React from 'react';
import './GridGallery.css';
import ProjectCard from './ProjectCard';

const ProjectSetR = () => (
  <>
    <ProjectCard path="projects/futurama" />
    <ProjectCard path="projects/futurama" />
    <ProjectCard path="projects/futurama" />
    <ProjectCard path="projects/ingenia" />
  </>
);

const ProjectSetL = () => (
  <>
    <ProjectCard path="projects/ingenia" />
    <ProjectCard path="projects/ingenia" />
    <ProjectCard path="projects/futurama" />
  </>
);

const GridGallery = () => {
  return (
    <div className="outer-container">
      <div className="grid-container">
        <div className="grid-track grid-track-left">
          <ProjectSetL />
          <ProjectSetL />
          <ProjectSetL />
        </div>
        <div className="grid-track grid-track-right">
          <ProjectSetR />
          <ProjectSetR />
          <ProjectSetR />
        </div>
      </div>
    </div>
  );
};

export default GridGallery;