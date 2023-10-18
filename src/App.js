import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importar Home
import Home from "./UniversalCompontes/Home";

//Importar Formulario de pago con el codigo Qr
import formQrPago from "./EntityComponentes/User/formQrPago";



function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div className="container">
          <Routes>
            {/* Ruta para cargar pagina de inico en la ruta / */}
            <Route path="/" element={<Home />} />

            {/* Ruta de lo que va a ver el usuario final para pagar con Qr */}
            {/* <Route path="/user" element={<formQrPago/>} /> */}

          </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
