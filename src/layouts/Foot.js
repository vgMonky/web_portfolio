import React from 'react';
import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from 'react-icons/fa';
import './Foot.css';

const Foot = () => {
  return (
    <footer className="foot">
        <div className='foot-content'>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/victor-andre-goudschaal-ingold/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon hover" />
            </a>
            <a href="https://github.com/vgMonky" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon hover" />
            </a>
            <a href="https://www.behance.net/victorgoudsch" target="_blank" rel="noopener noreferrer">
            <FaBehance className="icon hover" />
            </a>
            <a href="mailto:victorgou.design@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="icon hover" />
            </a>
          </div>
          <div className='cp'>
            © 2023 Victor Gou.
          </div>

        </div>
    </footer>
  );
};

export default Foot;
