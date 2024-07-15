import React from 'react';
import './M2.css'
import ProjectCard from '../../components/ProjectCard'

const M2 = () => {
  return (
    <div className="main_container">
      <div className='grid_gallery'>
        <ProjectCard path="projects/futurama" />
        <ProjectCard path="projects/ingenia" />
        <ProjectCard path="projects/futurama" />
        <ProjectCard path="projects/futurama" />
        <ProjectCard path="projects/ingenia" />
      </div>
    </div>
  );
};

export default M2;