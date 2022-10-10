import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu}  from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return(
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href='#home'>
          <img src={images.laCabane} alt="app logo"/>
        </a>
      </div>
      <ul className='app__navbar-links'>
        <li className='app__opensans'><a href='#home'>Acceuil</a></li>
        <li className='app__opensans'><a href='#menu'>Menu</a></li>
        <li className='app__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontsize={27} onClick={()=> {setToggleMenu(true)}}/>

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontsize={27} className='overlay__close' onClick={()=>{setToggleMenu(false)}}/>
          <ul className='app__navbar-smallscreen-links'>
          <li className='app__opensans'><a href='#home'>Acceuil</a></li>
          <li className='app__opensans'><a href='#menu'>Menu</a></li>
          <li className='app__opensans'><a href='#contact'>Contact</a></li>
        </ul>
        </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
