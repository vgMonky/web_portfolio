import React, { useEffect, useState } from 'react';
import './ProjectCard.css';
// Image imports
import coverImage from '../assets/projects/futurama/cover.jpg';
import contentImage from '../assets/projects/futurama/content/1.jpg';

const ProjectCard = () => {
    const [info, setInfo] = useState('');
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        fetch(require('../assets/projects/futurama/info.txt'))
            .then(response => response.text())
            .then(text => setInfo(text))
            .catch(error => console.error('Error fetching the info:', error));
    }, []);

    const handleClick = () => {
        setShowContent(true);
    };

    const handleCloseContent = (e) => {
        e.stopPropagation();
        setShowContent(false);
    };

    return (
        <>
            <div className="profile_card" onClick={handleClick}>
                <img src={coverImage} alt="cover" />
                <div className='info'>{info}</div>
            </div>
            {showContent && (
                <div className="content-overlay">
                    <div className="content-container">
                        <button className="close-button" onClick={handleCloseContent}>X</button>
                        <div className='content'>
                            <img src={contentImage} alt="content" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;