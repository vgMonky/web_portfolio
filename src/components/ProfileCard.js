import React from 'react';
import './ProfileCard.css';
import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from 'react-icons/fa';

const ProfileCard = ({ title, description1, description2}) => {
  return (
    <>

      <div className="profile_card">
        <h2>{title}</h2>
        <h3 >{description1}</h3>
        <div className="social-icons">
            <a href="https://github.com/vgMonky" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon hover" />
            </a>
            <a href="https://www.behance.net/victorgoudsch" target="_blank" rel="noopener noreferrer">
            <FaBehance className="icon hover" />
            </a>
            <a href="https://www.linkedin.com/in/victor-andre-goudschaal-ingold/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon hover" />
            </a>
            <a href="#contact">
            <FaEnvelope className="icon hover" />
            </a>
        </div>
        <a className='hover' href='CV.pdf' download rel="noopener noreferrer">{description2}</a>
        
      </div>
    </>
  );
};

export default ProfileCard;