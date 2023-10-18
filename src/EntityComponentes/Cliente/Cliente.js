
import React, { useState, useEffect } from 'react';

//Importaciones del Componente Header
import HeaderCliente from "./HeaderCliente";

//Importaciones del Componente CuentaInfo


import { Link, useNavigate, useParams } from "react-router-dom";
import CuentaInfo from './cuentaInfo'

const ClientInfo = () => {
  const { id } = useParams();
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simular una solicitud para obtener la información del cliente por su ID
  useEffect(() => {
    // Realiza una solicitud al servidor o utiliza datos en la base de datos
    // para obtener la información del cliente por su ID (clientId).
    // Supongamos que obtienes los datos y los almacenas en clientData.

    // Simulación de datos para este ejemplo:
    const fetchData = async () => {
      console.log(id)
      try {
        // Simular una solicitud a la API o la base de datos.
        // Reemplaza esta parte con tu lógica real.
        const response = await fetch(`http://192.168.4.15:5000/api/users/${id}`);
        const data = await response.json();
        setClientData(data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        console.error('Error al obtener datos del cliente', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando la información del cliente...</p>;
  }

  if (!clientData) {
    return <p>No se encontró información para este cliente.</p>;
  }

  return (
    <>
    <div>

      <CuentaInfo/>

      {/* Mostrar más detalles según sea necesario */}

    </div>
    </>
    
  );
};

export default ClientInfo;
