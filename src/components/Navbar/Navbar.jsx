import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu}  from 'react-icons/md'
import { NavLink as Link } from "react-router-dom";
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return(
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><Link to='/'>Acceuil</Link></li>
        <li className='p__opensans'><Link to='/menu'>Menu</Link></li>
        <div className='app__navbar-logo'>
        <Link to='/'>
          <p className='p__opensans'>La cabane du Mil'lieus</p>
        </Link>
        </div>
        <li className='p__opensans'><Link to='/photos'>Photos</Link></li>
        <li className='p__opensans'><Link to='/contact'>Contact</Link></li>
      </ul>
      <div className='app__navbar-smallscreen'>
        <img src={images.menuButton} onClick={()=> {setToggleMenu(true)}}/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontsize={27} className='overlay__close' onClick={()=>{setToggleMenu(false)}}/>
        <ul className='app__navbar-smallscreen-links'>
          <li className='p__opensans'><Link to='/'>Acceuil</Link></li>
          <li className='p__opensans'><Link to='/menu'>Menu</Link></li>
          <li className='p__opensans'><Link to='/photos'>Photos</Link></li>
          <li className='p__opensans'><Link to='/contact'>Contact</Link></li>
        </ul>
        </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
