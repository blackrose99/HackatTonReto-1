import React, { useState, useEffect } from 'react';
import Header from "../../UniversalCompontes/Header";
import Footer from "../../UniversalCompontes/Footer";
import './FormTipoCuentaTipoForm.css';
import { Link } from 'react-router-dom'; // Importa Link



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
  const handleNextClick = () => {
    // Realiza cualquier otra lógica necesaria aquí

    // Redirige al usuario a la página de plantilla ("/plantilla") cuando hace clic en "Siguiente"
<Link to="/plantilla">Siguiente</Link>
  };

  return (
    <div>
      <Header />
    <div class="container2 ">
      <h2 className="combined-form-title " >Seleccione el Tipo de Cuenta y el Tipo de Formulario</h2>
      <div class="form-section col-lg">
        <label className="combined-form-label"><b>Selecciona el Tipo de Cuenta:</b></label>
        <br></br>
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
      <div class="form-section">
        <label className="combined-form-label"><b> Selecciona el Tipo de Formulario:</b></label>
        <br></br>
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
      <Link to="/plantilla" className="combined-form-button">
          <h2 className='btn btn-info'>
          Siguiente
          </h2>
        </Link>
            </div>
    <Footer />
    </div>
  );
};

export default CombinedForm;