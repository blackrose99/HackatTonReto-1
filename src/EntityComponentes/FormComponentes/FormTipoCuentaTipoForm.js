import React, { useState, useEffect } from 'react';
import Header from "../../UniversalCompontes/Header";
import Footer from "../../UniversalCompontes/Footer";
import './FormTipoCuentaTipoForm.css';
import { Link, useParams } from 'react-router-dom'
import HeaderCliente from '../Cliente/HeaderCliente' // Importa Link



const CombinedForm = ({ localhost }) => {
  const [accountTypes, setAccountTypes] = useState([]);
  const [formTypes, setFormTypes] = useState([]);
  const [selectedAccountType, setSelectedAccountType] = useState('');
  const [selectedFormType, setSelectedFormType] = useState('');
  const [cuentaData, setCuentaData] = useState()
  const { id } = useParams();


  // Simula obtener los tipos de cuentas desde la base de datos o una API.
  // Reemplaza esto con tu lógica real para obtener los tipos de cuentas.
  useEffect(() => {
    fetch(localhost+'/api/users/' + id)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setCuentaData(data)

        })
    setAccountTypes(cuentaData.UsersAccounts.map

      )
  }, [id])



  // Simula obtener los tipos de formularios desde la base de datos o una API.
  // Reemplaza esto con tu lógica real para obtener los tipos de formularios.
  useEffect(() => {
    const formTypesData = [
      { id: 1, name: 'Inmobiliaria' },
      { id: 2, name: 'Personal' },
      { id: 3, name: 'Establecimiento' }
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
      <HeaderCliente />
    <div className="container2 ">
      <h2 className="combined-form-title " >Seleccione el Tipo de Cuenta y el Tipo de Formulario</h2>
      <div className="form-section col-lg">
        <label className="combined-form-label"><b>Selecciona el Tipo de Cuenta:</b></label>
        <br></br>
        <select
            className="combined-form-select"
            value={selectedAccountType}
            onChange={(e) => handleAccountTypeChange(e.target.value)}
        >
          <option value="">Seleccione un tipo de cuenta</option>
            {cuentaData && cuentaData.UsersAccounts.map((Account, index) => (
            <option key={index} value={Account.id}>
                {Account.TypesAccount ? Account.TypesAccount.name : "Nombre no disponible"}
            </option>
            ))}
        </select>


      </div>
      <div className="form-section">
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