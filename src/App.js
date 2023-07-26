
import BoutonAccueil from './composants/boutonAccueil';
import BoutonBoutique from './composants//boutonBoutique';
import Logo from './composants/logo';
import BoutonPanier from './composants/boutonPanier';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo/>
      <BoutonAccueil />
      <BoutonBoutique />
      <BoutonPanier />
      
      </header>
    </div>
  );
}

export default App;


