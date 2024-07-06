// src/layouts/Navbar.js
import React from 'react';
import Menu from '../components/Menu';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-content'>
        <div className="logo hover">
          <img src="/path/to/logo.png" alt="Logo" />
          <span>Victor Gou.</span>
        </div>
        <Menu m1={"Home"} m2={"Projects"} m3={"Settings"}/>
      </div>
    </nav>
  );
};

export default Navbar;