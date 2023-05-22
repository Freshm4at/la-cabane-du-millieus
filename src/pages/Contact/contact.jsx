import React from 'react';
import { useTranslation } from 'react-i18next';
import { Map } from '../../components';
import { images } from '../../constants';
import './contact.css'

const Contact = () => {
    const {t} = useTranslation()
    return(
    <div className='app__contact' id='contact'>
    <img src={images.fish_photo} alt='fish_photo'></img>
    <div className='app_contact-content app__wrapper section__padding'>
        <div className='app__wrapper_info'>
            <h1 className='app__contact-h1'>{t('Contact_titre')}</h1>
            <div className='app__contact-content_information'>
                <div className='app__contact-content__adresse'>
                    <p className='p__opensans' style={{color:'#DCCA87'}}>{t('Contact_titre_adresse')}</p>
                    <p className='headtext__cormorant' style={{color:'#FBF5F3'}}>{t('Contact_adresse_rue')}</p>
                    <p className='p__cormorant' style={{color:'#FBF5F3'}}>{t('Contact_adresse_ville')}</p>
                </div>
                <div className='app__contact-content__telephone'>
                    <p className='p__opensans' style={{color:'#DCCA87'}}>{t('Contact_titre_tel')}</p>
                    <p className='p__cormorant' style={{color:'#FBF5F3'}}>{t('Contact_tel')}</p>
                </div>
                <div className='app__contact-content__email'>
                <p className='p__opensans' style={{color:'#DCCA87'}}>{t('Contact_titre_email')}</p>
                <p className='p__cormorant' style={{color:'#FBF5F3'}}>{t('Contact_email')}</p>
                </div>
            </div>
            </div>
        <div className='app__wrapper_img'>
            <Map></Map>
        </div>
    </div>
    <p className='p__cormorant' style={{"text-align":'center',color:'#FBF5F3',padding:'2rem','font-size':'16px'}}>{t('Contact_texte_horraire')}</p>
  </div>
)};
export default Contact;