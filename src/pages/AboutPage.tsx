
import React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '@/components/layout/PublicHeader';
import { ArrowLeft, Target, Eye, Users, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blt-dark mb-4">
            Nosotros
          </h1>
          <p className="text-lg text-gray-600">
            <strong>Bros Lab Tech</strong> - Tus cheros nerds de confianza
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          
          {/* Misión */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blt-neon rounded-full p-3 mr-4">
                <Target className="w-6 h-6 text-blt-dark" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-blt-dark">
                🚀 Misión
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Crear soluciones digitales accesibles, rápidas y sin complicaciones técnicas para emprendedores y negocios que quieren empezar a vender <strong>YA</strong>.
            </p>
          </section>

          {/* Visión */}
          <section className="bg-blt-gray rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blt-dark rounded-full p-3 mr-4">
                <Eye className="w-6 h-6 text-blt-neon" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-blt-dark">
                👁️ Visión
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Ser el estudio tech más confiable y relajado de LATAM, democratizando el acceso a tecnología funcional y escalable, hasta convertirnos en una plataforma SaaS automatizada que impulse negocios desde su primer cliente hasta su expansión global.
            </p>
          </section>

          {/* ¿Quiénes somos? */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blt-neon rounded-full p-3 mr-4">
                <Users className="w-6 h-6 text-blt-dark" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-blt-dark">
                🤝 ¿Quiénes somos?
              </h2>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                Somos tus <strong>cheros nerds</strong> de confianza. No usamos palabras rimbombantes ni estrategias enredadas: creamos landing pages, bots con IA y herramientas digitales con lo justo, lo necesario y <strong>un toque de magia tecnológica</strong>.
              </p>
              <p>
                Nacimos en El Salvador, pero soñamos en grande.
              </p>
              <p>
                Si emprendés, te entendemos.<br />
                Si tenés prisa, te resolvemos.<br />
                Y si no sabés por dónde empezar, te guiamos.
              </p>
            </div>
          </section>

          {/* Contacto */}
          <section className="bg-gradient-to-br from-blt-dark to-purple-900 rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blt-neon rounded-full p-3 mr-4">
                <Mail className="w-6 h-6 text-blt-dark" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                📫 Contacto
              </h2>
            </div>
            <div className="space-y-4 text-lg">
              <div>
                <p className="mb-2">Soporte:</p>
                <a 
                  href="mailto:support@broslab.tech"
                  className="text-blt-neon hover:text-white transition-colors font-semibold"
                >
                  support@broslab.tech
                </a>
              </div>
              <div>
                <p className="mb-2">Ventas:</p>
                <a 
                  href="mailto:sales@broslab.tech"
                  className="text-blt-neon hover:text-white transition-colors font-semibold"
                >
                  sales@broslab.tech
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            ¿Listo para empezar tu proyecto?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-blt-neon text-blt-dark px-8 py-4 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl"
            >
              Empezar ahora
            </Link>
            <Link
              to="/#contacto"
              className="border-2 border-blt-dark text-blt-dark px-8 py-4 rounded-lg text-lg font-bold hover:bg-blt-dark hover:text-white transition-all"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
