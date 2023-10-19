import React, { useState, useEffect } from 'react';
// ... (las otras importaciones)

import '../../UniversalCompontes/Header.css';
import ImagenDeLogoCoomultrasan from '../../UniversalCompontes/ImgUniversal/logoCoomultrasan.png';

const HeaderCliente = ({ entityName, userName, userRole,data}) => {
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
                    <p><strong>Bienvenido:</strong> {clientInfo.name}</p>
                    </div>
                  </li>
                  <li className="nav-item">
                    <h4><a className="nav-link" href="/entidad" id='texto'>Mis Qrs</a></h4>
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

export default HeaderCliente;
