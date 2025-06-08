
import React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '@/components/layout/PublicHeader';
import { Mail, ArrowLeft } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blt-white">
      <PublicHeader />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to home link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-blt-dark hover:text-blt-neon transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blt-dark mb-4">
            Política de Privacidad
          </h1>
          <p className="text-lg text-gray-600">
            <strong>Bros Lab Tech</strong>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Última actualización: junio 2025
          </p>
        </div>

        {/* Privacy policy content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Podemos recopilar la siguiente información cuando completás formularios o interactuás con nuestros servicios:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Nombre, correo electrónico y teléfono</li>
              <li>Información de tu negocio para generar contenido personalizado</li>
              <li>Datos de navegación en nuestro sitio (mediante cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">2. Uso de la Información</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos tu información para:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Crear sitios web o bots adaptados a tus necesidades</li>
              <li>Comunicarnos sobre tus proyectos</li>
              <li>Mejorar nuestro servicio y experiencia de usuario</li>
              <li>Fines de marketing propios (nunca compartimos tu info con terceros)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">3. Protección de Datos</h2>
            <p className="text-gray-700 leading-relaxed">
              Tu información es almacenada en plataformas seguras. No compartimos tus datos con terceros, salvo que sea requerido por ley.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">4. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Usamos cookies para entender cómo navegás por nuestra web y mejorar tu experiencia. Podés desactivarlas desde la configuración de tu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">5. Derechos del Usuario</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Podés solicitar en cualquier momento:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Acceso a tus datos</li>
              <li>Modificación o eliminación de tu información</li>
              <li>Cese de envíos de marketing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Escribinos a <strong>support@broslab.tech</strong> para ejercer cualquiera de estos derechos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">6. Cambios en esta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              BLT se reserva el derecho de modificar esta política en cualquier momento. Se recomienda revisarla periódicamente.
            </p>
          </section>

          {/* Contact section */}
          <section className="bg-blt-gray rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-blt-dark mb-4">Contacto</h2>
            <p className="text-gray-700 mb-4">
              Si tenés dudas sobre esta política, escribinos a:
            </p>
            <a 
              href="mailto:support@broslab.tech"
              className="inline-flex items-center bg-blt-neon text-blt-dark px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              <Mail className="w-4 h-4 mr-2" />
              support@broslab.tech
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
