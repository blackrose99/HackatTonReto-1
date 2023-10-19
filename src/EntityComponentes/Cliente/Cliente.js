import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfoClient from "./infoclient"; // Importa el componente InfoClient (asegúrate de que la mayúscula inicial esté correcta)
import HeaderCliente from "./HeaderCliente";
import InfoQr from './InfoQr'
import InfoCuenta from './InfoCuenta'
import Header from '../../UniversalCompontes/Header'
import Footer from '../../UniversalCompontes/Footer'
const ClientInfo = ({localhost}) => {
  const { id } = useParams();
  const [clientData, setClientData] = useState(null);
  const [cuentaData, setCuentaData ] = useState(null);
  const [infoData, setInfoData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(localhost)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${localhost}/api/users/${id}`
        );
        const data = await response.json();
        setClientData(data);
        setCuentaData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener datos del cliente", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);


  return (

    <div>
      <Header />
      {loading && <p>Cargando...</p>}
      {!clientData && <p>o se encontró información para este cliente.</p>}
      {!cuentaData && <p>No se encontró información para este cuenta.</p>}
      <InfoClient data={clientData} /> {/* Pasa los datos a InfoClient */}
      {/* Mostrar más detalles según sea necesario */}
      <InfoCuenta data={cuentaData} />
      <InfoQr data={cuentaData} />
      <Footer />
      </div>

  );
};

export default ClientInfo;
