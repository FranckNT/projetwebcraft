import { BrowserRouter, , Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Header from '../components/Header'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'


import './App.css'



function App() { 
  return ( 
    <BrowserRouter>
    <Routes>

    <main>
      <h1>WebCraft Solutions </h1>
    </main>
    </Routes>
    </BrowserRouter>
  )
}
  
export default App
