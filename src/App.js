import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importar Home
import Home from "./UniversalCompontes/Home";

//Importar Formulario de pago con el codigo Qr
import FormQrPago from "./EntityComponentes/User/formQrPago";

//Importar el Componente que muestra la imformacion de un Cliente 
import ClientInfo from "./EntityComponentes/Cliente/Cliente";

//Importar el Componete que permite a la Entidad Admistrar los Cliente
import ClienteList from "./EntityComponentes/Entidad/clientesList";

//Importar formulario de tipo de cuenta y tipo de plantilla
import TypeFormTypeCount from "./EntityComponentes/FormComponentes/FormTipoCuentaTipoForm";

//Importar el Formulario Login
import FormLogin from "./EntityComponentes/FormComponentes/FormLogin";

//
import CodigoQr from "./EntityComponentes/User/CodigoQr";

//
import Plantila from "./EntityComponentes/FormComponentes/FormPlantila";
import { useState } from 'react'


function App() {
  const [localhost, setLocalhost] = useState("http://20.20.20.80:5000")
  const [accounts, setAccounts] = useState()
  const Setaccounts = (date) => {
    setAccounts(date)
  }
  return (
    <div id="borde">
      <BrowserRouter>
        <div className="container-fluid" id="borde">
          <Routes>
            {/* Ruta para cargar pagina de inico en la ruta / */}
            <Route path="/" element={<Home />} />
            
            {/* Ruta para ver cargar la pagina de adminstracion de la financiera  */}
            <Route path="/financiera" element={<clienteList/>} />

            {/* Ruta de lo que va a ver el usuario final para pagar con Qr */}
            <Route path="/form-pago/:id" element={ <FormQrPago/>} />

            
            <Route path="/user" element={<formQrPago/>} /> 
            <Route path="/entidad" element={<ClienteList/>}/> 

            {/* Rura para mostrar la imformacion de un cleinte */}
            <Route path="/cliente/:id" element={<ClientInfo localhost={localhost}/>} />

            {/* Ruta para llamar el formulario del cliente  */}
            <Route path="/login-cliente" element={<FormLogin />} />
            <Route path="/plantilla/:id" element={<Plantila localhost={localhost} accounts={accounts}/>} />

            {/* Ruta para mostrar el tipo de plantilla y tipo de cuenta */}
            <Route path="/form-tipo/:id" element={<TypeFormTypeCount localhost={localhost} Setaccounts={setAccounts} />}> </Route>
            

            <Route path="/qr" element={<CodigoQr/>}> </Route>


            

          </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
