import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!password) {
      newErrors.password = 'Contraseña requerida';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        // Simulate successful login
        alert('¡Iniciando sesión!');
      }, 1500);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Iniciar sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="tu@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="••••••••"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.605 5.386 3.828 6.819a3.752 3.752 0 001.172 2.176 3.796 3.796 0 002.676-.543 3.58 3.58 0 002.176-1.172c2.122-1.433 3.828-3.777 3.828-6.819 0-1.094-.02-2.184-.06-3.272h4c.04.887.06 1.777.06 3.272 0 3.042-1.828 5.386-4.051 6.819a3.796 3.796 0 01-2.676 1.172 3.58 3.58 0 01-2.176-1.172 3.752 3.752 0 01-1.172-2.176c-1.433-2.122-3.777-3.828-6.819-3.828z"></path>
                </svg>
              ) : (
                <span>Iniciar sesión</span>
              )}
            </button>
            <div className="mt-6 text-center">
              <p className="text-gray-600">¿Olvidaste tu contraseña?</p>
              <p className="text-gray-600">Crear una cuenta</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
