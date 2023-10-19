import React, { useState, useEffect } from "react";
import Header from "../../UniversalCompontes/Header";
import Footer from "../../UniversalCompontes/Footer";

export function InfoCuenta({ data }) {

    const [cuentaInfo, setCuentaInfo] = useState({
        name: "",
        document: "",
        email: "",
        phone: "",
        UsersAccounts: [],
    })
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data) {
            setCuentaInfo({
                name: data.name || "Nombre del Cliente",
                document: data.document || "123456789",
                email: data.email || "cliente@example.com",
                phone: data.phone || "",
                UsersAccounts: data.UsersAccounts || [],
            });
            setLoading(false); // Marca como no cargando una vez que se obtienen los datos
        }

        console.log(data);
    }, [data]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            <div className="datosCliente">
                <div className="datosinter">
                    <h2>Información del Cliente</h2>
                    <p><strong>Nombre:</strong> {cuentaInfo.name}</p>
                    <p><strong>Documento de Identidad:</strong> {cuentaInfo.document}</p>
                    <p><strong>Correo Electrónico:</strong> {cuentaInfo.email}</p>
                    <p><strong>Teléfono:</strong> {cuentaInfo.phone}</p>
                    
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Número de cuenta</th>
                                    <th scope="col">Saldo de cuenta</th>
                                    <th scope="col">Tipo de cuenta</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cuentaInfo.UsersAccounts.map((cuenta, index) => (
                                    <tr key={index}>
                                        <td>{cuenta.id}</td>
                                        <td>{cuenta.balance}</td>
                                        <td>{cuenta.Account.TypesAccount.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                </div>
            </div>
        </div>


    );
}

export default InfoCuenta;