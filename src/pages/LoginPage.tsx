
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/app';

  useEffect(() => {
    if (user) {
      navigate(user.isAdmin ? '/admin' : '/app', { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError('Email o contraseña incorrectos');
      }
    } catch (err) {
      setError('Error al iniciar sesión. Intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blt-dark via-blt-dark to-purple-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="text-3xl font-bold text-white">
            Bros Lab <span className="text-blt-neon">Tech</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-white">
            Iniciá sesión en tu cuenta
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            ¿No tenés cuenta?{' '}
            <Link to="/register" className="text-blt-neon hover:underline font-medium">
              Registrate acá
            </Link>
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          )}

          {/* Demo credentials info */}
          <div className="mb-6 p-4 bg-blt-neon/10 border border-blt-neon/30 rounded-lg">
            <h3 className="text-sm font-semibold text-blt-dark mb-2">Usuarios de prueba:</h3>
            <div className="text-xs text-gray-600 space-y-1">
              <div>👨‍💼 Admin: admin@broslab.tech / admin123</div>
              <div>👤 Usuario: user@test.com / user123</div>
              <div>🧪 Demo: demo@broslab.tech / demo123</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blt-neon focus:border-blt-neon"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blt-neon focus:border-blt-neon pr-10"
                  placeholder="Tu contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blt-neon focus:ring-blt-neon border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-blt-neon hover:underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-blt-dark bg-blt-neon hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blt-neon disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-gray-600 hover:text-blt-neon">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
