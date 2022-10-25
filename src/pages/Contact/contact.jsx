import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './contact.css'

const Contact = () => (
    <div className='app__contact' id='contact'>
    <img src={images.fishPhoto} alt='fish_photo'></img>
    <div className='app_contact-content app__wrapper section__padding'>
        <div className='app__wrapper_info'>
            <h1 className='app__contact-h1'>Où nous trouver ?</h1>
            <div className='app__contact-content_information'>
                <div className='app__contact-content__adresse'>
                    <p className='p__opensans' style={{color:'#DCCA87'}}>Adresse : </p>
                    <p className='headtext__cormorant' style={{color:'#FBF5F3'}}>Bd Roger Letélié,</p>
                    <p className='p__cormorant' style={{color:'#FBF5F3'}}>17390 La Tremblade</p>
                </div>
                <div className='app__contact-content__telephone'>
                    <p className='p__opensans' style={{color:'#DCCA87'}}>télephone : </p>
                    <p className='p__cormorant' style={{color:'#FBF5F3'}}>0601010101</p>
                </div>
                <div className='app__contact-content__email'>
                <p className='p__opensans' style={{color:'#DCCA87'}}>Email : </p>
                <p className='p__cormorant' style={{color:'#FBF5F3'}}>fernandes@hotmail.com</p>
                </div>
            </div>
            </div>
            <div className='app__wrapper_img'>
            <img src={images.welcome} alt='header img'/>
        </div>
    </div>
    <p className='p__cormorant' style={{"text-align":'center',color:'#FBF5F3',padding:'2rem','font-size':'14px'}}>Ouvert du mardi au jeudi de 9h à 20h et du vendredi au samedi de 9h à 20h30 et le dimanche de 9h à 13h30.</p>
  </div>
);
export default Contact;