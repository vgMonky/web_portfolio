import React, { useEffect, useState } from 'react';
import './ProjectCard.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ path }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [contentImages, setContentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch info text
    fetch(`/src/assets/${path}/info.txt`)
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');
        const nameMatch = lines[0].match(/name = "(.*?)"/);
        const typeMatch = lines[1].match(/type = "(.*?)"/);
        if (nameMatch) setName(nameMatch[1]);
        if (typeMatch) setType(typeMatch[1]);
      })
      .catch(error => console.error('Error fetching the info:', error));

    // Load content images
    const loadImages = async () => {
      try {
        const imageContext = require.context('../assets', true, /\.(png|jpe?g|svg)$/);
        const imageKeys = imageContext.keys().filter(key => key.includes(`${path}/content/`));
        const images = imageKeys.map(key => imageContext(key));
        setContentImages(images);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, [path]);

  const handleClick = () => {
    setShowContent(true);
  };

  const handleCloseContent = (e) => {
    e.stopPropagation();
    setShowContent(false);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? contentImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === contentImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="profile_card" onClick={handleClick}>
        <img src={require(`../assets/${path}/cover.jpg`)} alt="cover" />
        <div className='info'>
          <div className='name'>{name}</div>
          <div className='type'>{type}</div>
        </div>
      </div>
      {showContent && (
        <div className="content-overlay">
          <div className="content-container">
            <button className="close-button" onClick={handleCloseContent}>X</button>
            <div className='content'>
              {contentImages.length > 0 && (
                <>
                  <img src={contentImages[currentImageIndex]} alt={`content-${currentImageIndex + 1}`} />
                  <button className="arrow left" onClick={handlePrevImage}>
                    <FaArrowLeft />
                  </button>
                  <button className="arrow right" onClick={handleNextImage}>
                    <FaArrowRight />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;