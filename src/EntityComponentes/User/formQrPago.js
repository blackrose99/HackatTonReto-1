
import React, { useState } from 'react';
import Header from "../../UniversalCompontes/Header";
import Footer from "../../UniversalCompontes/Footer";
import "./Form-Pago.css"; // Importa tu archivo CSS


function FormularioDePagos() {
  const [valor, setValor] = useState('');
  const [metodoPago, setMetodoPago] = useState('PSE');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("pago exitoso");
    window.location.href="/"
    // Aquí puedes realizar la lógica de envío del formulario
    // Por ejemplo, puedes enviar los datos al servidor o realizar otras acciones.

    // Luego, puedes limpiar los campos del formulario si es necesario:
    setValor('');
    setMetodoPago('PSE');
    setNombre('');
    setCorreo('');
  };

  return (
    <div className='pagePagos'>
    <div className="FormularioDePagos">
      <h1>Pago para <b>Juan Perez</b></h1>
      <form onSubmit={handleFormSubmit}>
       



        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="correo">Correo Electrónico:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
         <label htmlFor="valor">Valor a Pagar:</label>
        <input
          type="number"
          id="valor"
          name="valor"
          value="50000"
          readOnly
          onChange={(e) => setValor(e.target.value)}
          required
        />
                <div className="metodo-pago">
          <label>Método de Pago:</label>
          <label>
            <input
              type="radio"
              id="pse"
              name="metodo_pago"
              value="PSE"
              checked={metodoPago === 'PSE'}
              onChange={() => setMetodoPago('PSE')}
              required
              className='radio'
            />
            PSE
          </label>
          <label>
            <input
              type="radio"
              id="fc"
              name="metodo_pago"
              value="FC"
              checked={metodoPago === 'FC'}
              onChange={() => setMetodoPago('FC')}
              required
              className='radio'
            />
            FC
          </label>
        </div>
        

        <button >Pagar</button>
      </form>
    </div>
    </div>
  );
}

export default FormularioDePagos;
