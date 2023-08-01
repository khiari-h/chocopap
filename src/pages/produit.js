import React from 'react';
import BoutonAccueil from '../composants/boutonAccueil';
import BoutonBoutique from '../composants/boutonBoutique';
import Logo from '../composants/logo';
import BoutonPanier from '../composants/boutonPanier';
import Footer from '../composants/footer';
import '../App.css'

function Produit() {
  return (
    
          <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <Logo />
          </div>
          <div className="bouton">
            <BoutonAccueil />
            <BoutonBoutique />
            <BoutonPanier />
          </div>
        </header>
        <footer>
          <Footer/>
        </footer>
      </div>
   
  );
}

export default Produit;
