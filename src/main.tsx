import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import {Header} from './components/Header/header'
import Home from '/PROJETO_REACT/src/pages/Home/home';
import Personagens from '/PROJETO_REACT/src/pages/Personagens/Personagens';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <BrowserRouter>
      <Route path='/' element={<Home/>}/>
      <Route path='/Personagens' element={<Personagens/>}/>

    </BrowserRouter>
  </StrictMode>,
)
