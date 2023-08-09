import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Media from './pages/media';
import Tarefas from './pages/tarefas';
import Personagens from './pages/personagens';
import Fichas from './pages/fichas';
import Correio from './pages/correio';
import Compra from './pages/compra-veiculo';
import Sorvete from './pages/sorvete';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      < Route path = '/media' element = {< Media/>} />
        < Route path = '/tarefas' element = {<Tarefas />} />
        < Route path = '/personagens' element = {<Personagens />} />
        < Route path = '/fichas' element = {<Fichas />} />
        < Route path = '/correio' element = {<Correio />} />
        < Route path = '/compra' element = {<Compra />} />
        < Route path = '/sorvete' element = {<Sorvete />} />
        < Route path = '/' element = {<Home />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

