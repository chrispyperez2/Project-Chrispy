import React from "react";
import '../../App.css';

import HobbiesCardItem from "../HobbiesCards";
export default function Hobbies() {
  return (
    <>    
    <div className="instagram-container">
      <h1 className="hobbies">Hobbies</h1>
      <ul className="hobbies__list">
        <HobbiesCardItem url="https://www.instagram.com/p/ChYjs0zL0Hh/?img_index=1"/>
        <HobbiesCardItem url="https://www.instagram.com/p/Cl4k0RovZp3/?img_index=1"/>
        <HobbiesCardItem url="https://www.instagram.com/p/Cdw8pJlNhLG/"/>
      </ul>

    </div>

    </>

  ) 
}