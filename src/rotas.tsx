import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Lista } from './pages/lista';
import { Signup } from './pages/Signup';

export function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route path='/lista' element={<Lista />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}