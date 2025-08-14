import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {Header} from './components/Header/header'
import Home from './pages/Home/home';
import Personagens from './pages/Personagens/personagens';
import Personaleatorio from './pages/Personagem-aleatorio/Personagemaleatorio'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename="/PROJETO_REACT">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Personagens' element={<Personagens/>}/>
        <Route path='/Personagem-aleatorio' element={<Personaleatorio/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
