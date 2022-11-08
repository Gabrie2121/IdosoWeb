import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomeInstitucional from './pages/HomeInstitucional';
import ProfileUserF from './pages/ProfileF';
import ProfileUserJ from './pages/ProfileJ';
import Cadastro from './pages/CadastroUsuario';
import CriacaoAnuncio from './pages/CriacaoAnuncio';
import CriacaoAnuncio2 from './pages/CriacaoAnuncio2';
import Favoritos from './pages/Favoritos';
import HistoricoContratos from './pages/HistoricoContratos';
import HistoricoTrabalhos from './pages/HistoricoTrabalhos';
import ListaOfertas from './pages/ListaOfertas';
import Login from './pages/Login';
import ProfileUserOfertaAtualJuridica from './components/ProfileUserOfertaAtualJuridica';
import ProfileUserOfertasAbertoJuridica from './components/ProfileUserOfertasAbertoJuridica';

import ProfileUserOfertaAtualFisica from './components/ProfileUserOfertaAtualFisica';
import ProfileUserOfertasAbertoFisica from './components/ProfileUserOfertasAbertoFisica';


function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeInstitucional />} />
        <Route exact path="/profile-fisica" element={<ProfileUserF />} />
        <Route exact path="/profile-juridica" element={<ProfileUserJ />} />
        <Route exact path="/listaofertas" element={<ListaOfertas />} />
        <Route exact path="/criacaoanuncio" element={<CriacaoAnuncio />} />
        <Route exact path="/criacaoanucio2" element={<CriacaoAnuncio2 />} />
        <Route exact path="/favoritos" element={<Favoritos />} />
        <Route exact path="/historicocontratos" element={<HistoricoContratos />} />
        <Route exact path="/historicotrabalhos" element={<HistoricoTrabalhos />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
        <Route exact path="/profile-fisica-ofertas-aberto" element={<ProfileUserOfertasAbertoFisica />} />
        <Route exact path="/profile-fisica-oferta-atual" element={<ProfileUserOfertaAtualFisica />} />
        <Route exact path="/profile-juridica-ofertas-aberto" element={<ProfileUserOfertasAbertoJuridica />} />
        <Route exact path="/profile-juridica-oferta-atual" element={<ProfileUserOfertaAtualJuridica />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
