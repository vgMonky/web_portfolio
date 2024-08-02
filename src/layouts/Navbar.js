// src/layouts/Navbar.js
import React from 'react';
import Menu from '../components/Menu';
import './Navbar.css';
import { ReactComponent as Logo } from '../assets/victor_gou/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-content'>
        <Logo width="130" height="50" fill="var(--t3)" />
        <Menu m1={"Home"} m2={"Proyects"} m3={"Contact"}/>
      </div>
    </nav>
  );
};

export default Navbar;