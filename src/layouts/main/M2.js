import React from 'react';
import './main_grid.css'
import ProjectCard from '../../components/ProjectCard'

const M2 = () => {
  return (
    <div className="projects">
      <ProjectCard path="projects/futurama" />
      <ProjectCard path="projects/ingenia" />
      
    </div>
  );
};

export default M2;