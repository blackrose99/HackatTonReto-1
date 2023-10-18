import "./Cliente.css"
import Header from "../../UniversalCompontes/Header";
import Footer from "../../UniversalCompontes/Footer";
import React, { useState, useEffect } from "react";

export function InfoClient({ data }) {
    const [clientInfo, setClientInfo] = useState({
        name: "",
        document: "",
        email: "",
        phone: "",
        createdAt: "",
        updatedAt: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data) {
            setClientInfo({
                name: data.name || "Nombre del Cliente",
                document: data.document || "123456789",
                email: data.email || "cliente@example.com",
                phone: data.phone || "",
                createdAt: data.createdAt || "",
                updatedAt: data.updatedAt || "",
            });
            setLoading(false); // Marca como no cargando una vez que se obtienen los datos
        }
    }, [data]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
        <Header/>
       <div className="datosCliente">
            <div className="datosinter">
                <h2>Información del Cliente</h2>
                <p><strong>Nombre:</strong> {clientInfo.name}</p>
                <p><strong>Documento de Identidad:</strong> {clientInfo.document}</p>
                <p><strong>Correo Electrónico:</strong> {clientInfo.email}</p>
                <p><strong>Teléfono:</strong> {clientInfo.phone}</p>
                <p><strong>Cuenta creada:</strong> {clientInfo.createdAt}</p>
                <p><strong>Actualización:</strong> {clientInfo.updatedAt}</p>
            </div>
        </div> 
        <Footer/>
        </div>     
    );
}

export default InfoClient;
