import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer-container'> 
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at anytime.
        </p>
        <div className='input-areas'>
          <form>
            <input type='email' name='email' placeholder='Your Email'/>
            <Button buttonStyle='btn--outline'> Subscribe</Button>
          </form>
        </div>
      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us </h2>
            <Link to='/skills'> How It Works</Link>
            <Link to='/'> Testimonials </Link>
            <Link to='/'> Careers </Link>
            <Link to='/'> Investors </Link>
            <Link to='/'> Terms Of Service </Link>
          </div>
        <div className='footer-link-items'>
          <h2>Contact Us2 </h2>
          <Link to='/'> Contact</Link>
          <Link to='/'> Support </Link>
          <Link to='/'> Destinations </Link>
          <Link to='/'> Sponsorship </Link>
        </div>
      </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact Us3 </h2>
            <Link to='/'> Contact</Link>
            <Link to='/'> Support </Link>
            <Link to='/'> Destinations </Link>
            <Link to='/'> Sponsorship </Link>
    
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us4 </h2>
            <Link to='/'> Contact</Link>
            <Link to='/'> Support </Link>
            <Link to='/'> Destinations </Link>
            <Link to='/'> Sponsorship </Link>
    
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Kuhrisp 
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>Kuhrisp © 2023 </small>
          <div className='social-icons'>
            <Link 
            class='social-icon-link facebook' 
            to='/' 
            target='_blank'
            aria-label='Facebook'
            >
              <i class='fab fa-facebook-f'/>
            </Link>

            <Link 
            class='social-icon-link instagram' 
            to='/' 
            target='_blank'
            aria-label='Instagram'
            >
              <i class='fab fa-instagram'/>
            </Link>

            <Link 
            class='social-icon-link linkedin' 
            to='/' 
            target='_blank'
            aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin'/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer