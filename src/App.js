import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';

const App = () => (
  <div className='app__main'>
    <Router>
    <Navbar></Navbar>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/menu' element={<Menu />}></Route>
    </Routes>
    <Footer></Footer>
    </Router>
  </div>
);

export default App;
