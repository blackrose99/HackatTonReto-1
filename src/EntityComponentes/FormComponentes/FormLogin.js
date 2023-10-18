import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importa Link y useLocation


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
    <div>
     
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        <Link to="/" className="navbar-brand">
                  <h4 className="btn btn-primary">Cancelar</h4>
                </Link>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Login;
