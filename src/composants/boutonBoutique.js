import React from 'react';
import { Link } from 'react-router-dom'; // Importez le composant Link depuis 'react-router-dom'

const BoutonBoutique = () => {
  return (
    <div>
      
      <Link to="/produit">Boutique</Link>
    </div>
  );
};

export default BoutonBoutique;
