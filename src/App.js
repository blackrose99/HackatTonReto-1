import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importar Home
import Home from "./UniversalCompontes/Home";

//Importar Formulario de pago con el codigo Qr
import formQrPago from "./EntityComponentes/User/formQrPago";

//Importar el Componente que muestra la imformacion de un Cliente 
import ClientInfo from "./EntityComponentes/Cliente/Cliente";

//Importar el Componete que permite a la Entidad Admistrar los Cliente
import clienteList from "./EntityComponentes/Entidad/clientesList";
//Importar formulario de tipo de cuenta y tipo de plantilla
import TypeFormTypeCount from "./EntityComponentes/FormComponentes/FormTipoCuentaTipoForm";
//Importar el Formulario Login
import FormLogin from "./EntityComponentes/FormComponentes/FormLogin";
import Plantila from "./EntityComponentes/FormComponentes/FormPlantila";

function App() {
  return (
    <div className="" id="borde">
      <BrowserRouter>
        <div class="container-fluid" id="borde">
          <Routes>
            {/* Ruta para cargar pagina de inico en la ruta / */}
            <Route path="/" element={<Home />} />
            
            {/* Ruta para ver cargar la pagina de adminstracion de la financiera  */}
            <Route path="/financiera" element={<clienteList/>} />

            {/* Ruta de lo que va a ver el usuario final para pagar con Qr */}
            <Route path="/pago" element={ <formQrPago/>} />

            
            {/* <Route path="/user" element={<formQrPago/>} /> */}

            {/* Rura para mostrar la imformacion de un cleinte */}
            <Route path="/cliente/:id" element={<ClientInfo />} />

            {/* Ruta del componente Cliente */}

            {/* Ruta para llamar el formulario del cliente  */}
            <Route path="/login-cliente" element={<FormLogin />} />
            <Route path="/plantilla" element={<Plantila/>} />

            {/* Ruta para mostrar el tipo de plantilla y tipo de cuenta */}
            <Route path="/form-tipo" element={<TypeFormTypeCount/>}> </Route>
            

            

          </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
