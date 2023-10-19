import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfoClient from "./infoclient"; // Importa el componente InfoClient (asegúrate de que la mayúscula inicial esté correcta)

import HeaderCliente from "./HeaderCliente";
const ClientInfo = () => {
  const { id } = useParams();
  const [clientData, setClientData] = useState(null);
<<<<<<< HEAD
  const [cuentaData, setCuentaData ] = useState(null);
=======
  const [infoData, setInfoData] = useState(null);
>>>>>>> 2f39eb41eaa9c6a906625de0cb467d2ece083d61
  const [loading, setLoading] = useState(true);
  console.log(localhost)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://192.168.4.15:5000/api/users/${id}`
        );
        const data = await response.json();
        setClientData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener datos del cliente", error);
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
<<<<<<< HEAD
  
    <div>
      
      <InfoClient data={clientData} /> {/* Pasa los datos a InfoClient */}
      {/* Mostrar más detalles según sea necesario */}
      <InfoCuenta data={cuentaData} />
      </div>
=======
    <di>
      <HeaderCliente data={clientData} /> 
      <InfoClient data={clientData} /> {/* Pasa los datos a InfoClient */}
    </di>
>>>>>>> 2f39eb41eaa9c6a906625de0cb467d2ece083d61
  );
};

export default ClientInfo;
