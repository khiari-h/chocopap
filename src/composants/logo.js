import React from 'react';
import logoImage from '../images/logo.png';


const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo de l'entreprise" className="logo-image" />
    </div>
  );
}

export default Logo;
