import React from "react";

function InfoClient() {
    // Supongamos que tienes un objeto clientData con la información del cliente
    const clientData = {
        name: "Nombre del Cliente",
        documentId: "123456789",
        email: "cliente@example.com",
        phone: "123-456-7890",
        ciudad: "Ciudad del Cliente",
        direccion: "Dirección del Cliente",
        estadoCuenta: "Activa",
    };

    return (
        <div>
            <h2>Información del Cliente</h2>
            <p><strong>Nombre:</strong> {clientData.name}</p>
            <p><strong>Documento de Identidad:</strong> {clientData.documentId}</p>
            <p><strong>Correo Electrónico:</strong> {clientData.email}</p>
            <p><strong>Número de Teléfono:</strong> {clientData.phone}</p>
            <p><strong>Ciudad:</strong> {clientData.ciudad}</p>
            <p><strong>Dirección:</strong> {clientData.direccion}</p>
            <p><strong>Estado de la cuenta:</strong> {clientData.estadoCuenta}</p>
        </div>
    );
}

export default InfoClient;