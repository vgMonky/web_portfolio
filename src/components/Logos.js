import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import './Logos.css';

const LogoSet = () => (
  <>
    <FaHtml5 className="logo html" title="HTML5" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/HTML')} />
    <FaCss3Alt className="logo css" title="CSS3" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/CSS')} />
    <FaJs className="logo js" title="JavaScript" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript')} />
    <FaReact className="logo react" title="React" onClick={() => window.open('https://reactjs.org/')} />
    <FaPython className="logo python" title="Python" onClick={() => window.open('https://www.python.org')} />
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
