import React from 'react';
import Logo from '../composants/logo';
import Carouselaccueil from '../composants/carousel';
import BoutonAccueil from '../composants/boutonAccueil';
import BoutonBoutique from '../composants/boutonBoutique';
import BoutonPanier from '../composants/boutonPanier';
import Footer from '../composants/footer';
import '../App.css';

function Accueil() {
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
    <div className='carousel'>
      <Carouselaccueil />
    </div>
    <footer>
      <Footer/>
    </footer>
  </div>
  );
}

export default Accueil;
