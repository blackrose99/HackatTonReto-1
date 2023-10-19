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


    useEffect(() => {
        if (data) {
            setCuentaInfo({
                name: data.name || "Nombre del Cliente",
                document: data.document || "123456789",
                email: data.email || "cliente@example.com",
                phone: data.phone || "",
                UsersAccounts: data.UsersAccounts || [],
            });

        }

        console.log(data);
    }, [data]);



    return (
        <div>
            <div className="datosCliente">
                <div className="datosinter">
                    <h2>Tus cuentas: </h2>
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
                                    <td>{cuenta.AccountId}</td>
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