import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import accueil1 from '../images/accueil1.jpg';
import accueil2 from '../images/accueil2.jpg';
import accueil3 from '../images/accueil3.jpg';

function CarouselAccueil() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const buttonStyle = {
    display: 'block', 
    margin: 'auto',
    marginTop: '10px', 
    padding: '10px 20px',
    backgroundColor: 'blue', 
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={accueil1}  alt="Accueil 1" />
          <Link to="/boutique">
            <button style={buttonStyle}>Voir la boutique</button>
          </Link>
          <p className="legend">Buffet sucré</p>
          
        </div>
        <div>
          <img src={accueil2} alt="Accueil 2" />
          <Link to="/boutique">
            <button style={buttonStyle}>Voir la boutique</button>
          </Link>
          <p className="legend">Bonbons</p>
          
        </div>
        <div>
          <img src={accueil3} alt="Accueil 3" />
          <Link to="/boutique">
            <button style={buttonStyle}>Voir la boutique</button>
          </Link>
          <p className="legend">Chocolats</p>
          
        </div>
      </Slider>
    </div>
  );
}

export default CarouselAccueil;
