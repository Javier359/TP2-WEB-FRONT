// Register.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
// import "../style/register.css"; 

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Para manejar los errores
  const [successMessage, setSuccessMessage] = useState(""); // Para manejar el mensaje de éxito
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos
    setSuccessMessage(""); // Limpiar mensaje de éxito

    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", {
        username,
        password,
      });

      if (response.data.success) {
        // Si el registro fue exitoso, mostrar el mensaje de éxito y redirigir
        setSuccessMessage("Registro exitoso. Redirigiendo al login...");
        setTimeout(() => {
          navigate("/"); 
        }, 2000); 
      }
    } catch (err) {
      setError(err.response?.data?.error || "Hubo un error al registrar el usuario.");
    }
  };

  return (
    <div className="form-container d-flex flex-column">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div className="d-flex align-items-center p-2">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="d-flex align-items-center p-2">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="p-2">
        {error && <p className="errorText">{error}</p>} 
        {successMessage && <p className="successText">{successMessage}</p>} 
        <button type="submit">Registrarse</button>
        </div>
      </form>
      <a href="/login" className="register-link">¿Ya tienes una cuenta? Inicia sesión</a> 
    </div>
  );
};

export default Register;
