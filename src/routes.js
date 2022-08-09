import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomeInstitucional from './pages/HomeInstitucional';
import Cadastro from './pages/CadastroUsuario';


function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeInstitucional/>} />
        <Route exact path="/Cadastro" element={<Cadastro/>} />
      </Routes>
    </Router>
  );
}

export default Rotas;
