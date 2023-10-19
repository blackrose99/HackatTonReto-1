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

    const formatearFecha = (cadenaTiempo) => {
        const fechaHora = new Date(cadenaTiempo);

        const dia = fechaHora.getDate();
        const mes = fechaHora.getMonth() + 1;
        const año = fechaHora.getFullYear();
        const horas = fechaHora.getHours();
        const minutos = fechaHora.getMinutes();
        const segundos = fechaHora.getSeconds();

        // Asegurarse de que siempre haya dos dígitos para días, meses, horas, etc.
        const formatoDia = dia < 10 ? `0${dia}` : dia;
        const formatoMes = mes < 10 ? `0${mes}` : mes;
        const formatoHoras = horas < 10 ? `0${horas}` : horas;
        const formatoMinutos = minutos < 10 ? `0${minutos}` : minutos;
        const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos;

        // Formato deseado: "dd/mm/yyyy HH:mm:ss"
        const formatoPersonalizado = `${formatoDia}/${formatoMes}/${año} ${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;

        return formatoPersonalizado;
    };
    return (
        <div>
        
       <div className="datosCliente">
            <div className="datosinter">
                <h2>Información del Cliente</h2>
                <p><strong>Nombre:</strong> {clientInfo.name}</p>
                <p><strong>Documento de Identidad:</strong> {clientInfo.document}</p>
                <p><strong>Correo Electrónico:</strong> {clientInfo.email}</p>
                <p><strong>Teléfono:</strong> {clientInfo.phone}</p>
                <p><strong>Cuenta creada:</strong> {formatearFecha(clientInfo.createdAt)}</p>
                <p><strong>Actualización:</strong> {formatearFecha(clientInfo.updatedAt)}</p>
            </div>
        </div> 
        <Footer/>
        </div>     
    );
}

export default InfoClient;
