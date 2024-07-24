import React from 'react';
import './ProfileImg.css';

const ProfileImg = ({src}) => {

  return (
    <div className="profile_image">
        <img src={src} alt="Profile"></img>
    </div>
  );
};

export default ProfileImg;