import React from 'react';
import './ProfileText.css';

const ProfileText = () => {

  return (
    <div className="profile_text">
        <p className='title'>Victor Goudschaal</p>
        <p className='description'>
            Front-end Developer & Designer with 4 years of experience creating digital products such as web-applications, branding manuals and more.
        </p>
        <p className='description'> 
            I strive to constantly keep learning about technology to expand my capabilities as a digital creator and artist.</p>
        <div className='buttons_container'>
            <div className='button'>Click Me</div>
            <div className='hover'>More Projects</div>
        </div>
    </div>
  );
};

export default ProfileText;