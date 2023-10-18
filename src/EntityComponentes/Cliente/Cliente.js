
import React, { useState, useEffect } from 'react';
import InfoClient from './InfoClient'; // Importa el componente InfoClient (asegúrate de que la mayúscula inicial esté correcta)
import InfoCuenta from './InfoCuenta';
import { useParams } from "react-router-dom";

const ClientInfo = () => {
  const { id } = useParams();
  const [clientData, setClientData] = useState(null);
  const [cuentaData, setCuentaData ] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.4.15:5000/api/users/${id}`);
        const data = await response.json();
        setClientData(data);
        setCuentaData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener datos del cliente', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Cargando la información del cliente...</p>;
  }

  if (!clientData) {
    return <p>No se encontró información para este cliente.</p>;
  }

  if (!cuentaData) {
    return <p>No se encontró información para este cuenta.</p>;
  }
  return (
  
    <div>
      
      <InfoClient data={clientData} /> {/* Pasa los datos a InfoClient */}
      {/* Mostrar más detalles según sea necesario */}
      <InfoCuenta data={cuentaData} />
      </div>
  );
};

export default ClientInfo;
