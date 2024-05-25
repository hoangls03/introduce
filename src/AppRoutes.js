import React from 'react'
import {Home} from './pages/Home.js';
import {About} from './pages/About.js';
import {Contact} from './pages/Contact.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Contact/>}/>
            <Route path='/Home' element = {<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </Router>
  )
}

