import React from "react";
import '../../App.css';
import Footer from '../Footer.js';
import SkillCards from "../SkillCards";
import SkillsHeroSection from "../SkillsHeroSection";
export default function Skills() {
    return (
    <>
      <SkillsHeroSection/>
      <SkillCards/>
      <Footer/>
    </>
  );
}