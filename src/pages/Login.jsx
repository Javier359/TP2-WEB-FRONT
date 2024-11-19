import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Usar para redirigir después del login

    const handleLogin = async () => {
        if (!username || !password) {
            alert('Por favor, complete todos los campos');
            return;
        }

        setLoading(true); // Mostrar indicador de carga

        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            alert('Login exitoso');
            navigate('/'); // Redirigir a la página de inicio o dashboard
        } catch (error) {
            alert('Credenciales inválidas');
        } finally {
            setLoading(false); // Ocultar indicador de carga
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin} disabled={loading}>
                {loading ? 'Cargando...' : 'Iniciar sesión'}
            </button>
        </div>
    );
};

export default Login;
