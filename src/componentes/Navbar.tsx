import React from 'react';
import LoginLogout from "../components/LoginLogout/LoginLogout";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning sticky-top">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex justify-content-right align-items-center">
            <img
              src="/assets/logo.png" alt="Logo"
              style={{ width: '100px', height: 'auto', marginRight: '10px' }}
            />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-start"
          aria-controls="navbar-start"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-start">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Productos" className="nav-link active">Productos</Link>
            </li>
            <li className="nav-item">
              <a href="/HistorialCompra" className="nav-link active">
                Historial de compras
              </a>
            </li>
            <li className="nav-item active">
              <LoginLogout />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
