import React, { useState, useEffect } from 'react';
import './FormTipoCuentaTipoForm.css';
const CombinedForm = () => {
  const [accountTypes, setAccountTypes] = useState([]);
  const [formTypes, setFormTypes] = useState([]);
  const [selectedAccountType, setSelectedAccountType] = useState('');
  const [selectedFormType, setSelectedFormType] = useState('');

  // Simula obtener los tipos de cuentas desde la base de datos o una API.
  // Reemplaza esto con tu lógica real para obtener los tipos de cuentas.
  useEffect(() => {
    const accountTypesData = [
      { id: 1, name: 'Ahorro' },
      { id: 2, name: 'Corriente' },
      // Agregar más tipos de cuentas según sea necesario
    ];

    setAccountTypes(accountTypesData);
  }, []);

  // Simula obtener los tipos de formularios desde la base de datos o una API.
  // Reemplaza esto con tu lógica real para obtener los tipos de formularios.
  useEffect(() => {
    const formTypesData = [
      { id: 1, name: 'Inmobiliaria' },
      { id: 2, name: 'Personal' },
      // Agregar más tipos de formularios según sea necesario
    ];

    setFormTypes(formTypesData);
  }, []);

  const handleAccountTypeChange = (type) => {
    setSelectedAccountType(type);
  };

  const handleFormTypeChange = (type) => {
    setSelectedFormType(type);
  };

  return (
    <div className="combined-form-container">
    <h2 className="combined-form-title">Seleccione el Tipo de Cuenta y el Tipo de Formulario</h2>
    <div>
      <label className="combined-form-label">Selecciona el Tipo de Cuenta:</label>
      <select
        className="combined-form-select"
        value={selectedAccountType}
        onChange={(e) => handleAccountTypeChange(e.target.value)}
      >
        <option value="">Seleccione un tipo de cuenta</option>
        {accountTypes.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
    <div>
      <label className="combined-form-label">Selecciona el Tipo de Formulario:</label>
      <select
        className="combined-form-select"
        value={selectedFormType}
        onChange={(e) => handleFormTypeChange(e.target.value)}
      >
        <option value="">Seleccione un tipo de formulario</option>
        {formTypes.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
    {/* Resto del contenido del formulario */}
    <button className="combined-form-button">Siguiente</button>
  </div>
  
  );
};

export default CombinedForm;
