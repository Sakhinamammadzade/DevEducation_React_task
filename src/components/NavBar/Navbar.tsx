import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
export default function Navbar() {
    return (
      <Routes>
        <Route path="/" element={<Home/>}/>
    
         
       </Routes>
    )
          
        
    
}
