import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ title, description1, description2, button, hover }) => {
  return (
    <div className="profile_card">
      <h2 className='title'>{title}</h2>
      <h2 className='description'>{description1}</h2>
      <h3 className='description'>{description2}</h3>
      <div className='buttons_container'>
        <div className='button'>{button}</div>
        <div className='hover'>{hover}</div>
      </div>
    </div>
  );
};

export default ProfileCard;