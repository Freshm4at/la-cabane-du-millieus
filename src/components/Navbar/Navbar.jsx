import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu}  from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return(
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Acceuil</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <div className='app__navbar-logo'>
        <a href='#home'>
          <p className='p__opensans'>La cabane du Mil'lieu</p>
        </a>
        </div>
        <li className='p__opensans'><a href='#photo'>Photos</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontsize={27} onClick={()=> {setToggleMenu(true)}}/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontsize={27} className='overlay__close' onClick={()=>{setToggleMenu(false)}}/>
        <ul className='app__navbar-smallscreen-links'>
          <li className='p__opensans'><a href='#home'>Acceuil</a></li>
          <li className='p__opensans'><a href='#menu'>Menu</a></li>
          <li className='p__opensans'><a href='#photo'>Photos</a></li>
          <li className='p__opensans'><a href='#contact'>Contact</a></li>
        </ul>
        </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
