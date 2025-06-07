
import React from 'react';
import { Link } from 'react-router-dom';

const PublicHeader: React.FC = () => {
  return (
    <header className="bg-blt-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blt-dark">
              Bros Lab <span className="text-blt-neon">Tech</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blt-neon transition-colors font-medium">
              Inicio
            </a>
            <a href="#planes" className="text-gray-700 hover:text-blt-neon transition-colors font-medium">
              Planes
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blt-neon transition-colors font-medium">
              Preguntas Frecuentes
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-blt-neon transition-colors font-medium">
              Contacto
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-blt-neon transition-colors font-medium"
            >
              Iniciar Sesión
            </Link>
            <Link 
              to="/register" 
              className="bg-blt-neon text-blt-dark px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Empezar ahora
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
