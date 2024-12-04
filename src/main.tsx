import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {Header} from './components/Header/header'
import Home from './pages/Home/Home';
import Personagens from './pages/Personagens/personagens';
import Personaleatorio from './pages/Personagem-aleatorio/Personagemaleatorio'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Personagens' element={<Personagens/>}/>
        <Route path='/Personagem-aleatorio' element={<Personaleatorio/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
