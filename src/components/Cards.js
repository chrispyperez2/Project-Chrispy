import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
  return (
    <div className='cards'> 
      <h1>Check out what makes Chris . . .  CHRIS!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="https://d1hdl6pwuskfno.cloudfront.net/images/circuit.jpg" 
            text="Take a look at what where he's worked and what he knows!"
            label="Skills"
            path="/skills"
            />

            <CardItem 
            src="https://d1hdl6pwuskfno.cloudfront.net/images/3Dprinter.jpg" 
            text="What's he working on now?"
            label="Projects"
            path="/projects"
            />
          </ul>

          <ul className='cards__items'>
            <CardItem 
            src="https://d1hdl6pwuskfno.cloudfront.net/images/wrx.jpg" 
            text="Cars, electronics, gardening and everything in between!"
            label="Hobbies"
            path="/hobbies"
            />

            <CardItem 
            src="https://d1hdl6pwuskfno.cloudfront.net/images/angkorWat.jpg" 
            text="Struck with Wanderlust... wandering anywhere that has cheap beer!"
            label="Travels"
            path="/travels"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
