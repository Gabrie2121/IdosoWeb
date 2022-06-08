
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomeInstitucional from './pages/HomeInstitucional';


function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeInstitucional/>} />
      </Routes>
    </Router>
  );
}

export default Rotas;
