import "./Footer.css"
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 datosContactos">
            <i class='bx bx-user-circle'></i>
            <div className="contact-info">
              <p className="bold-text">CONTACT CENTER</p>
              <p>01 8000 938 088</p>
            </div>
            <i class='bx bx-phone'></i>
            <div className="contact-info">
              <p className="bold-text">EN BUCARAMANGA</p>
              <p>607 680 30 03</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-info">
              <h2>Puntos de Contacto</h2>
              {/* Lista de enlaces */}
              <ul className="list-unstyled">
                <li>
                  <a href="#">Escribenos</a>
                </li>
                <li>
                  <a href="#">Visitanos</a>
                </li>
                <li>
                  <a href="#">Linea WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-contact">
              <h2>Contacto</h2>
              <p>Dirección: Dirección de la entidad cooperativa</p>
              <p>Teléfono: +123 456 789</p>
              <p>Email: info@coopbanco.com</p>
            </div>
          </div>
          <div className="col-lg-3">

          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Cooperativa de Banco. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

