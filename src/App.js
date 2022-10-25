import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar, Footer,ScrollToTop} from './components';

import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Photos from './pages/Photos/photos'
import Contact from './pages/Contact/contact';

const App = () => (
  <div className='app__main'>
    <Router>
    <ScrollToTop />
    <Navbar></Navbar>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/menu' element={<Menu />}></Route>
        <Route exact path='/photos' element={<Photos />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
    </Routes>
    <Footer></Footer>
    </Router>
  </div>
);

export default App;
