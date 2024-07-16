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
    const loadInfo = async () => {
      try {
        const infoModule = await import(`../assets/${path}/info.txt`);
        const infoText = await fetch(infoModule.default).then(res => res.text());
        const lines = infoText.split('\n');
        if (lines.length >= 2) {
          const nameMatch = lines[0].match(/"(.*?)"/);
          const typeMatch = lines[1].match(/"(.*?)"/);
          if (nameMatch) setName(nameMatch[1]);
          if (typeMatch) setType(typeMatch[1]);
        } else {
          console.error('Unexpected format in info.txt');
        }
      } catch (error) {
        console.error('Error loading info:', error);
      }
    };
  
    loadInfo();

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
            <div className="close-button" onClick={handleCloseContent}>X</div>
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