import BoutonAccueil from './composants/boutonAccueil';
import BoutonBoutique from './composants//boutonBoutique';
import Logo from './composants/logo';
import BoutonPanier from './composants/boutonPanier';
import Carouselaccueil from './composants/carousel';
import './App.css';

function App() {
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
  
</footer>
    </div>
  );
}

export default App;


