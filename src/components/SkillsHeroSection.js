import React from 'react';
import '../App.css';
import './HeroSection.css';

function SkillsHeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/3dprinting.mp4" autoPlay loop muted />
      <h1 className="skills"> He's got the C H O P S!</h1>
    </div>
  );
}

export default SkillsHeroSection
