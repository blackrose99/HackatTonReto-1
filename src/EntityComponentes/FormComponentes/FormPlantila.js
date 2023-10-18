import React, { useState } from 'react';

const CustomForm = () => {
  const [formData, setFormData] = useState({
    clientName: 'Nombre del Cliente',
    accountBalance: 1000, // Valor predeterminado del saldo de la cuenta del cliente
    formType: '', // Tipo de formulario seleccionado
    priceType: 'fixed', // Valor predeterminado de precio fijo
    customPrice: '', // Precio personalizado (si elige precio fijo)
  });

  const handleFormTypeChange = (e) => {
    setFormData({ ...formData, formType: e.target.value });
  };

  const handlePriceTypeChange = (e) => {
    setFormData({ ...formData, priceType: e.target.value, customPrice: '' });
  };

  const handleCustomPriceChange = (e) => {
    setFormData({ ...formData, customPrice: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza acciones basadas en el tipo de formulario y el precio aquí.
    // Puedes generar un QR para el pago con la información recopilada.

    // Ejemplo: Generar un QR con la información seleccionada.
    const qrData = {
      clientName: formData.clientName,
      accountBalance: formData.accountBalance,
      formType: formData.formType,
      priceType: formData.priceType,
      customPrice: formData.priceType === 'fixed' ? formData.customPrice : 'Indefinido',
    };

    console.log('QR Data:', qrData);
  };

  return (
    <div>
      <h2>Formulario Personalizado</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Cliente:</label>
          <input type="text" value={formData.clientName} readOnly />
        </div>
        <div>
          <label>Saldo de la Cuenta:</label>
          <input type="number" value={formData.accountBalance} readOnly />
        </div>
        <div>
          <label>Tipo de Formulario:</label>
          <select value={formData.formType} onChange={handleFormTypeChange} required>
            <option value="">Seleccione un tipo de formulario</option>
            <option value="inmobiliaria">Inmobiliaria</option>
            <option value="personal">Personal</option>
            {/* Agrega más tipos de formulario según sea necesario */}
          </select>
        </div>
        <div>
          <label>Tipo de Precio:</label>
          <select value={formData.priceType} onChange={handlePriceTypeChange} required>
            <option value="fixed">Fijo</option>
            <option value="indefinite">Indefinido</option>
          </select>
        </div>
        {formData.priceType === 'fixed' && (
          <div>
            <label>Precio Fijo:</label>
            <input
              type="number"
              value={formData.customPrice}
              onChange={handleCustomPriceChange}
              required
            />
          </div>
        )}
        <button type="submit">Generar QR</button>
      </form>
    </div>
  );
};

export default CustomForm;
