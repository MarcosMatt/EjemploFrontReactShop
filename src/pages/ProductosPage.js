import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../componentes/Navbar';
import Carousel from '../componentes/Carousel';
import Productos from '../components/Productos/Productos';
import AgregarProducto from "../components/AgregarProducto/AgregarProducto";

const ProductosPage = () => {
    return (
        <div>
            <Navbar />
            <Carousel />

            <AgregarProducto />

            <Productos />
        </div>
    );
};

//Home.propTypes = {};

//ProductosPage.defaultProps = {};

export default ProductosPage;