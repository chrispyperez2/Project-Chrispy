import React from "react";
import '../../App.css';
import Footer from '../Footer';
import "../MapChart.css";
import TravelsHeroSection from "../TravelsHeroSection"
import MapChart from "../MapChart";

export default function Travels() {
  return(
    <>
      <TravelsHeroSection/>
      <div>
        <MapChart />
      </div>
      <Footer/>
    </>
    
  ) 
}