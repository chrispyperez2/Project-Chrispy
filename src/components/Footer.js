import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer-container'> 
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact me via email or with social media using the links below!
        </p>

      </section>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <p className='email'>chris.perezca@gmail.com</p>
          <small className='website-rights'>Kuhrisp © 2023 </small>
          <div className='social-icons'>
            <Link 
            class='social-icon-link linkedin' 
            to='https://www.linkedin.com/in/christian-perez-castanaza/' 
            target='_blank'
            aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin'/>
            </Link>

            <Link 
            class='social-icon-link github' 
            to='https://github.com/chrispyperez2/Project-Chrispy' 
            target='_blank'
            aria-label='Github'
            >
              <i class='fab fa-github'/>
            </Link>

            <Link 
            class='social-icon-link facebook' 
            to='https://www.facebook.com/christian.c.perez.98' 
            target='_blank'
            aria-label='Facebook'
            >
              <i class='fab fa-facebook-f'/>
            </Link>

            <Link 
            class='social-icon-link instagram' 
            to='https://www.instagram.com/kuhrisp_wrx/' 
            target='_blank'
            aria-label='Instagram'
            >
              <i class='fab fa-instagram'/>
            </Link>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer