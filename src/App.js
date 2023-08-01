// Importez les dépendances nécessaires, y compris le composant Provider
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BoutonAccueil from './composants/boutonAccueil';
import BoutonBoutique from './composants/boutonBoutique';
import Logo from './composants/logo';
import BoutonPanier from './composants/boutonPanier';
import Carouselaccueil from './composants/carousel';
import Footer from './composants/footer';
import './App.css';

function App() {
  return (
    // Utilisez le composant Provider pour envelopper toute votre application
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
