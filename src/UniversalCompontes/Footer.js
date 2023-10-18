import "./Footer.css"
import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-logo">
              <img src="logo.png" alt="Logo de la entidad cooperativa de banco" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-info">
              <h2>Nuestra Cooperativa de Banco</h2>
              <p>
                Somos una entidad cooperativa comprometida con nuestros socios y la comunidad. Brindamos servicios financieros y soluciones bancarias que hacen la diferencia.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-contact">
              <h2>Contacto</h2>
              <p>Dirección: Dirección de la entidad cooperativa</p>
              <p>Teléfono: +123 456 789</p>
              <p>Email: info@coopbanco.com</p>
            </div>
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
import "./Footer.css"
