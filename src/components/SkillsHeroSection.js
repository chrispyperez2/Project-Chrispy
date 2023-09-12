import React from 'react';
import '../App.css';
import './HeroSection.css';
import ReactPlayer from 'react-player';

function SkillsHeroSection() {
  return (
    <div className='hero-container'>
      <ReactPlayer
        url='https://project-chrispy-sources.s3.amazonaws.com/videos/3dprinting.mp4'
        playing={true}
        loop={true}
        muted={true}
        controls={false}
        width='100%'
        height='100%'
        id="background_video"
      />
      <h1 className="skills"> He's got the C H O P S!</h1>
    </div>
  );
}

export default SkillsHeroSection
