import React from 'react';
import '../App.css';
import './HeroSection.css';
import ReactPlayer from 'react-player';

function SkillsHeroSection() {
  return (
    <div className='hero-container'>
      <ReactPlayer
        url='https://d1hdl6pwuskfno.cloudfront.net/videos/3dprinting.mp4'
        playing={true}
        loop={true}
        muted={true}
        controls={false}
        width='100%'
        height='100%'
        id="background_video"
      />
      <h1 className="skills__quote"> He's got the </h1>
      <h1 className="skills__quote__headline">$kills to pay the bills!</h1>
    </div>
  );
}

export default SkillsHeroSection
