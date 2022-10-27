import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../constants';

import './Footer.css';
const Footer = ({txtLang}) => {
  return(
  <div className='app__footer section__padding'>
    <div className='app__footer-links flex__center'>
      <div className='app__footer-links_contact' >
        <h1 className='app__footer-headtext'>{txtLang.BasPage.titre_contact}</h1>
        <p className='p__opensans'>{txtLang.BasPage.contact_tel}</p>
        <p className='p__opensans'>{txtLang.BasPage.contact_email}</p>
      </div>
      <div className='app__footer-links_logo'>
      <Link to='/'>
          <p className='p__opensans'>{txtLang.BasPage.titre}</p>
      </Link>
        <img src={images.boat} alt='header img'/>
      </div>
      <div className='app__footer-links_works'>
        <h1 className='app__footer-headtext'>{txtLang.BasPage.titre_horraire}</h1>
        <p className='p__opensans'>{txtLang.BasPage.titre_horraire_semaine}</p>
        <p className='p__opensans'>{txtLang.BasPage.horraire_semaine}</p>
        <p className='p__opensans'>{txtLang.BasPage.titre_horraire_weekend}</p>
        <p className='p__opensans'>{txtLang.BasPage.horraire_weekend}</p>
      </div>
    </div>
    <div className='app__footer-copyright'>
        <p className='p__opensans'>{txtLang.BasPage.droits}</p>
      </div>
  </div>
)};

export default Footer;
