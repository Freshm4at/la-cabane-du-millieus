import React,{lazy, Suspense} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar, Footer,ScrollToTop} from './components';

const Home = lazy(()=> import('./pages/Home/Home'))
const Menu = lazy(()=> import('./pages/Menu/Menu'))
const Photos = lazy(()=> import('./pages/Photos/photos'))
const Contact = lazy(()=> import('./pages/Contact/contact'))

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
