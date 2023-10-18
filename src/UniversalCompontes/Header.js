import React from 'react';
import '../UniversalCompontes/Header.css';
import ImagenDeLogoCoomultrasan from '../UniversalCompontes/ImgUniversal/logoCoomultrasan.png';
import ImagenDeQR from '../UniversalCompontes/ImgUniversal/codigo-qr.png';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ entityName, userName, userRole }) => {
  return (
    <div id='reducir' className="borde">
      <header>
        <div className="header-container-fluid" >
          <nav className="navbar navbar-expand-lg navbar-light container-fluid" id='colorBarra'>
            <div className="container" id=''>
              {/* <a className="navbar-brand grande" href="/" id='texto'>Nombre de tu Cooperativa</a> */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse" // Clase de Bootstrap 4
                data-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <div className="nav-content">
                      <h4><a className="nav-link" href="/" id='texto'>Mis QRs</a></h4>
                    </div>
                  </li>
                  <li className="nav-item">
                    <h4><a className="nav-link" href="/entidad" id='texto'>Formularios</a></h4>
                  </li>
                  <li className="nav-item">
                    <h4><a className="nav-link" href="/usuario" id='texto'>Panel de Usuario</a></h4>
                  </li>
                  <li>
                    <Link to="/login-cliente" className="navbar-brand">
                      <h4 className="iniciar">Iniciar Sesión</h4>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div id='colorTotal'>
          <img src={ImagenDeLogoCoomultrasan} alt="Logo Coomultrasan" id='LogoImg' className="imagen-qr" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
