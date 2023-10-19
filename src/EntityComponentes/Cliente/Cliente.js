import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfoClient from "./infoclient"; // Importa el componente InfoClient (asegúrate de que la mayúscula inicial esté correcta)
import HeaderCliente from "./HeaderCliente";
import InfoQr from './InfoQr'
import InfoCuenta from './InfoCuenta'
import Footer from '../../UniversalCompontes/Footer'


const ClientInfo = ({localhost}) => {
  const { id } = useParams();
  const [clientData, setClientData] = useState(null);
  const [cuentaData, setCuentaData] = useState()
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
        setCuentaData(data)
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
      <HeaderCliente data={clientData}/>

      {clientData ==null ? <p>Cargando...</p> : <InfoClient data={clientData} />} {/* Pasa los datos a InfoClient */}
      {/* Mostrar más detalles según sea necesario */}
      {cuentaData ==null ? <p>Cargando...</p> : <InfoCuenta data={cuentaData} />}

      <Footer />
      </div>
  );
};

export default ClientInfo;
