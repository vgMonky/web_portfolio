import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Menu.css';

const Menu = ({ setMainState }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (section) => {
    setMainState(section);
    setIsOpen(false); // Close menu after selection
  };

  return (
    <div className="menu">
      <FaBars className="menu-icon hover" onClick={toggleMenu} />
      <div className={`menu-items ${isOpen ? 'open' : ''}`}>
        <a className='hover' onClick={() => handleMenuClick('intro')}>Intro</a>
        <a className='hover' onClick={() => handleMenuClick('projects')}>Projects</a>
        <a className='hover' onClick={() => handleMenuClick('info')}>Info.</a>
      </div>
    </div>
  );
};

export default Menu;