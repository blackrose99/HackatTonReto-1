import "./Footer.css"
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="logo.png" alt="Logo de la entidad cooperativa de banco" />
          </div>
          <div className="footer-info">
            <h2>Nuestra Cooperativa de Banco</h2>
            <p>
              Somos una entidad cooperativa comprometida con nuestros socios y
              la comunidad. Brindamos servicios financieros y soluciones
              bancarias que hacen la diferencia.
            </p>
          </div>
          <div className="footer-contact">
            <h2>Contacto</h2>
            <p>Dirección: Dirección de la entidad cooperativa</p>
            <p>Teléfono: +123 456 789</p>
            <p>Email: info@coopbanco.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cooperativa de Banco. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
