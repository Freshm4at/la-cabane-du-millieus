import React,{lazy, Suspense} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar, Footer,ScrollToTop} from './components';
import { txt_FR} from './constants';

const Home = lazy(()=> import('./pages/Home/Home'))
const Menu = lazy(()=> import('./pages/Menu/Menu'))
const Photos = lazy(()=> import('./pages/Photos/photos'))
const Contact = lazy(()=> import('./pages/Contact/contact'))

const App = () => {

  return(
  <div className='app__main'>
    <Router>
    <ScrollToTop />
    <Navbar txtLang={txt_FR}>
    </Navbar>
    <Suspense fallback={<h1 className='headtext__cormorant' style={
      {'background-color':'#003067',textAlign:'center',margin:'auto'}
      }>Chargement...</h1>}>
      <Routes>
          <Route exact path='/' element={<Home txtLang={txt_FR}/>} />
          <Route exact path='/menu' element={<Menu txtLang={txt_FR}/>}></Route>
          <Route exact path='/photos' element={<Photos txtLang={txt_FR} />}></Route>
          <Route exact path='/contact' element={<Contact txtLang={txt_FR}/>}></Route>
      </Routes>
    </Suspense>
    <Footer txtLang={txt_FR}/>
    </Router>
  </div>
)};

export default App;
