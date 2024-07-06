import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ title, description1, description2, button, hover }) => {
  return (
    <div className="profile_card">
      <p className='title'>{title}</p>
      <p className='description'>{description1}</p>
      <p className='description'>{description2}</p>
      <div className='buttons_container'>
        <div className='button'>{button}</div>
        <div className='hover'>{hover}</div>
      </div>
    </div>
  );
};

export default ProfileCard;