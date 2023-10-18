import React, { useState, useEffect } from 'react';
import HeaderCliente from "./HeaderCliente";
import { Link, useNavigate, useParams } from "react-router-dom";

const ClientInfo = ({ clientId }) => {
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simular una solicitud para obtener la información del cliente por su ID
  useEffect(() => {
    // Realiza una solicitud al servidor o utiliza datos en la base de datos
    // para obtener la información del cliente por su ID (clientId).
    // Supongamos que obtienes los datos y los almacenas en clientData.

    // Simulación de datos para este ejemplo:
    const fetchData = async () => {
      try {
        // Simular una solicitud a la API o la base de datos.
        // Reemplaza esta parte con tu lógica real.
        const response = await fetch(`/api/client/${clientId}`);
        const data = await response.json();
        setClientData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener datos del cliente', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [clientId]);

  if (loading) {
    return <p>Cargando la información del cliente...</p>;
  }

  if (!clientData) {
    return <p>No se encontró información para este cliente.</p>;
  }

  return (
    <div>
      <HeaderCliente/>

      <h2>Información del Cliente</h2>
      <p><strong>Nombre:</strong> {clientData.name}</p>
      <p><strong>Documento de Identidad:</strong> {clientData.documentId}</p>
      <p><strong>Correo Electrónico:</strong> {clientData.email}</p>
      <p><strong>Número de Teléfono:</strong> {clientData.phone}</p>
      <p><strong>Ciudad: {clientData.ciudad}</strong></p>
      <p><strong>Dirección: {clientData.direccion}</strong></p>
      <p><strong>Estado de la cuenta: {clientData.estadoCuenta}</strong></p>

      {/* Mostrar más detalles según sea necesario */}
      <Link to="/crearQr" className="btn btn-info mt-3 mb-5">
          ← Crear Codigo Qr
        </Link>
    </div>

    
  );
};

export default ClientInfo;
