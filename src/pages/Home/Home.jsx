import React from 'react';
import { AboutUs, Restaurant, Gallery, Header, Intro } from '.';

const Home = ({txtLang}) => (
    <div className='app__main'>
      <Intro txtLang={txtLang}/>
      <Header txtLang={txtLang}/>
      <AboutUs txtLang={txtLang}/>
      <Gallery txtLang={txtLang}/>
      <Restaurant txtLang={txtLang}/>
    </div>
  );
  
  export default Home;