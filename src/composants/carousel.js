import React from 'react';
import Slider from 'react-slick';
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

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={accueil1} alt="Accueil 1" />
          <p className="legend">Buffet sucré</p>
        </div>
        <div>
          <img src={accueil2} alt="Accueil 2" />
          <p className="legend">Bonbons</p>
        </div>
        <div>
          <img src={accueil3} alt="Accueil 3" />
          <p className="legend">Chocolats</p>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselAccueil;
