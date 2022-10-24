import React from 'react';
import { AboutUs, FindUs, Footer, Gallery, Header, Intro } from '.';

const Home = () => (
    <div className='app__main'>
      <Intro />
      <Header />
      <AboutUs />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
  
  export default Home;