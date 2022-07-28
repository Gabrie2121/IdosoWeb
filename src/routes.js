
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomeInstitucional from './pages/HomeInstitucional';
import ListaOfertas from './pages/ListaOfertas';
import CriacaoAnuncio from './pages/CriacaoAnuncio';

function Rotas() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<HomeInstitucional/>} /> */}
        {/* <Route exact path ="/" element={<ListaOfertas/>} /> */}
        <Route exact path ="/" element={<CriacaoAnuncio/>} />
      </Routes>
    </Router>
  );
}

export default Rotas;
