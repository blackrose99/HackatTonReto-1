import React from "react";

export function InfoClient({data}) {
    // Supongamos que tienes un objeto clientData con la información del cliente
        
   

    console.log(data);
    return (
        <div>
            <h2>Información del Cliente</h2>
            <p><strong>Nombre:</strong> {data.name}</p>
            <p><strong>Documento de Identidad:</strong> {data.document}</p>
            <p><strong>Correo Electrónico:</strong> {data.email}</p>
        </div>
    );
}


export default InfoClient;