import React, { useState, useEffect } from 'react';
import Header from "../../UniversalCompontes/Header";
import Footer from "../../UniversalCompontes/Footer";
import './FormTipoCuentaTipoForm.css';
import { Link, useParams } from 'react-router-dom'
import HeaderCliente from '../Cliente/HeaderCliente' // Importa Link


const CombinedForm = ({ localhost }) => {
  const [accountTypes, setAccountTypes] = useState([]);
  const [formTypes, setFormTypes] = useState([]);
  const [selectedAccountType, setSelectedAccountType] = useState(1);
  const [selectedFormType, setSelectedFormType] = useState('');
  const [clienteData, setClienteData] = useState()
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
            `${localhost}/api/users/${id}`
        );
        const data = await response.json();
        setAccountTypes(data.UsersAccounts);
        setClienteData(data);
      } catch (error) {
        console.error("Error al obtener datos del cliente", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
            `${localhost}/api/types-forms`
        );
        const data = await response.json();
        setFormTypes(data)
      } catch (error) {
        console.error("Error al obtener datos del cliente", error);
      }
    };
    fetchData();
  }, [id]);

  const handleAccountTypeChange = (e) => {
    setSelectedAccountType(e.target.value);
    window.localStorage.setItem('tipocuenta',selectedAccountType)
    console.log(selectedAccountType)
    // Actualiza el valor del atributo `value` antes de que se dispare el evento `onChange`

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
      <HeaderCliente data={clienteData}/>
        <div className="container2 ">
        <h2 className="combined-form-title " >Selecciona las siguientes opciones</h2>
        <div className="form-section col-lg">
        <label className="combined-form-label"><b>Selecciona tu cuenta:</b></label>
        <br></br>
          <select
              className="combined-form-select selecFromTipoCuentaTipoForm"
              value={selectedAccountType}
              onChange={handleAccountTypeChange}
              required
          >
            <option className='selecFromTipoCuentaTipoForm' value="1">Seleccione un tipo de cuenta</option>
            {accountTypes.map((account, index) => (
                <option key={index} value={account.Account.id}>
                  # {account.Account.id} | {account.Account.TypesAccount.name}
                </option>
            ))}
          </select>


          </div>
  <div className="form-section">
    <label className="combined-form-label "><b> Selecciona el Tipo de Formulario:</b></label>
    <br></br>
    <select
        className="combined-form-select selecFromTipoCuentaTipoForm"
        value={selectedFormType}
        onChange={(e) => handleFormTypeChange(e.target.value)}
    >
      <option className='selecFromTipoCuentaTipoForm' value="">Seleccione un tipo de formulario</option>
      {formTypes.map((form, index) => (
          <option key={index} value={form.id}>
            {form.name}
          </option>
      ))}
    </select>
  </div>
  <br/>
  <Link to="/plantilla/1" className="combined-form-button">
    <h2 className="btn btn-info btnSiguienteFormTipoCuentaTF">
      Siguiente
    </h2>
  </Link>

</div>
      <Footer />
    </div>
  );
};

export default CombinedForm;