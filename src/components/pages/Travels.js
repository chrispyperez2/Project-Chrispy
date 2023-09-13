import React from "react";
import '../../App.css';
import Footer from '../Footer';
import "../MapChart.css";

import MapChart from "../MapChart";

export default function Travels() {
  return(
    <>
      <h1 className="travels">Where has he been?</h1>
      <div>
        <MapChart />
      </div>
      <Footer/>
    </>
    
  ) 
}