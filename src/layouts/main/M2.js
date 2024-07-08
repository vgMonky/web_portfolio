import React from 'react';
import './main_grid.css'
import ProjectCard from '../../components/ProjectCard'

// Static imports
import coverImage from '../../assets/projects/futurama/cover.jpg';
import contentImage from '../../assets/projects/futurama/content/1.jpg';
import infoText from '../../assets/projects/futurama/info.txt';




const M2 = () => {
  return (
    <div className="projects">
      <ProjectCard 
        coverImage={coverImage}
        contentImage={contentImage}
        infoText={infoText}
      />
    </div>
  );
};

export default M2;