import React, { useState, useEffect } from "react";

export function InfoQr({ data }) {
  const [QrInfo, setQrInfo] = useState({
    image: "",
    transactions: []
  })
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data) {
      setQrInfo({
        image: data.images || "",
        transactions: data.UsersAccounts.Forms.Qrs.name || [],
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
    </div>
  );
}

export default InfoQr;