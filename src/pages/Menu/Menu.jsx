import React from 'react';
import './Menu.css';
import { images } from '../../constants';

const Menu = () => (
    <div className='app__menu'>
      <div className='app__menu-header_img'>
        <img src={images.menuHeader} alt='menu_header img'/>
      </div>
      <div className='app__menu-header_title'>
        <h1 className='app__menu-header_title-title'>La carte du moment</h1>
        <p className='p__opensans'>frais et fait maison!</p>
      </div>
      <div className='app__menu-menu'>
        <img src={images.menuMap} alt='menu'></img>
      </div>
    </div>
  );
  
  export default Menu;