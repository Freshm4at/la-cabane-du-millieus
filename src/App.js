import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Intro } from './container';
import { Navbar } from './components';
import Firebase from 'firebase';
import config from './firebaseConfig';
import './App.css';

const App = () => (
  <div className='app__main'>
    <Navbar />
    <Intro />
    <Header />
    <AboutUs />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
