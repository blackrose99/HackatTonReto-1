import React, { useState, useEffect } from 'react';

const EntityClientManagement = () => {
  const [clients, setClients] = useState([]); // Lista de clientes
  const [loading, setLoading] = useState(true);

// Simulación de obtener la lista de clientes desde el servidor
  useEffect(() => {
    // Realiza una solicitud al servidor o utiliza datos de la base de datos
    // para obtener la lista de clientes.
    // Supongamos que obtienes los datos y los almacenas en clients.

    // Simulación de datos para este ejemplo:
    const fetchClients = async () => {
      try {
        // Simular una solicitud a la API o la base de datos.
        // Reemplaza esta parte con tu lógica real.
        const response = await fetch('/api/clients');
        const data = await response.json();
        setClients(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener la lista de clientes', error);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const toggleClientStatus = (clientId, status) => {
    // Simular la función para habilitar/deshabilitar un cliente
    // Puedes implementar una solicitud al servidor para actualizar el estado.
    console.log(`Cliente ${clientId} ${status ? 'habilitado' : 'deshabilitado'}.`);
  };

  const updateClientPermissions = (clientId, permissions, limit) => {
    // Simular la función para actualizar los permisos y límite de creación de QR del cliente
    // Puedes implementar una solicitud al servidor para guardar estos cambios.
    console.log(`Permisos de cliente ${clientId} actualizados: Permisos=${permissions}, Límite=${limit}.`);
  };

  if (loading) {
    return <p>Cargando la lista de clientes...</p>;
  }

  return (
    <div>
      <h2>Administración de Clientes</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Documento de Identidad</th>
            <th>Estado</th>
            <th>Permisos de Creación QR</th>
            <th>Límite de Creación QR</th>
          </tr>
        </thead>
   <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.documentId}</td>
              <td>
                <button onClick={() => toggleClientStatus(client.id, !client.disabled)}>
                  {client.disabled ? 'Habilitar' : 'Deshabilitar'}
                </button>
              </td>
              <td>
                <select
                  value={client.permissions}
                  onChange={(e) => updateClientPermissions(client.id, e.target.value, client.limit)}
                >
                  <option value="basic">Básico</option>
                  <option value="premium">Premium</option>
                </select>
              </td>
              <td>
                <input
                  type="number"
                  value={client.limit}
                  onChange={(e) => updateClientPermissions(client.id, client.permissions, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntityClientManagement;
