import React from 'react';

const BoutonBoutique = () => {
  const handleClic = () => {
    window.location.href = '/boutique';
  };

  return (
    <div>
      <p>
        <a href="/boutique" onClick={handleClic}>
          Boutique
        </a>
      </p>
    </div>
  );
};

export default BoutonBoutique;
