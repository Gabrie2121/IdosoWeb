
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomeInstitucional from './pages/HomeInstitucional';
import ListaOfertas from './pages/ListaOfertas';

function Rotas() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<HomeInstitucional/>} /> */}
        <Route exact path ="/" element={<ListaOfertas/>} />
      </Routes>
    </Router>
  );
}

export default Rotas;
