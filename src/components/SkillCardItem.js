import React from 'react'

function SkillCardItem(props) {
  return (
   <>
    <li className='skill__cards__item'>
    <h5 className='skill__cards__item__text'>
      {props.label}
    </h5>
      <div className='skill__cards__item__info'>

      </div>

        <div className='skill__items__container'>
          <div>
            <ul className='skill__item'>
              <p>{props.text}</p>
            </ul>
          </div>
        </div>
        

    </li>
   </>
  )
}

export default SkillCardItem;