import React from 'react';
import { Map } from '../../components';
import { images } from '../../constants';
import './contact.css'

const Contact = ({txtLang}) => {
    return(
    <div className='app__contact' id='contact'>
    <img src={images.fishPhoto} alt='fish_photo'></img>
    <div className='app_contact-content app__wrapper section__padding'>
        <div className='app__wrapper_info'>
            <h1 className='app__contact-h1'>{txtLang.Pages.Contact.titre}</h1>
            <div className='app__contact-content_information'>
                <div className='app__contact-content__adresse'>
                    <p className='p__opensans' style={{color:'#DCCA87'}}>{txtLang.Pages.Contact.titre_adresse}</p>
                    <p className='headtext__cormorant' style={{color:'#FBF5F3'}}>{txtLang.Pages.Contact.adresse_rue}</p>
                    <p className='p__cormorant' style={{color:'#FBF5F3'}}>{txtLang.Pages.Contact.adresse_ville}</p>
                </div>
                <div className='app__contact-content__telephone'>
                    <p className='p__opensans' style={{color:'#DCCA87'}}>{txtLang.Pages.Contact.titre_tel}</p>
                    <p className='p__cormorant' style={{color:'#FBF5F3'}}>{txtLang.Pages.Contact.tel}</p>
                </div>
                <div className='app__contact-content__email'>
                <p className='p__opensans' style={{color:'#DCCA87'}}>{txtLang.Pages.Contact.titre_email}</p>
                <p className='p__cormorant' style={{color:'#FBF5F3'}}>{txtLang.Pages.Contact.email}</p>
                </div>
            </div>
            </div>
        <div className='app__wrapper_img'>
            <Map></Map>
        </div>
    </div>
    <p className='p__cormorant' style={{"text-align":'center',color:'#FBF5F3',padding:'2rem','font-size':'16px'}}>{txtLang.Pages.Contact.texte_horraire}</p>
  </div>
)};
export default Contact;