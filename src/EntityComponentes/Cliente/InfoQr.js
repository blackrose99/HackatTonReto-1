import React, { useState, useEffect } from "react";
import "./InfoQr.css"
import { Link, useLocation } from 'react-router-dom';

export function InfoQr({ data }) {
  const [QrInfo, setQrInfo] = useState({
    qrs: [],
    transactions: []
  })
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data) {
      /*var qrs;
      for(usersAccounts : data.UsersAccounts) {

      }*/

      setQrInfo({
        qrs: data.UsersAccounts || [],
        transactions: [],
      });
      setLoading(false); // Marca como no cargando una vez que se obtienen los datos
    }

    console.log(data);
  }, [data]);

  if (loading) {
    return <p>Cargando...</p>;
  }
  return (
    <div>
      <div className="custom-container mb-2">
        <h1>Listado de Qrs</h1>
        <Link to="/form-tipo/1">
          <button className="btn-donate">Generar Nuevo Qr</button>
        </Link>
        
      </div>

      <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Número de cuenta</th>
            <th>Nombre del Qr</th>
            <th>Transaccion</th>
            <th>Fecha</th>
            <th>Estado De Transaccion</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td># 1020</td>
              <td>Apple Master</td>
              <td>123</td>
              <td>19/10/2023 08:35 AM</td>
              <td>Aprobado</td>
            </tr>
            <tr>
              <td># 3000</td>
              <td>Sonidos Bose</td>
              <td>456</td>
              <td>30/06/2023 10:15 PM</td>
              <td>Rechazado</td>
            </tr>
        </tbody>
      </table>
      </div>
      


    </div>

    
  );
}

export default InfoQr;