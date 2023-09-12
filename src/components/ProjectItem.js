import React from 'react'
import "./ProjectItem.css";
function ProjectItem(props) {
  return (
   <>
    <li className="projects__list__item">
      <div className="projects__list__item__container">
        <h2 className='project__item__title'>{props.label}</h2>
        <p className='project__item__text'>{props.text}</p>
        <img className='project__item__image' src= {props.src} alt={props.label}></img>
      </div>
    </li>
   </>
  )
}

export default ProjectItem;