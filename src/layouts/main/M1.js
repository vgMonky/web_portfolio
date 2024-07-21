import React from 'react';
import './M1.css';
import BigText from '../../components/BigText';
import ProfileImg from '../../components/ProfileImg';
import ProfileCard from '../../components/ProfileCard';
import Logos from '../../components/Logos';
import Expand from '../../components/Expand';
import profile_img from '../../assets/profile.jpg';
import SlideL from '../../components/SlideL';
import SlideR from '../../components/SlideR';

const M1 = () => {
  return (
    <div className="main-container">

      <div className='row'>
        <div className='m10'><BigText text={"Front end Designer with +4 years of experience."}/></div>
      </div>

      <div className='row'>
        <div className='m10'><Logos/></div>
      </div>
      <div className='row space'>
      </div>

      <div className='row'>
        <div className='m3'><ProfileImg src={profile_img} /></div>
        <div className='m7'>
          <ProfileCard
            title="Victor Goudschaal."
            description1="Digital Creator"
            description2="+4 years collaborating with different businesses . . ."
          />
        </div>
      </div>
      <div className='row space'>
      </div>
      <div className='row space'>
      </div>
      <div className='row space'>
      </div>
      <div className='row space'>
      </div>
      <div className='row space'>
      </div>
      <div className='row space'>
      </div>
      <div className='row space'>
      </div>
      <div className='row space'>
      </div>
      <div className='row space'>
      </div>



      <h1>+4 years creating digital products.</h1>
      <div className='row'>
        <div className='m10'><SlideR/></div>
      </div>
      <div className='row'>
        <div className='m10'><SlideL/></div>
      </div>
      <div className='row'>
        <div className='m10'><SlideR/></div>
      </div>


      <div className='row'>
        <div className='m10'><BigText text={"Why you need a Front End Designer?"}/></div>
      </div>


      <div className='row'>
        <div className='m10'><Expand
          subtitle="Who is a Front End Designer?"
          description="Front-end designers combine the key components of both jobs living between the world of communication and engineering:
          >>they understand the UX principles
          >>they have an eye for aesthetics
          >>they can write HTML, CSS & JavaScript.
          >>they understand the possibilities of frontend development"
        /></div>
      </div>

      <div className='row'>
        <div className='m10'><Expand
          subtitle="Why you need a Front End Designer?" 
        /></div>
      </div>
      
      <div className='row'>
        <div className='m10'><Expand subtitle="How does a Front End Designer develop?"/></div>
      </div>
    </div>
  );
};

export default M1;