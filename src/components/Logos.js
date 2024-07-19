import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import './Logos.css';

const LogoSet = () => (
  <>
    <FaHtml5 className="logo html" title="HTML5" />
    <FaCss3Alt className="logo css" title="CSS3" />
    <FaJs className="logo js" title="JavaScript" />
    <FaReact className="logo react" title="React" />
    <FaPython className="logo python" title="Python" />
  </>
);

const Logos = () => {
  return (
    <div className="logo-container">
      <div className="logo-track">
        <LogoSet />
      </div>
      <div className="logo-track">
        <LogoSet />
      </div>
      <div className="logo-track">
        <LogoSet />
      </div>
    </div>
  );
};

export default Logos;
