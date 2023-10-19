import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link y useLocation
import "./FormLogin.css";




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza la validación y autenticación del usuario aquí.
    // Puedes hacer una solicitud al servidor o verificar en la base de datos.

    if (email === 'usuario@ejemplo.com' && password === 'contraseña123') {
      // Autenticación exitosa, redirige al panel del cliente u otra página.
      window.location.href = '/panel-de-cliente';
    } else {
      // Autenticación fallida, muestra un mensaje de error.
      setErrorMessage('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <div className='pageLogin'>
      <div  className='Login'>
      
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='login_containers' >
            <label  className='login_containers_label'>Correo Electrónico</label>
          </div> 
          <div  className='login_containers'> 
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='login_containers_input'
            />
          </div>
          <div className='login_containers'>
            <label className='login_containers_label'>Contraseña</label>
          </div>  
          <div className='login_containers'>  
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='login_containers_input'
            />
          </div>
          <div className='login_containers_button'>
          
            <button type="submit" >
              <Link to="/cliente/1"  className='linkbutn'>Sign In</Link>
            </button>
            
          </div>
          
          <div className='login_containers'>  
          <Link to="/" >
            <h4 className="volver">Volver</h4>

            </Link>
          </div>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
