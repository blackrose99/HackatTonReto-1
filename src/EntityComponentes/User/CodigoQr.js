import React, { useRef } from "react";
import { jsPDF } from "jspdf";

import Header from "../../UniversalCompontes/Header";
import Footer from "../../UniversalCompontes/Footer";
import "./CodigoQr.css"; // Importa tu archivo CSS


const CodigoQr = () => {
  const qrBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAC5CAAAAABRxsGAAAABvklEQVR42u3c2Q6CMBAFUP7/p/HZxNY7LS6lhycjCqckTGZBj3PV7SAnJycnJycnJycnJye/i/x4v8XHf/7Gq6MMno2cfG95H9N8r32m5x3BN94cj5ycvBkLmp/r24LjNfeSk5OPypv8ZgpQPxs5OflFsSVIw8nJyeflpXWNlsI/qCzIyZeXB4QLX325O0dOvrK83mIOFvdXEy5y8pXlwX3f5E/Xzeksipx8W3k9gU7bWwF6Kj8nJ99BHgxygpluuobBVIGcnPzoz3+CZQaTpfpFICffWx7MekopQB8dxCBycvIzuOUH28nBlUif5yAnJz9LtsHKOAhiU1GRnPzm8lLfq1Rk1yMZOTl53IBOH4uYGfHOxxZy8vvKS7ZSCLlwheTke8uD5nDQOk5HvGnPm5ycPJnwBL3nNO++Mj8nJ99Q3h8WDabc9ZY1OTn5VKOrNNMt1ebk5ORxBV3KytNxbrpqcnLy2m/P+9TBfD8JbOTk5PVYUKqbgxhETk4+JR/sYgXZ+2dqf3LyveSlZKCUlX8lKpKTrywv7U0JMyk8OTl57T/Q0oeZZoa95OTkq23k5OTk5OTk5OTk5OTkK24Pj2rZJrNffggAAAAASUVORK5CYII=";
  const qrLink = "http://localhost:3000/form-pago/1"; // Reemplaza con el enlace al que debe dirigir el QR
  const qrFileName = "codigo_qr.pdf"; // Nombre del archivo PDF

  const saveAsPDF = () => {
    const doc = new jsPDF();
    doc.addImage(qrBase64, "PNG", 30, 30, 150, 150); // Añade la imagen al PDF
    doc.save(qrFileName); // Guarda el PDF
  };
  
  return (
    <div>
         <Header/>
    <div className="centered shadowed">
       
      <h1>Nombre del QR:</h1>
      <div className="shadowed"> {/* Aplica las clases CSS aquí */}
        <img src={qrBase64} alt="Código QR" width={450}/>
      </div>
      <div>
        <p className="mt-3">Enlace al código QR: {qrLink}</p>
      </div>
      <button class="buttonDownload" onClick={saveAsPDF} type="button">
        <span class="button__text">Imprimir QR</span>
        <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
      </button>
      </div>
      <Footer/>
    </div>
  );
};

export default CodigoQr;
