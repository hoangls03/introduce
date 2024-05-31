import React from 'react'
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/Home' element = {<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
  )
}

