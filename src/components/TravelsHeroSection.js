import React from 'react';
import '../App.css';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
function TravelsHeroSection() {
  return (
    <div className='travels__hero__container'>
      <h1 className="travels__quote"> Where has he been? </h1>
      <div className='carousel__container'>
        <Carousel autoPlay="true" dynamicHeight="false" 
          infiniteLoop="true" interval={2000} 
          stopOnHover="true" width="90%"
        >
        <div>
          <img src="https://d1hdl6pwuskfno.cloudfront.net/images/angkorWat.jpg" alt="AgnkorWat"/>
          <p className="legend">Siem Reap, Agnkor Wat</p>
        </div>
        <div>
          <img src="https://d1hdl6pwuskfno.cloudfront.net/images/england.jpg" alt="England" />
          <p className="legend">England on the Eye</p>
        </div>
        <div>
          <img src="https://d1hdl6pwuskfno.cloudfront.net/images/belgium.jpg" alt="Belgium" />
          <p className="legend">Manneken Pis in Belgium</p>
        </div>
        <div>
          <img src="https://d1hdl6pwuskfno.cloudfront.net/images/france.jpg" alt="France" />
          <p className="legend">Eiffle Tower in France</p>
        </div>
        <div>
          <img src="https://d1hdl6pwuskfno.cloudfront.net/images/ireland.jpg" alt="Ireland" />
          <p className="legend">On a horse drawn carrige in Ireland</p>
        </div>
        <div>
          <img src="https://d1hdl6pwuskfno.cloudfront.net/images/netherlands.jpg" alt="Netherlands" />
          <p className="legend">Filling in Clogs in Netherlands</p>
        </div>

        </Carousel>
      </div>

    </div>
  );
}

export default TravelsHeroSection
