// src/layouts/Navbar.js
import React from 'react';
import Menu from '../components/Menu';
import './Navbar.css';
import { ReactComponent as Logo } from '../assets/victor_gou/logo.svg';
import profile_img from '../assets/profileCenter.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-content'>
        <div className="logo-profile-group">
          <div className="profile-image-container">
            <img src={profile_img} alt="Profile" className="profile-image" />
          </div>
          <Logo width="120" height="50" fill="var(--t3)" />
        </div>
        <Menu m1={"Home"} m2={"Proyects"} m3={"Contact"}/>
      </div>
    </nav>
  );
};

export default Navbar;