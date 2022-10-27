import React from 'react'
import { MdOutlineRestaurantMenu}  from 'react-icons/md'
import { NavLink as Link } from "react-router-dom";
import { images } from '../../constants';
import './Navbar.css';

const Navbar = ({txtLang}) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return(
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><Link to='/'>{txtLang.NavBar.Lien_accueil}</Link></li>
        <li className='p__opensans'><Link to='/menu'>{txtLang.NavBar.Lien_menu}</Link></li>
        <div className='app__navbar-logo'>
        <Link to='/'>
          <p className='p__opensans'>La cabane du Mil'lieus</p>
        </Link>
        </div>
        <li className='p__opensans'><Link to='/photos'>{txtLang.NavBar.Lien_photos}</Link></li>
        <li className='p__opensans'><Link to='/contact'>{txtLang.NavBar.Lien_contact}</Link></li>
      </ul>
      <div className='app__navbar-smallscreen'>
        <img src={images.menuButton} onClick={()=> {setToggleMenu(true)}} alt='menu_button'/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontsize={27} className='overlay__close' onClick={()=>{setToggleMenu(false)}}/>
        <ul className='app__navbar-smallscreen-links'>
          <li className='p__opensans' onClick={()=>{setToggleMenu(false)}}><Link to='/'>{txtLang.NavBar.Lien_accueil}</Link></li>
          <li className='p__opensans' onClick={()=>{setToggleMenu(false)}}><Link to='/menu'>{txtLang.NavBar.Lien_menu}</Link></li>
          <li className='p__opensans' onClick={()=>{setToggleMenu(false)}}><Link to='/photos'>{txtLang.NavBar.Lien_photos}</Link></li>
          <li className='p__opensans' onClick={()=>{setToggleMenu(false)}}><Link to='/contact'>{txtLang.NavBar.Lien_contact}</Link></li>
        </ul>
        </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
