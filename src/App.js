// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/accueil';
import Boutique from './pages/boutique';
import Produit from './pages/produit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/produit" element={<Produit />} />
      </Routes>
    </div>
  );
}

export default App;
