import React, { useState, useEffect } from "react";

export function InfoQr({ data }) {
  const [QrInfo, setQrInfo] = useState({
    qrs: [],
    transactions: []
  })
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data) {
      /*var qrs;
      for(usersAccounts : data.UsersAccounts) {

      }*/

      setQrInfo({
        qrs: data.UsersAccounts || [],
        transactions: [],
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
      <h1>Listado de Qrs</h1>

      <table className="table">
        <thead>
        <tr>
          <th scope="col">Número de cuenta</th>
        </tr>
        </thead>
        <tbody>
        {QrInfo.qrs.map((qr, index) => (
            <tr key={index}>
              <td># {qr.balance}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default InfoQr;