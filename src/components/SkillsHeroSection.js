import React from 'react';
import '../App.css';
import './HeroSection.css';

function SkillsHeroSection() {
  return (
    <div className='hero-container'>
      <h1 className="skills"> Skills</h1>
      <video src="/videos/3dprinting.mp4" autoPlay loop muted />
      <h1>Christian Perez Castanaza</h1> 
      <p>Racing to succeed in anything he does!</p>
    </div>
  );
}

export default SkillsHeroSection
