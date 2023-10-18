import React, { useState } from "react";

const CustomForm = () => {
  const [formData, setFormData] = useState({
    clientName: "Nombre del Cliente",
    cuenta: "Ahorro",
    accountBalance: 1000, // Valor predeterminado del saldo de la cuenta del cliente
    formType: "", // Tipo de formulario seleccionado
    priceType: "fixed", // Valor predeterminado de precio fijo
    customPrice: "", // Precio personalizado (si elige precio fijo)
  });

  const handleFormTypeChange = (e) => {
    setFormData({ ...formData, formType: e.target.value });
  };

  const handlePriceTypeChange = (e) => {
    setFormData({ ...formData, priceType: e.target.value, customPrice: "" });
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
      clientName: formData.cuenta,
      accountBalance: formData.accountBalance,
      formType: formData.formType,
      priceType: formData.priceType,
      customPrice:
        formData.priceType === "fixed" ? formData.customPrice : "Indefinido",
    };

    console.log("QR Data:", qrData);
  };

  return (
    <div>
      <h2>Formulario Personalizado</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Cliente: {formData.clientName}</label>
        </div>
        <div>
          <label> Tipo de Cuenta: {formData.cuenta}</label>
        </div>
        <div>
          <label>Saldo de la Cuenta: {formData.accountBalance}</label>
        </div>

        <div>
          {/* este cambia dependiendo del tipo de plantilla si es negocio 
          le pide que digite el nombre de su negocio, si es personal no pide nada 
          si es inmoviliaria le pide el nombre de la emoresa  */}

          <label>Nombre Del Qr</label>
          <input type="text" name=""></input>
        </div>
        <div>
          {/* pide direccion dependiento del tipo de formulario si es personal no pide */}
          <label>Direccion</label>
          <input type="text" name=""></input>
        </div>

        <div>
          <label for="imagen">Selecciona una imagen:</label>
          <input type="file" id="imagen" name="imagen" accept="image/*"></input>
        </div>
        <div>
          <label>Tipo de Precio:</label>
          <select
            value={formData.priceType}
            onChange={handlePriceTypeChange}
            required
          >
            <option value="fixed">Fijo</option>
            <option value="indefinite">Indefinido</option>
          </select>
        </div>
        {formData.priceType === "fixed" && (
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
