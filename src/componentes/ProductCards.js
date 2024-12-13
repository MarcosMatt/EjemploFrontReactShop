import React from 'react';

const ProductCards = () => {
  const cards = [
    {
      title: 'Envio gratis',
      img: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/new-buyer.svg',
      text: 'Beneficios por ser tu primera compra',
    },
    {
      title: 'Inicia Sesión',
      img: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/registration-da.svg',
      text: 'Disfruta de ofertas y compras sin límite.',
    },
    {
      title: 'Ubicación',
      img: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/location.svg',
      text: 'Consulta costos y tiempos de entrega.',
    },
    {
      title: 'Menos de $500',
      img: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/low-price-product.svg',
      text: 'Descubre productos con precios bajos.',
    },
  ];

  return (
    <div className="container">
      <div className="row" style={{ marginTop: '-50px' }}>
        {cards.map((card, index) => (
          <div key={index} className="col-md-3 mb-4 d-flex align-items-stretch">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <img src={card.img} alt={card.title} />
                <p className="card-text">{card.text}</p>
                <a href="#" className="btn btn-primary">
                  Botón
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
