
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomeInstitucional from './pages/HomeInstitucional';
import Profile from './pages/Profile';


function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeInstitucional/>} />
        <Route exact path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default Rotas;
