import React, { useState, useEffect } from "react";

const ClienteInfo = ({ data }) => {
    const [clientData, setClientData] = useState({
        name: "",
        documentId: "",
        email: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulación de carga de datos
        setTimeout(() => {
            // Supongamos que data es un objeto que proviene de una fuente externa.
            // Asegúrate de ajustar esto según cómo recibes los datos reales.
            if (data) {
                setClientData({
                    name: data.name,
                    documentId: data.documentId,
                    email: data.email,
                });
                setLoading(false);
            } else {
                setLoading(false);
            }
        }, 1000); // Simula una carga de datos durante 1 segundo
    }, [data]);

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : clientData.name ? (
                <div>
                    <h2>Información del Cliente</h2>
                    <p><strong>Nombre:</strong> {clientData.name}</p>
                    <p><strong>Documento de Identidad:</strong> {clientData.documentId}</p>
                    <p><strong>Correo Electrónico:</strong> {clientData.email}</p>
                </div>
            ) : (
                <p>No se encontraron datos para esta cuenta.</p>
            )}
        </div>
    );
};

export default ClienteInfo;
