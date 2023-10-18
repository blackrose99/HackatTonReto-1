import "./Footer.css"
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <hr></hr>
        <div className="row">
          <div className="col-lg-3 datosContactos">
            <div className="contact-item">
              <i class='bx bx-user-circle'></i>
              <div className="contact-info">
                <p className="bold-text">CONTACT CENTER</p>
                <p className="right-text">01 8000 938 088</p>
              </div>
            </div>
            <div className="contact-item">
              <i class='bx bx-phone'></i>
              <div className="contact-info">
                <p className="bold-text">EN BUCARAMANGA</p>
                <p className="right-text">607 680 30 03</p>
              </div>
            </div>
            <div className="contact-item">
              <i class='bx bxl-whatsapp'></i>
              <div className="contact-info">
                <p className="bold-text">WHATSAPP</p>
                <p className="right-text">310 751 8024</p>
              </div>
            </div>
            <div className="contact-item">
              <i class='bx bx-list-check'></i>
              <div className="contact-info">
                <p className="bold-text">CONTINÚA CON LA</p>
                <p className="right-text">firma de tus documentos</p>
              </div>
            </div>
            <div className="contact-item">
              <i class='bx bx-map' ></i>
              <div className="contact-info">
                <p className="bold-text">Edificio Administrativo</p>
                <p className="right-text">Calle 35 # 16-43
                Paseo del Comercio
                NIT 804-009-752-8
                Bucaramanga</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-info">
              <h2>Nuestra Cooperativa de Banco</h2>
              <p>
                Somos una entidad cooperativa comprometida con nuestros socios y la comunidad. Brindamos servicios financieros y soluciones bancarias que hacen la diferencia.
              </p>
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