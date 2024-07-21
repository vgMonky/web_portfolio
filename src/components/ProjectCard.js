import React, { useEffect, useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ path }) => {

  return (
    <div className="project_card">
      <img src={require(`../assets/${path}/cover.jpg`)} alt="cover" />
    </div>
  );
};

export default ProjectCard;