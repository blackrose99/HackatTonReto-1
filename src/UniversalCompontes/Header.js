import React from 'react';
import '../UniversalCompontes/Header.css';
import ImagenDeLogoCoomultrasan from '../UniversalCompontes/ImgUniversal/logoCoomultrasan.png';

const Header = ({ entityName, userName, userRole }) => {
  return (
    <div id='reducir'>
      <header >
        <div className="header-container-fluid" id='colorTotal'>
          <nav className="navbar navbar-expand-lg navbar-light container-fluid" id='colorBarra'>
            <div className="container" id='colorBarra'>
              <a className="navbar-brand grande" href="/" id='texto'>Nombre de tu Cooperativa</a>
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
                    <a className="nav-link" href="/" id='texto'>Mis QRs</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/entidad" id='texto'>Nuevo Formulario</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/usuario" id='texto'>Panel de Usuario</a>
                  </li>
                </ul>
              </div>
        
            </div>
          </nav>
          <img src={ImagenDeLogoCoomultrasan} alt="Logo Coomultrasan" id='LogoImg' className="header-image" />
        </div>
      </header>
    </div>
  );
};

export default Header;
