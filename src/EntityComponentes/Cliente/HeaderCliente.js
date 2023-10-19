//Importamos el CSS del header.
import "./HeaderCliente.css"

import React, { useState, useEffect } from 'react';
// Agregar Boton de (cerrar sesion) y centrar nombres

import ImagenDeLogoCoomultrasan from '../../UniversalCompontes/ImgUniversal/logoCoomultrasan.png';
import ImagenDeLogoPerfil from '../../UniversalCompontes/ImgUniversal/imgUser.png';

//Importar Link's.
import { Link, useLocation } from 'react-router-dom';

const HeaderCliente = ({ entityName, userName, userRole, data }) => {
  const [clientInfo, setClientInfo] = useState({
    name: "",
    document: "",
    email: "",
    phone: "",
    createdAt: "",
    updatedAt: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setClientInfo({
        name: data.name || "Nombre del Cliente",
        document: data.document || "123456789",
        email: data.email || "cliente@example.com",
        phone: data.phone || "",
        createdAt: data.createdAt || "",
        updatedAt: data.updatedAt || "",
      });
      setLoading(false); // Marca como no cargando una vez que se obtienen los datos
    }

    console.log(data);
  }, [data]);

  if (loading) {
    return <p>Cargando...</p>;
  }
  return (
    <div id='reducir' className="borde">
      <header>
      <div className="header-container-fluid">
  <nav className="navbar navbar-expand-lg navbar-light container-fluid navHeaderCliente" id="colorBarra">
    <div className="container">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-content nav-item">
              <p className="nombrePerson"><img src={ImagenDeLogoPerfil} alt="Logo perfil" id="LogoPerfil" className="LogoPerfil nav" /> {clientInfo.name}</p>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/login-cliente" className="navbar-brand btnIniciarSesion">
              <h4 className="iniciarSession">Cerrar Sesión</h4>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div id="colorTotal">
    <img src={ImagenDeLogoCoomultrasan} alt="Logo Coomultrasan" id="LogoImg" className="imagen-qr" />
  </div>
</div>


      </header>
    </div>
  );
};

export default HeaderCliente;
