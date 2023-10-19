import React, { useState } from "react";
import { Link } from "react-router-dom";

const Formcontenplantilla = ({ Name, FormData, localhost, id }) => {
  const [formData, setFormData] = useState(FormData);
  const [name, setName] = useState(Name);
  const [precio, setPrecio] = useState("fixed");
  const [customPrice, setCustomPrice] = useState();
  const [inputData, setInputData] = useState({});
  const [expirationDateTime, setExpirationDateTime] = useState("");
  const [includeExpiration, setIncludeExpiration] = useState("No");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handlePriceTypeChange = (e) => {
    setPrecio(e.target.value);
  };

  const handleCustomPriceChange = (e) => {
    setCustomPrice(e.target.value);
  };

  const handleIncludeExpirationChange = (e) => {
    const value = e.target.value;
    const newExpirationDateTime = value === "No" ? "" : expirationDateTime;
    setIncludeExpiration(value);
    setExpirationDateTime(newExpirationDateTime);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Aquí puedes realizar las acciones necesarias con el archivo de imagen seleccionado
      console.log("Imagen seleccionada:", file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza acciones basadas en el tipo de formulario y el precio aquí.
    // Puedes generar un QR para el pago con la información recopilada.

    // Ejemplo: Generar un QR con la información seleccionada.
    const qrData = {
      clientName: formData.clientName,
      clientCuenta: formData.cuenta,
      accountBalance: formData.accountBalance,
      formType: formData.formType,
      priceType: precio,
      customPrice: precio === "fixed" ? customPrice : "Indefinido",
      includeExpiration: includeExpiration,
      expirationDateTime: expirationDateTime,
    };

    console.log("QR Data:", qrData);
  };

  return (
    <div className="container-fluid form-container">
      <div className="row">
        <div className="col-lg">
          <form onSubmit={handleSubmit} className="form-wrapper">
            <h2 className="form-title">Formulario {name}</h2>

            {formData &&
              formData.map((obj, index) => (
                <div key={index}>
                  <label className="form-label">
                    <b>{obj.Field.name}</b>
                  </label>
                  <input
                    type={obj.Field.type}
                    name={obj.Field.id}
                    value={inputData[obj.Field.id] || ""}
                    className="form-input"
                    onChange={handleInputChange}
                  />
                </div>
              ))}

            <div>
              <label className="form-label">
                <b>Seleccionar una imagen:</b>
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                className="form-input"
                onChange={handleImageChange}
              />
            </div>

            <div>
              <label className="form-label">
                <b>Tipo de Precio:</b>
              </label>
              <select
                value={precio}
                onChange={handlePriceTypeChange}
                required
                className="form-input center-select"
              >
                <option value="fixed">Fijo</option>
                <option value="indefinite">Indefinido</option>
              </select>
            </div>
            {precio === "fixed" && (
              <div>
                <label className="form-label">
                  <b>Precio Fijo:</b>
                </label>
                <input
                  type="number"
                  value={customPrice}
                  onChange={handleCustomPriceChange}
                  required
                  className="form-input"
                />
              </div>
            )}
            <div>
              <label className="form-label">
                <b>¿Desea incluir caducidad al QR?</b>
              </label>
              <select
                value={includeExpiration}
                onChange={handleIncludeExpirationChange}
                required
                className="form-input center-select"
              >
                <option value="Si">Si</option>
                <option value="No">No</option>
              </select>
            </div>
            {includeExpiration === "Si" && (
              <div>
                <label className="form-label">
                  <b>Fecha y Hora de Caducidad:</b>
                </label>
                <input
                  type="datetime-local"
                  value={expirationDateTime}
                  onChange={(e) => setExpirationDateTime(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
            )}

            <div className="center-button mt-3">
              <div type="submit" className="button" data-tooltip="Size: 20Mb">
                <div className="button-wrapper">
                  <div className="text">
                    {" "}
                    <Link to={"/qr"}>Generar QR</Link>
                  </div>
                  <span className="icon">
                    <Link to={"/qr"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="2em"
                        height="2em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                        ></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formcontenplantilla;
