import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import ReactPlayer from 'react-player';


function HeroSection() {
  return (
    <div className='hero-container'>
      <ReactPlayer
        url='https://project-chrispy-sources.s3.amazonaws.com/videos/wrx.mp4'
        playing={true}
        loop={true}
        muted={true}
        controls={false}
        width='100%'
        height='100%'
        id="background_video"
      />
      <h1>Christian Perez Castañaza</h1> 
      <p className='quote'>Racing to succeed in EVERYTHING he does!</p>
      <div className='hero-btns'>
        <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
          Why Hire him?
        </Button>
      </div>
      <p className='quote'>"... in order to be a realist, you must believe in miracles."</p>
      <br/>
      <p className='quote__author'> - David Ben-Gurion</p>
      <br/>
    </div>
  );
}

export default HeroSection
