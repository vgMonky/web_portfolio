import React from 'react';
import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from 'react-icons/fa';
import './Foot.css';

const Foot = () => {
  return (
    <footer className="foot">
        <div className='foot_content'>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
                </a>
                <a href="https://www.behance.net/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaBehance className="icon" />
                </a>
                <a href="mailto:your.email@example.com">
                <FaEnvelope className="icon" />
                </a>
            </div>
        </div>
    </footer>
  );
};

export default Foot;
