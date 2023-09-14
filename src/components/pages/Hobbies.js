import React from "react";
import '../../App.css';
import { InstagramEmbed } from 'react-social-media-embed';
import Footer from '../Footer'
export default function Hobbies() {
  return (
    <>    
    <div className="instagram-container">
      <h1 className="hobbies">Hobbies</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/p/ChYjs0zL0Hh/?img_index=1" width={1000} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/p/Cl4k0RovZp3/?img_index=1" width={1000} />
      </div>
    </div>
    <Footer/>
    </>

  ) 
}