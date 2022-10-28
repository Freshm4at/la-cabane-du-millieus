import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import LangSelector from '../LangSelector/LangSelector';

import './Footer.css';
const Footer = () => {
  const {t} = useTranslation()
  return(
  <div className='app__footer section__padding'>
    <div className='app__footer-links flex__center'>
      <div className='app__footer-links_contact' >
        <h1 className='app__footer-headtext'>{t('BasPage_titre_contact')}</h1>
        <p className='p__opensans'>{t('BasPage_contact_tel')}</p>
        <p className='p__opensans'>{t('BasPage_contact_email')}</p>
      </div>
      <div className='app__footer-links_logo'>
      <Link to='/'>
          <p className='p__opensans'>{t('BasPage_titre')}</p>
      </Link>
        <img src={images.boat} alt='header img'/>
      </div>
      <div className='app__footer-links_works'>
        <h1 className='app__footer-headtext'>{t('BasPage_titre_horraire')}</h1>
        <p className='p__opensans'>{t('BasPage_titre_horraire_semaine')}</p>
        <p className='p__opensans'>{t('BasPage_horraire_semaine')}</p>
        <p className='p__opensans'>{t('BasPage_titre_horraire_weekend')}</p>
        <p className='p__opensans'>{t('BasPage_horraire_weekend')}</p>
      </div>
    </div>
    <div className='app__footer-copyright'>
        <p className='p__opensans'>{t('BasPage_droits')}</p>
      <LangSelector/>
    </div>
  </div>
)};

export default Footer;
