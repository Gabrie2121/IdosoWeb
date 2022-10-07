import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomeInstitucional from './pages/HomeInstitucional';
import Profile from './pages/Profile';

import ProfileUserOfertasAberto from './components/ProfileUserOfertasAberto';
import Cadastro from './pages/CadastroUsuario';
import CriacaoAnuncio from './pages/CriacaoAnuncio';
import CriacaoAnuncio2 from './pages/CriacaoAnuncio2';
import Favoritos from './pages/Favoritos';
import HistoricoContratos from './pages/HistoricoContratos';
import HistoricoTrabalhos from './pages/HistoricoTrabalhos';
import ListaOfertas from './pages/ListaOfertas';
import ProfileUserOfertaAtual from './components/ProfileUserOfertaAtual';
import Login from './pages/Login';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeInstitucional />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/listaofertas" element={<ListaOfertas />} />
        <Route exact path="/criacaoanuncio" element={<CriacaoAnuncio />} />
        <Route exact path="/criacaoanucio2" element={<CriacaoAnuncio2 />} />
        <Route exact path="/favoritos" element={<Favoritos />} />
        <Route exact path="/historicocontratos" element={<HistoricoContratos />} />
        <Route exact path="/historicotrabalhos" element={<HistoricoTrabalhos />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
        <Route exact path="/profile-ofertas-aberto" element={<ProfileUserOfertasAberto />} />
        <Route exact path="/profile-oferta-atual" element={<ProfileUserOfertaAtual />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
