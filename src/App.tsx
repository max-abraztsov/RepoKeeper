import { useState } from 'react';
import {Routes, Route} from "react-router-dom"; 
import Homepage from './pages/Homepage';
import Favourites from './pages/Favourites';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Homepage/> }/>
      <Route path="/favourites" element={ <Favourites/> }/>
    </Routes>
    
  )
}

export default App
