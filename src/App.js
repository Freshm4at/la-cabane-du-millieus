import React,{lazy, Suspense} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar, Footer,ScrollToTop} from './components';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { translation_en, translation_fr } from './constants';

const Home = lazy(()=> import('./pages/Home/Home'))
const Menu = lazy(()=> import('./pages/Menu/Menu'))
const Photos = lazy(()=> import('./pages/Photos/photos'))
const Contact = lazy(()=> import('./pages/Contact/contact'))

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: translation_fr
      },
      en:{
        translation: translation_en
      }
    },
    lng: document.querySelector('html').lang,
    fallbackLng: "fr",

    interpolation: {
      escapeValue: false
    }
  });

const App = () => (
  <div className='app__main'>
    <Router>
    <ScrollToTop />
    <Navbar/>
    <Suspense fallback={<h1 className='headtext__cormorant' style={
      {'background-color':'#003067',textAlign:'center',margin:'auto'}
      }>Chargement...</h1>}>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/menu' element={<Menu />}></Route>
          <Route exact path='/photos' element={<Photos />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
    </Suspense>
    <Footer/>
    </Router>
  </div>
);

export default App;
