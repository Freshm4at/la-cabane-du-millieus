import React from 'react';
import './Menu.css';
import { images } from '../../constants';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const {t} = useTranslation()

  return(
    <div className='app__menu'>
      <div className='app__menu_header-img'>
        <img src={images.menuHeader} alt='menu_header img'/>
      </div>
      <nav className='app__menu-nav'>
        <ul className='app__menu-nav-links'>
          <li className='p__opensans'><a href='#carte_du_moment'>{t('Menu_nav_1')}</a></li>
          <li className='p__opensans'><a href='#menu'>{t('Menu_nav_2')}</a></li>
          <li className='p__opensans'><a href='#boisson'>{t('Menu_nav_3')}</a></li>
        </ul>
      </nav>
      <div className='app__menu-meal' id='carte_du_moment'>
        <div className='app__menu_header-title'>
          <h1 className='headtext__cormorant' style={{color:'#0C0C0C'}}>{t('Menu_titre_1')}</h1>
          <p className='p__opensans' style={{color:'#0C0C0C'}}>{t('Menu_sous_titre')}</p>
        </div>
        <div className='app__menu-menu'>
            <img src={images.menu_paper_carte_fr} alt='menu' id='menu_img'/>
        </div>
      </div>
      <div className='app__menu-drink' id='menu'>
        <div className='app__menu_header-title'>
          <div className='app__menu-drink_header'>
            <img src={images.oyster} alt='menu_fisherman'></img>
          </div>
          <h1 className='headtext__cormorant' style={{color:'#0C0C0C'}}>{t('Menu_titre_2')}</h1>
          <p className='p__opensans' style={{color:'#0C0C0C'}}>{t('Menu_sous_titre2')}</p>
        </div>
        <div className='app__menu-menu'>
          <img src={images.menu_paper_carte_fr} alt='menu'></img>
        </div>
      </div>
      <div className='app__menu-drink' id='boisson'>
        <div className='app__menu_header-title'>
          <div className='app__menu-drink_header'>
            <img src={images.fisherman} alt='menu_fisherman'></img>
          </div>
          <h1 className='headtext__cormorant' style={{color:'#0C0C0C'}}>{t('Menu_titre_3')}</h1>
        </div>
        <div className='app__menu-menu'>
          <img src={images.menu_paper_carte_fr} alt='menu'></img>
        </div>
      </div>
    </div>
  )};
  
  export default Menu;