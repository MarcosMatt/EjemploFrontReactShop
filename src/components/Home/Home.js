import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../componentes/Navbar';
import Carousel from '../../componentes/Carousel';
import ProductCards from '../../componentes/ProductCards';

const Home = () => (
  <div>
      <Navbar />
      <Carousel />
      <section className="product py-5">
        <ProductCards />
      </section>
  </div>
);

//Home.propTypes = {};

//Home.defaultProps = {};

export default Home;
