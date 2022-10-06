import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlinerestaurantMenu}  from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.laCabane} alt="app logo"/>
    </div>
    <ul className='app__navbar-links'>
      <li className='app__opensans'><a href='#home'>Acceuil</a></li>
      <li className='app__opensans'><a href='#menu'>Menu</a></li>
      <li className='app__opensans'><a href='#contact'>Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
