import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Productos.module.css';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/productos')
    .then((response) => response.json())
    .then((data) => {
      setProductos(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, []);

  return (
    <div className="container">
      <div className="row" style={{ marginTop: '-50px' }}>
        {productos.map((productos) => {
          return (
              <div className="card-tittle" key={productos.id}>
                <img src={productos.imagen_url}></img>
                <h2 className="post-title">{productos.nombre}</h2>
                <p className="post-body">{productos.descripcion}</p>
                <div className="button">
                <div className="delete-btn">Delete</div>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

//Productos.propTypes = {};

Productos.defaultProps = {};

export default Productos;
