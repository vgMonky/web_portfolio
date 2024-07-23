import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaFigma} from 'react-icons/fa';
import { SiAdobecreativecloud } from 'react-icons/si';
import './Logos.css';

const LogoSet = () => (
  <>
    <FaHtml5 className="logo html" title="HTML5" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/HTML')} />
    <FaCss3Alt className="logo css" title="CSS3" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/CSS')} />
    <FaJs className="logo js" title="JavaScript" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript')} />
    <FaReact className="logo react" title="React" onClick={() => window.open('https://reactjs.org/')} />
    <FaPython className="logo python" title="Python" onClick={() => window.open('https://www.python.org')} />
    <FaFigma className="logo figma" title="Figma" onClick={() => window.open('https://www.figma.com')} />
    <SiAdobecreativecloud className="logo adobe" title="Adobe Creative Cloud" onClick={() => window.open('https://www.adobe.com/creativecloud.html')}/>
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
