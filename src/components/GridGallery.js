import React from 'react';
import './GridGallery.css';
import ProjectCard from './ProjectCard';

const ProjectSet = () => (
  <>
    <ProjectCard path="projects/futurama" />
    <ProjectCard path="projects/ingenia" />
    <ProjectCard path="projects/futurama" />
    <ProjectCard path="projects/futurama" />
    <ProjectCard path="projects/ingenia" />
  </>
);

const GridGallery = () => {
  return (
    <div className="grid-container">
      <div className="grid-track">
        <ProjectSet />
      </div>
      <div className="grid-track">
        <ProjectSet />
      </div>
    </div>
  );
};

export default GridGallery;
