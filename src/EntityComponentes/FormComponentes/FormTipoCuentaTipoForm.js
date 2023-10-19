import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import HeaderCliente from "../../EntityComponentes/Cliente/HeaderCliente";
import Footer from "../../UniversalCompontes/Footer";
import './FormTipoCuentaTipoForm.css';

const CombinedForm = () => {
  const [selectedAccountType, setSelectedAccountType] = useState('');
  const [selectedFormType, setSelectedFormType] = useState('');
  const history = useHistory(); // Get the history object

  const handleAccountTypeChange = (type) => {
    setSelectedAccountType(type);
  };

  const handleFormTypeChange = (type) => {
    setSelectedFormType(type);
  };

  const handleNextClick = () => {
    // Navigate to CustomForm and pass selected values as search params
    history.push(`/plantillas?accountType=${selectedAccountType}&formType=${selectedFormType}`);
  };

  return (
    <div>
      <HeaderCliente />
      <div className="container2">
        <h2 className="combined-form-title">Seleccione el Tipo de Cuenta y el Tipo de Formulario</h2>
        <div className="form-section col-lg">
          <label className="combined-form-label"><b>Selecciona el Tipo de Cuenta:</b></label>
          <br />
          <select
            className="combined-form-select"
            value={selectedAccountType}
            onChange={(e) => handleAccountTypeChange(e.target.value)}
          >
            <option value="">Seleccione un tipo de cuenta</option>
            {/* Account type options */}
          </select>
        </div>
        <div className="form-section">
          <label className="combined-form-label"><b>Selecciona el Tipo de Formulario:</b></label>
          <br />
          <select
            className="combined-form-select"
            value={selectedFormType}
            onChange={(e) => handleFormTypeChange(e.target.value)}
          >
            <option value="">Seleccione un tipo de formulario</option>
            {/* Form type options */}
          </select>
        </div>
        <button className="combined-form-button" onClick={handleNextClick}>Siguiente</button>
      </div>
      <Footer />
    </div>
  );
};

export default CombinedForm;
