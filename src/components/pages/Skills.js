import React from "react";
import '../../App.css';
import Footer from '../Footer.js';
import SkillCards from "../SkillCards";
export default function Skills() {
    return (
    <>
      <h1 className="skills"> Skills</h1>
      <SkillCards/>
      <Footer/>
    </>
  );
}