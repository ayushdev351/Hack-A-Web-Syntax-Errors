import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar.js';
import Home from './components/Pages/Home.js';
import Consult from './components/Pages/Consult.js';
import Predict from './components/Pages/Predict.js';

import './App.css'

function App() {
    return(
        <Router>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/consult' element={<Consult/>} />
              <Route path='/predict'  element={<Predict/>} />
          </Routes>
        </Router>
    );
}

export default App;