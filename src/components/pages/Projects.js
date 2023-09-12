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
          label="WRX Track Car / Volvo Drift Car"
          text="Using my WRX and Volvo to teach myself automotive skills to eventually turn the 2020 WRX into a dedicated track car and the 1992 Volvo 240 into a dedicated drift car. The WRX has upgraded suspension and performance parts to push the car to its limits.
          The Volvo has been relagated to the daily while I build up funds for an eventual engine swap. The current plan is an LM7 from an 1999-2007 Chevy Silverado. Currently out of money XD. You can follow the build progress of each car on their dedicated instagrams. 'Kuhrisp_WRX' and 'aqua_240'! "
          src="images/wrx.jpg"
          />
        </ul>
      </div>
      <Footer/>
    </>
    
  ) 
}