import React from 'react';
import './M1.css';
import HeroText from '../../components/HeroText';
import Title from '../../components/Title';
import ProfileImg from '../../components/ProfileImg';
import ProfileCard from '../../components/ProfileCard';
import Logos from '../../components/Logos';
import Expand from '../../components/Expand';
import profile_img from '../../assets/profile.jpg';
import Slide from '../../components/Slide';
import ProjectCard from '../../components/ProjectCard';

const M1 = () => {
  return (
    <div className="main-container">

      <div className='row'>
        <div className='m10'><HeroText text={"Front end Designer with +4 years of experience."}/></div>
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




      <div className='row'>
        <div className='m10'><Title
        text={"Who is a Front End Designer?"}
        text2={"Living between the world of communication and engineering:"}
        /></div>
      </div>
      <div className='row'>
        <div className='m5'><h1>1</h1><h3>they understand the UX principles</h3></div>
        <div className='m5'><h1>2</h1><h3>they have an eye for aesthetics</h3></div>
        <div className='m5'><h1>3</h1><h3>they can write HTML, CSS & JavaScript.</h3></div>
        <div className='m5'><h1>4</h1><h3>they understand the possibilities of frontend development</h3></div>
      </div>


      <div className='row space'>
      </div>
      <div className='row space'>
      </div>
      <div className='row space'>
      </div>
      <div className='row space'>
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