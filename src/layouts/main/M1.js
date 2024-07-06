import React from 'react';
import './main_grid.css';
import BigText from '../../components/BigText';
import ProfileImg from '../../components/ProfileImg';
import ProfileCard from '../../components/ProfileCard';
import Expand from '../../components/Expand';

const M1 = () => {
  return (
    <div className="main-container">

      <div className='row'>
        <div className='m10'><BigText text={"FRONT END DESIGNER."}/></div>
      </div>

      <div className='row'>
        <div className='m3'><ProfileImg src={'http://studiogou.co/gou_images/bw.jpg'} /></div>
        <div className='m7'>
          <ProfileCard
            title="Victor Goudschaal"
            description1="Front-end Developer & Designer with 4 years of experience creating digital products such as web-pages, branding manuals and more."
            description2="I strive to constantly keep learning about technology to expand my capabilities as a digital creator."
            button="Click me"
            hover="More Projects"
          />
        </div>
      </div>

      <div className='row'>
        <div className='m10'><Expand subtitle="What is Front End Design?"/></div>
      </div>
      <div className='row'>
        <div className='m10'><Expand subtitle="Why you need a Front End Designer?" /></div>
      </div>
      <div className='row'>
        <div className='m10'><Expand subtitle="How does a Front End Designer develop?"/></div>
      </div>
    </div>
  );
};

export default M1;