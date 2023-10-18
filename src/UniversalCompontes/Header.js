

import "./Header.css"
import ImagenDeBanco from '../img-entityComponentes/imagen01hyjpg.jpg';

<img className="imgBanck" src={ImagenDeBanco} width={500} alt="Imagen del banco" />
import React from 'react';

const Header = ({ entityName, userName, userRole }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">Nombre de tu Cooperativa</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/entidad">Panel de Entidad</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/usuario">Panel de Usuario</a>
              </li>
            </ul>
          </div>
          <div className="user-info">
            <p className="entity-name">Entidad: {entityName}</p>
            <p className="user-name">Usuario: {userName}</p>
            <p className="user-role">Rol: {userRole}</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
