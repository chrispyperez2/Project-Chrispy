import React from "react";
import '../../App.css';
import Footer from '../Footer';
import ProjectItem from "../ProjectItem";

export default function Projects() {
  return(
    <>
      <h1 className="projects">Projects</h1>
      <div className="projects__container">
        <ul className="projects__list">
          <ProjectItem
          label="IP Web Camera Security System"
          text="Using old android phones as IP webcameras, I am streaming the video to a computer/raspberry pi running an OpenCV based Image detection software to detect people in my house while I'm away on vacations or extended family visits."
          src="images/wrx.jpg"
          />

          <ProjectItem
          label="IP Web Camera Security System"
          text="Using old android phones as IP webcameras, I am streaming the video to a computer/raspberry pi running an OpenCV based Image detection software to detect people in my house while I'm away on vacations or extended family visits."
          src="images/wrx.jpg"
          />
        </ul>
      </div>
      <Footer/>
    </>
    
  ) 
}