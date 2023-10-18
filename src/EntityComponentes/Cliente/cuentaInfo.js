import React, { useState, useEffect } from "react";

const CuentaInfo = ({ cuentaId }) => {
    // Uso de useState (Hook de estado) dentro de las constantes cuentaData y loading
    const [cuentaData, setCuentaData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Simular una solicitud para obtener la información de la cuenta por su ID
    useEffect(() => {
        // Simulación de datos para este ejemplo:
        const fetchData = async () => {
            try {
                // Simulación de una solicitud a la API o base de datos.
                // Reemplaza esta parte con tu lógica real.

                // Supongamos que obtienes la información del cliente por su cuentaId
                const response = await fetch(`/api/cliente/${cuentaId}`);
                if (response.ok) {
                    const data = await response.json();
                    setCuentaData(data);
                } else {
                    // Manejo de errores si la solicitud no fue exitosa
                    console.error("Error al obtener los datos del cliente.");
                }
                setLoading(false);
            } catch (error) {
                // Manejo de errores en la solicitud
                console.error("Error en la solicitud: ", error);
            }
        };

        fetchData();
    }, [cuentaId]);

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : cuentaData ? (
                <div>
                    <h2>Información del Cliente</h2>
                    <p><strong>Nombre:</strong> {cuentaData.name}</p>
                    <p><strong>Documento de Identidad:</strong> {cuentaData.documentId}</p>
                    <p><strong>Correo Electrónico:</strong> {cuentaData.email}</p>
                    <p><strong>Número de Teléfono:</strong> {cuentaData.phone}</p>
                    <p><strong>Ciudad:</strong> {cuentaData.ciudad}</p>
                    <p><strong>Dirección:</strong> {cuentaData.direccion}</p>
                    <p><strong>Estado de la cuenta:</strong> {cuentaData.estadoCuenta}</p>
                </div>
            ) : (
                <p>No se encontraron datos para esta cuenta.</p>
            )}
        </div>
    );
};

export default CuentaInfo;
