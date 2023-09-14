import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';


function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) { // for mobiles
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => { // used to work around the sign up buttong showing up each time the page is refreshed
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
            Kuhrisp <i className='fab fa-typo3' />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {/* Nav menu opened */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            
            <li className='nav-item'>
              <Link to='/hobbies' className='nav-links' onClick={closeMobileMenu}>Hobbies</Link>
            </li>

            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>Projects</Link>
            </li>

            <li className='nav-item'>
              <Link to='/travels' className='nav-links' onClick={closeMobileMenu}>Travels</Link>
            </li>

            <li className='nav-item'>
              <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>Skills</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar