import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import {Header} from './components/Header/header'
import Home from './pages/Home/home';
import Personagens from './pages/Personagens/personagens';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Personagens' element={<Personagens/>}/>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
