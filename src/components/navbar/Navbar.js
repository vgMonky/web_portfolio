import React from 'react';
import Menu from './Menu';
import './Navbar.css';

const Navbar = ({ setMainState }) => {
  return (
    <nav className="navbar">
      <div className='navbar_content'>
        <div className="logo hover">
          <img src="/path/to/logo.png" alt="Logo" />
          <span>Victor Gou</span>
        </div>
        <Menu setMainState={setMainState} />
      </div>
    </nav>
  );
};

export default Navbar;

