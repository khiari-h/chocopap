import React from 'react';

const BoutonAccueil = () => {
  const handleClic = () => {
    window.location.href = '/accueil';
  };

  return (
    <div>
      <p>
        <a href="/accueil" onClick={handleClic}>
          Accueil
        </a>
      </p>
    </div>
  );
};

export default BoutonAccueil;
