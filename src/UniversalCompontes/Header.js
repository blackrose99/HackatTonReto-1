import React from "react";
import "../UniversalCompontes/Header.css";
import ImagenDeLogoCoomultrasan from "../UniversalCompontes/ImgUniversal/logoCoomultrasan.png";
import { Link, useLocation } from 'react-router-dom'; // Importa Link y useLocation


const Header = ({ entityName, userName, userRole }) => {
  return (
    <div id="reducir">
      <header>
        <div className="header-container-fluid" id="colorTotal">
          <nav
            className="navbar navbar-expand-lg navbar-light container-fluid"
            id="colorBarra"
          >
            <div className="container" id="colorBarra">
              <a className="navbar-brand grande" href="/" id="texto">
                Nombre de tu Cooperativa
              </a>
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
                    <a className="nav-link" href="/" id="texto">
                      Mis QRs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/entidad" id="texto">
                      Nuevo Formulario
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/usuario" id="texto">
                      Panel de Usuario
                    </a>
                  </li>
                </ul>
              </div>
<<<<<<< HEAD

                <p className="entity-name" id='texto'>Iniciar Sesión: {entityName}</p>
                {/* <p className="user-name" id='texto'>Usuario: {userName}</p>
                <p className="user-role" id='texto'>Rol: {userRole}</p> */}

=======
              <div className="user-info custom-user-info">
                <Link to="/login-cliente" className="navbar-brand">
                  <h4 className="btn btn-primary">Iniciar Sesión</h4>
                </Link>
              </div>
>>>>>>> c6eb59e852eafb4fc9f8a5796cceab0685ad4811
            </div>
          </nav>
          <img
            src={ImagenDeLogoCoomultrasan}
            alt="Logo Coomultrasan"
            id="LogoImg"
            className="header-image"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
