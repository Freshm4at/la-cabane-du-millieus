import React from 'react';
import './Menu.css';
import { images } from '../../constants';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const {t} = useTranslation()

  return(
    <div className='app__menu'>
      <div className='app__menu-meal'>
        <div className='app__menu_header-img'>
          <img src={images.menuHeader} alt='menu_header img'/>
        </div>
        <div className='app__menu_header-title'>
          <h1 className='headtext__cormorant' style={{color:'#FBF5F3'}}>{t('Menu_titre_1')}</h1>
          <p className='p__opensans' style={{color:'#DCCA87'}}>{t('Menu_sous_titre')}</p>
        </div>
        <div className='app__menu-menu'>
            <img src={images.menuMap} alt='menu' id='menu_img'/>
        </div>
      </div>
      <div className='app__menu-drink'>
        <div className='app__menu_header-title'>
          <div className='app__menu-drink_header'>
            <img src={images.fisherman} alt='menu_fisherman'></img>
          </div>
          <h1 className='headtext__cormorant' style={{color:'#0C0C0C'}}>{t('Menu_titre_2')}</h1>
        </div>
        <div className='app__menu-menu'>
          <img src={images.menuMap} alt='menu'></img>
        </div>
      </div>
    </div>
  )};
  
  export default Menu;