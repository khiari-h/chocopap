import React from 'react';
import LogoFacebook from '../images/logo-facebook.png';
import LogoInstagram from '../images/logo-instagram.jpeg';
import LogoTwitter from '../images/logo-twitter.png';


const Header = () => {


    
  
  return (
    <>
    <div className="chocopap">
   <h1>CHOCO PAP</h1>
   <p>Lorem ipsum dolor sit amet. Id alias quia ut quia pariatur aut quia deleniti aut omnis incidunt et optio dolores. Sit minima quia ab reiciendis deserunt ab deleniti neque?</p>
   </div>
   <div className="contact">
   <h1>CONTACT</h1>
   <p>Adresse: 51 rue du chocolat 75000 Paris</p>
   <p>Téléphone: 01 23 45 67 89</p>
   <p>Horaires: 9h00-17h00 du lundi au<br />Vendredi</p>
   </div>
   <div className="reseaux">
   <img src={LogoFacebook} alt="Logo facebook"/>
   <img src={LogoInstagram} alt="Logo instagram"/>
   <img src={LogoTwitter} alt="Logo twitter"/>
   </div>
   </>
 
  );
}

export default Header;
