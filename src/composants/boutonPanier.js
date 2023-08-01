import React from 'react';
import LogoPanier from '../images/panier.png';

const BoutonPanier = () => {
  const urlPanier = '/panier';

  return (
    <a href={urlPanier}>
      <img src={LogoPanier} alt="Bouton panier" className='btnpanier'/>
    </a>
  );
}

export default BoutonPanier;
