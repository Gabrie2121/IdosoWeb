import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomeInstitucional from './pages/HomeInstitucional';


function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeInstitucional/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path ="/ListaOfertas" element={<ListaOfertas/>} />
        <Route exact path ="/CriacaoAnuncio" element={<CriacaoAnuncio/>} />
        <Route exact path ="/CriacaoAnuncio2" element={<CriacaoAnuncio2/>} />
        <Route exact path ="/Favoritos" element={<Favoritos/>} />
        <Route exact path ="/HistoricoContratos" element={<HistoricoContratos/>} />
        <Route exact path ="/HistoricoTrabalhos" element={<HistoricoTrabalhos/>} />
      </Routes>
    </Router>
  );
}

export default Rotas;
