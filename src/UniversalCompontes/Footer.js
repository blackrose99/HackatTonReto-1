import "./Footer.css"
import React from "react";

import ImagenDeFogacoop from '../UniversalCompontes/ImgUniversal/fogacoop.png';
import ImagenDesupersolidaria from '../UniversalCompontes/ImgUniversal/supersolidaria.png';


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
              <h2 className="titulosFooter">Puntos de Contacto</h2>
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
              <h2 className="bold-text titulosFooter">ACCESOS RÁPIDOS</h2>
              <a href="#">Ley 2300 de 2023</a>
              <a href="#">Balance social</a>
              <a href="#">Blog</a>
              <a href="#">Seguridad financiera</a>
              <a href="#">Tasas y tarifas</a>
              <a href="#">Reglamento crédito</a>
              <a href="#">Preguntas frecuentes</a>
              <a href="#">Asamblea</a>
              <a href="#">Consumidor financiero</a>
              <a href="#">Inscripción Comunidad Empresarial</a>
              <a href="#">Repositorio COVID-19</a>
              <a href="#">Alianza Fondo Nacional de Garantías</a>
            </div>
          </div>
          <div className="col-lg-3">
          <div class="card">
            <div class="formsub">
              <p>Trabaje con Nosotros@</p>
            </div>
            <div class="card-body">
              <form>
                  <label>SUSCRIBETE AL BOLETIN</label>
                 <input type="text" placeholder="Escribe aqui tu correo" ></input>

                 <button>Enviar</button>
              </form>
            </div>
          </div>
          </div>
        </div>
        <div class="row">
          <div className="col-lg siguenos">
            <p>SÍGUENOS EN</p>
          </div>
        </div>
        <div class="row">
          <div className="col-lg redesSociales">
            <i class='bx bxl-facebook-circle'></i>
            <i class='bx bxl-twitter' ></i>
            <i class='bx bxl-instagram-alt' ></i>
            <i class='bx bxl-youtube' ></i>
            <i class='bx bxl-linkedin-square' ></i>
            <i class='bx bxl-tiktok' ></i>
          </div>
        </div>
        <div class="row mt-3">
          <div className="col-lg finalFooter">
            <div class="arriba">
              <p>Ninguna parte del contenido de este sitio puede ser copiado, difundido o distribuido sin permiso expreso de Financiera Comultrasan. Derechos Reservados 2005-2023 / Bucaramanga, Santander, Colombia.</p>
            </div>
            <div class="abajo">
              <img src={ImagenDeFogacoop} alt="Logo Fogacoop" className="" />
              <img src={ImagenDesupersolidaria} alt="Logo supersolidaria" className="" />
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;