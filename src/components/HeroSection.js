import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/wrx.mp4" autoPlay loop muted />
      <h1>Christian Perez Castañaza</h1> 
      <p>Racing to succeed in EVERYTHING he does!</p>
      <div className='hero-btns'>
        <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
          Why Hire him?
        </Button>

        {/* <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
          WATCH TRAILER <i className='far fa-play-circle'/>
        </Button> */}
      </div>
      <p className='quote'>"... in order to be a realist, you must believe in miracles."</p>
      <br/>
      <p> - David Ben-Gurion</p>
    </div>
  );
}

export default HeroSection
