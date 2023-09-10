import React from 'react'

function SkillCardItem(props) {
  return (
   <>
    <li className='skill__cards__item'>
    <h3 className='skill__cards__item__text'>
      {props.label}
    </h3>
      <div className='skill__items__container'>
        <ul>
          <p className='experience__content'>{props.text}</p>
        </ul>
      </div>
    </li>
   </>
  )
}

export default SkillCardItem;