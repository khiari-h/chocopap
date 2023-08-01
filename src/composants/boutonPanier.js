import React from 'react';
import { useSelector } from 'react-redux'; // Importez le hook useSelector depuis 'react-redux'
import LogoPanier from '../images/panier.png';

const BoutonPanier = () => {
  const cart = useSelector((state) => state.cart); // Utilisez useSelector pour accéder à l'état du panier depuis le store

  // Ici, vous pouvez utiliser l'état du panier pour effectuer des actions spécifiques dans votre bouton
  // Par exemple, afficher un badge avec le nombre d'articles dans le panier ou changer l'apparence du bouton en fonction de son contenu.

  const urlPanier = '/panier';

  return (
    <a href={urlPanier}>
      <img src={LogoPanier} alt="Bouton panier" className='btnpanier'/>
    </a>
  );
}

export default BoutonPanier;
