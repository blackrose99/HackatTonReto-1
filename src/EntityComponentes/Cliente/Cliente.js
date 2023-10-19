import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfoClient from "./InfoClient"; // Importa el componente InfoClient (asegúrate de que la mayúscula inicial esté correcta)
import HeaderCliente from "./HeaderCliente";
import InfoQr from './InfoQr'
import InfoCuenta from './InfoCuenta'
import Footer from '../../UniversalCompontes/Footer'


const ClientInfo = ({localhost}) => {
  const { id } = useParams();
  const [clientData, setClientData] = useState(null);
  const [cuentaData, setCuentaData] = useState(null);
  const [qrData, setQraData] = useState(null);
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
        setQraData(data);
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
      <div class="container-fluid">
        <div class="row ">
          <div class="col-lg-12">
            <HeaderCliente data={clientData}/>
          </div>
        </div>

        <div class="row justify-content-center mt-4 ml-5 mb-5">
          <div class="col-lg-6">
            {clientData ==null ? <p>Cargando...</p> : <InfoClient data={clientData} />}
          </div>

          <div class="col-lg-6">
            {cuentaData ==null ? <p>Cargando...</p> : <InfoCuenta data={cuentaData} />}
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            {qrData ==null ? <p>Cargando...</p> : <InfoQr data={cuentaData} />}
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default ClientInfo;