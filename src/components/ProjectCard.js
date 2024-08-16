import React, { useEffect, useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ path }) => {
  const [coverSrc, setCoverSrc] = useState(null);
  const [contentSrc, setContentSrc] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      // Load cover image
      try {
        const jpgCover = require(`../assets/${path}/cover.jpg`);
        setCoverSrc(jpgCover);
      } catch (jpgError) {
        try {
          const pngCover = require(`../assets/${path}/cover.png`);
          setCoverSrc(pngCover);
        } catch (pngError) {
          console.error('Error loading cover image:', jpgError, pngError);
        }
      }

      // Load content image
      try {
        const contentImage = require(`../assets/${path}/content.jpg`);
        setContentSrc(contentImage);
      } catch (error) {
        console.error('Error loading content image:', error);
        // If content image doesn't exist, contentSrc will remain null
      }
    };

    loadImages();
  }, [path]);

  const handleClick = () => {
    const imageToOpen = contentSrc || coverSrc;
    if (imageToOpen) {
      window.open(imageToOpen, '_blank');
    }
  };

  return (
    <div className="project_card" onClick={handleClick}>
      {coverSrc && (
        <>
          <img src={coverSrc} alt="cover" className="cover-image" />
          <div
            className="content-overlay"
            style={{
              backgroundImage: contentSrc ? `url(${contentSrc})` : 'none',
              backgroundColor: !contentSrc ? 'black' : 'transparent'
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;