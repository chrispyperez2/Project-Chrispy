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
            src="images/wrx.jpg" 
            text="Loves to work on cars and track as much as his wallet can afford!"
            label="Hobbies"
            path="/hobbies"
            />

            <CardItem 
            src="images/cambodia.jpg" 
            text="Loves to travel, especially anywhere that has cheap beer!"
            label="Travels"
            path="/travels"
            />
          </ul>

          <ul className='cards__items'>
            <CardItem 
            src="images/3DPrinter.jpg" 
            text="Constantly teaches himself new skills to keep growing!"
            label="Skills"
            path="/skills"
            />

            <CardItem 
            src="images/morningGlory.jpg" 
            text="Enjoys learning about gardening! (Even though he has no green thumb)"
            label="Hobbies"
            path="/hobbies"
            />

            <CardItem 
            src="images/doggos.jpg" 
            text="Has a special bond with his family and his dogs!"
            label="Who he loves"
            path="/family"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
