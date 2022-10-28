import React from 'react';

import './AboutUs.css';
import { images } from '../../../constants';
import { SubHeading } from '../../../components';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const {t} = useTranslation()
  return(
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <SubHeading title={t('Equipe_Histoire_enTete_1')} color="#DCCA87" size="30px"/>
        <p className='p_opensans'>{t('Equipe_Histoire_texte_1')}</p>
      </div>

      <div className='app__aboutus-content_img flex__center'>
        <img src={images.fish} alt='fish_photo'/>
      </div>

      <div className='app__aboutus-content_history'>
        <SubHeading title={t('Equipe_Histoire_enTete_2')} color="#DCCA87" size="30px"/>
        <p className='p_opensans'>{t('Equipe_Histoire_texte_2')}</p>
      </div>
    </div>
  </div>
)};

export default AboutUs;
