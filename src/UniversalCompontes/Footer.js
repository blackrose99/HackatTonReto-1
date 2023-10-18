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
              <h2 className="bold-text">Puntos de Contacto</h2>
              {/* Lista de enlaces */}
              <ul className="list-unstyled">
                <li>
                <i class='bx bxs-right-arrow arrow'></i>
                  <a href="#" className="gray-text">Escribenos</a>
                </li>
                <li>
                <i class='bx bxs-right-arrow arrow'></i>
                  <a href="#" className="gray-text">Visitanos</a>
                </li>
                <li>
                <i class='bx bxs-right-arrow arrow'></i>
                  <a href="#" className="gray-text">Linea WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-contact">
              <h2 className="bold-text">ACCESOS RÁPIDOS</h2>
              <a href="#" class="accesoRapido">Ley 2300 de 2023</a>
              <a href="#" class="accesoRapido">Balance social</a>
              <a href="#" class="accesoRapido">Blog</a>
              <a href="#" class="accesoRapido">Seguridad financiera</a>
              <a href="#" class="accesoRapido">Tasas y tarifas</a>
              <a href="#" class="accesoRapido">Reglamento crédito</a>
              <a href="#" class="accesoRapido">Preguntas frecuentes</a>
              <a href="#" class="accesoRapido">Asamblea</a>
              <a href="#" class="accesoRapido">Consumidor financiero</a>
              <a href="#" class="accesoRapido">Inscripción Comunidad Empresarial</a>
              <a href="#" class="accesoRapido">Repositorio COVID-19</a>
              <a href="#" class="accesoRapido">Alianza Fondo Nacional de Garantías</a>
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