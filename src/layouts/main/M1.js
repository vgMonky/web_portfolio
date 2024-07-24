import React from 'react';
import './M.css';
import HeroText from '../../components/HeroText';
import Title from '../../components/Title';
import ProfileImg from '../../components/ProfileImg';
import ProfileCard from '../../components/ProfileCard';
import Logos from '../../components/Logos';
import Expand from '../../components/Expand';
import profile_img from '../../assets/profile.jpg';
import Slide from '../../components/Slide';
import ProjectCard from '../../components/ProjectCard';
import Numbers from '../../components/Numbers';

const M1 = () => {
  return (
    <div className="main-container">

      <div className='section'>
        <div className='row'>
          <div className='m10'><HeroText /></div>
        </div>
      </div>


      <div className='section'>
        <div className='row'>
          <div className='m10'><Logos/></div>
        </div>

        <div className='row'>
          <div className='m3'><ProfileImg src={profile_img} /></div>
          <div className='m7'>
            <ProfileCard
              title="Victor Goudschaal."
              description1="Digital Creator"
              description2="Click here to download CV document."
            />
          </div>
        </div>
      </div>


      <div className='section'>
        <div className='row'>
          <div className='m10'><Title 
          text={"+4 years creating digital products."}
          text2={"Expand your bussiness with the power of technology & design."}
          /></div>
        </div>
        <div className='row'>
          <div className='m10'><Slide dir="right">
            <ProjectCard path="projects/ombu" />
            <ProjectCard path="projects/la_despensa" />
            <ProjectCard path="projects/futurama" />
            <ProjectCard path="projects/ingenia" />
          </Slide></div>
        </div>
        <div className='row'>
          <div className='m10'><Slide dir="left">
            <ProjectCard path="projects/unis" />
            <ProjectCard path="projects/reinventar" />
            <ProjectCard path="projects/scrum_go" />
            <ProjectCard path="projects/skygpu" />
            <ProjectCard path="projects/sonder" />
          </Slide></div>
        </div>
      </div>

      <div className='space'></div>
      <div className='section t0'>
        <div className='row'>
          <div className='m10'><Title
          text={"Who is a Front End Designer?"}
          text2={"Living between the world of communication and engineering:"}
          color='t3'
          /></div>
        </div>
        <div className='row'>
          <div className='m10'><Numbers /></div>
        </div>
      </div>
      

      <div className='section'>
        <div className='row'>
          <div className='m10'><Title
          text={"Let’s Connect! "}
          text2={"Choose a convenient time or drop a message."}
          /></div>
        </div>
        <div className='row'>
          <div className='m10'><Expand subtitle={"Schedule Meeting"}/></div>
        </div>
        <div className='row'>
          <div className='m10'><Expand subtitle={"Send Mail"}/></div>
        </div>
      </div>

    </div>
  );
};

export default M1;