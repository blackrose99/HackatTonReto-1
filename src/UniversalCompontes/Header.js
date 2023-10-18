import React from 'react';

import "../UniversalCompontes/Header.css"





const Header = ({ entityName, userName, userRole }) => {
  return (
    <div>
    <header>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id='colorBarra'>
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
                <a className="nav-link" href="/">Mis QRs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/entidad">Nuevo Formulario</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/usuario">Panel de Usuario</a>
              </li>
            </ul>
          </div>
          <div className="user-info">
            <p className="entity-name">Iniciar Sesión: {entityName}</p>
            {/* <p className="user-name">Usuario: {userName}</p>
            <p className="user-role">Rol: {userRole}</p> */}
          </div>
        </div>
      </nav>
    </header>
    </div>
  );
};

export default Header;
