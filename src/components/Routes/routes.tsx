import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import Home from '/PROJETO_REACT/src/pages/Home/home';
import Personagens from '/PROJETO_REACT/src/pages/Personagens/Personagens';

export default propsRoutes => {
        <BrowserRouter>
            <Routes>
                <Route path='/home' Component={Home}/>
                <Route path='/personagens' Component={Personagens}/>
            </Routes>
        </BrowserRouter>
}