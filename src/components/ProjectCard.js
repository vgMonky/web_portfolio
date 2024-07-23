import React, { useEffect, useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ path }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const jpgImage = require(`../assets/${path}/cover.jpg`);
        setImageSrc(jpgImage);
      } catch (jpgError) {
        try {
          const pngImage = require(`../assets/${path}/cover.png`);
          setImageSrc(pngImage);
        } catch (pngError) {
          console.error('Error loading image:', jpgError, pngError);
        }
      }
    };

    loadImage();
  }, [path]);

  return (
    <div className="project_card">
      {imageSrc && <img src={imageSrc} alt="cover" />}
    </div>
  );
};

export default ProjectCard;
