import React from 'react'
import { useTranslation } from 'react-i18next';
import { MdOutlineRestaurantMenu}  from 'react-icons/md'
import { NavLink as Link } from "react-router-dom";
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const {t} = useTranslation()
  return(
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><Link to='/'>{t('NavBar_Lien_accueil')}</Link></li>
        <li className='p__opensans'><Link to='/menu'>{t('NavBar_Lien_menu')}</Link></li>
        <div className='app__navbar-logo'>
        <Link to='/'>
          <p className='p__opensans'>{t('NavBar_titre')}</p>
        </Link>
        </div>
        <li className='p__opensans'><Link to='/photos'>{t('NavBar_Lien_photos')}</Link></li>
        <li className='p__opensans'><Link to='/contact'>{t('NavBar_Lien_contact')}</Link></li>
      </ul>
      <div className='app__navbar-smallscreen'>
        <img src={images.menuButton} onClick={()=> {setToggleMenu(true)}} alt='menu_button'/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontsize={27} className='overlay__close' onClick={()=>{setToggleMenu(false)}}/>
        <ul className='app__navbar-smallscreen-links'>
          <li className='p__opensans' onClick={()=>{setToggleMenu(false)}}><Link to='/'>{t('NavBar_Lien_accueil')}</Link></li>
          <li className='p__opensans' onClick={()=>{setToggleMenu(false)}}><Link to='/menu'>{t('NavBar_Lien_menu')}</Link></li>
          <li className='p__opensans' onClick={()=>{setToggleMenu(false)}}><Link to='/photos'>{t('NavBar_Lien_photos')}</Link></li>
          <li className='p__opensans' onClick={()=>{setToggleMenu(false)}}><Link to='/contact'>{t('NavBar_Lien_contact')}</Link></li>
        </ul>
        </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
