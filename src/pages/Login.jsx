import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';

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
        <div className='p-3' >
            <h2>Login</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                className='m-1' 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className='m-1' 
            />
            <button onClick={handleLogin} disabled={loading}>
                {loading ? 'Cargando...' : 'Iniciar sesión'}
            </button>
            <p className='mt-4'>Aun no tenes acceso?</p>
            <Link to="/register" className="div_btn">
            Registrarse
            </Link>
            
        </div>
    );
};

export default Login;
