import React from 'react';
import './Menu.css';
import { images } from '../../constants';

const Menu = ({txtLang}) => {
  return(
    <div className='app__menu'>
      <div className='app__menu-meal'>
        <div className='app__menu_header-img'>
          <img src={images.menuHeader} alt='menu_header img'/>
        </div>
        <div className='app__menu_header-title'>
          <h1 className='headtext__cormorant' style={{color:'#FBF5F3'}}>{txtLang.Pages.Menu.titre_1}</h1>
          <p className='p__opensans' style={{color:'#DCCA87'}}>{txtLang.Pages.Menu.sous_titre}</p>
        </div>
        <div className='app__menu-menu'>
          <img src={images.menuMap} alt='menu'></img>
        </div>
      </div>
      <div className='app__menu-drink'>
        <div className='app__menu_header-title'>
          <div className='app__menu-drink_header'>
            <img src={images.fisherman} alt='menu_fisherman'></img>
          </div>
          <h1 className='headtext__cormorant' style={{color:'#0C0C0C'}}>{txtLang.Pages.Menu.titre_2}</h1>
        </div>
        <div className='app__menu-menu'>
          <img src={images.menuMap} alt='menu'></img>
        </div>
      </div>
    </div>
  )};
  
  export default Menu;