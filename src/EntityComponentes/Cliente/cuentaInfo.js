import React, { useState, useEffect } from "react";

const CuentaInfo = ({ cuentaId }) => {
    const [cuentaData, setCuentaData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Datos quemados para este ejemplo
    const datosQuemados = {
        name: "Nombre del Cliente",
        documentId: "123456789",
        email: "cliente@example.com",
        phone: "123-456-7890",
        ciudad: "Ciudad del Cliente",
        direccion: "Dirección del Cliente",
        estadoCuenta: "Activa",
    };

    useEffect(() => {
        // Simulación de carga de datos
        setTimeout(() => {
            setCuentaData(datosQuemados);
            setLoading(false);
        }, 1000); // Simula una carga de datos durante 1 segundo
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
