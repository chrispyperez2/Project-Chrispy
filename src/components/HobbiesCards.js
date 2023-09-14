import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import "./HobbiesCards.css"
function HobbiesCardItem(props) {
  return (
   <>
    <li className='hobbies__list__item'>
      <div className='instagram__item'>
        <InstagramEmbed className="InstagramEmbed" url={props.url} width= "100%" height="100%"/>
      </div>
    </li>
   </>
  )
}

export default HobbiesCardItem;