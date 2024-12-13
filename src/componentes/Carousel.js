import React from 'react';

const Carousel = () => {
  const slides = [
    {
      src: '/assets/buen.fin.webp',
      title: 'Este Buen Fin',
      text: 'Llévate productos a la mitad de precio.',
    },
    {
      src: '/assets/navidad.jpg',
      title: 'Se acerca Navidad',
      text: 'Grandes ofertas en navidad.',
    },
    {
      src: '/assets/gratis.webp',
      title: 'La mejor calidad',
      text: 'En tu primera compra envío gratis.',
    },
    {
      src: '/assets/moda.webp',
      title: 'La mejor calidad en moda',
      text: 'Encuentra ropa de calidad.',
    },
    {
      src: '/assets/meli.webp',
      title: 'Ofertones',
      text: 'Lleva Vix Premium y Disney.',
    },
    {
      src: '/assets/plan.webp',
      title: 'Planes',
      text: 'Llévate un plan de 50 megas.',
    },
  ];

  return (
    <div id="carouselE1" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselE1"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={slide.src}
              className="d-block w-100 shadow"
              alt={slide.title}
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <div className="carousel-caption text-dark fw-bold">
              <h5>{slide.title}</h5>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselE1"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselE1"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default Carousel;
