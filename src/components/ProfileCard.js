import React from 'react';
import './ProfileCard.css';
import Logos from './Logos';

const ProfileCard = ({ title, description1, description2, button, hover }) => {
  return (
    <>
      <style>
        {`
          .profile_card .logo-track .logo {
            color: white;
            width: 30px;
          }
        `}
      </style>
      <div className="profile_card">
        <h2 className='title'>{title}</h2>
        <h3 className='description'>{description1}</h3>
        <Logos />
        <h3 className='description'>{description2}</h3>
      </div>
    </>
  );
};

export default ProfileCard;