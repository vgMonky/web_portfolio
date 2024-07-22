import React from 'react';
import './ProfileCard.css';
import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from 'react-icons/fa';

const ProfileCard = ({ title, description1, description2}) => {
  return (
    <>
      <style>
        {`
          .profile_card .logo-track .logo {
            color: white;
            width: 30px;
          }
        `}
      </style>
      <div className="profile_card">
        <h2>{title}</h2>
        <h3 >{description1}</h3>
        <div className="social-icons">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon hover" />
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon hover" />
              </a>
              <a href="https://www.behance.net/victorgoudsch" target="_blank" rel="noopener noreferrer">
              <FaBehance className="icon hover" />
              </a>
              <a href="mailto:your.email@example.com">
              <FaEnvelope className="icon hover" />
              </a>
          </div>
        <p>{description2}</p>
        
      </div>
    </>
  );
};

export default ProfileCard;