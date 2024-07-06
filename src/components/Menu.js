// src/layouts/Menu.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Menu.css';
import { useAppContext } from '../AppContext';

const Menu = ({m1, m2, m3}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setMainState } = useAppContext();

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
        <a className='hover' onClick={() => handleMenuClick('m1')}>{m1}</a>
        <a className='hover' onClick={() => handleMenuClick('m2')}>{m2}</a>
        <a className='hover' onClick={() => handleMenuClick('m3')}>{m3}</a>
      </div>
    </div>
  );
};

export default Menu;