
import React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '@/components/layout/PublicHeader';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Check, Zap, MessageCircle, Smartphone } from 'lucide-react';

const LandingPage: React.FC = () => {
  const plans = [
    {
      name: 'BLT Free',
      price: 'Gratis',
      period: 'para siempre',
      description: 'Perfecto para probar nuestros servicios',
      features: [
        'Acceso básico a la plataforma',
        'Soporte por email',
        'Recursos limitados',
        'Sin compromiso'
      ],
      isPopular: false,
      buttonText: 'Empezar Gratis',
      buttonStyle: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'BLT Starter',
      price: '$49',
      period: '/mes',
      description: 'Ideal para emprendedores que recién arrancan',
      features: [
        '1 chatbot personalizado',
        'Personalización básica',
        'Soporte por correo',
        'Dashboard de métricas básico',
        'Integración con redes sociales'
      ],
      isPopular: true,
      buttonText: 'Empezar ahora',
      buttonStyle: 'bg-blt-neon text-blt-dark hover:bg-opacity-90'
    },
    {
      name: 'BLT Max',
      price: '$99',
      period: '/mes',
      description: 'Para negocios que van en serio',
      features: [
        'Hasta 3 chatbots',
        'Estadísticas avanzadas',
        'Integración con WhatsApp',
        'Soporte prioritario',
        'Personalización completa',
        'Analytics en tiempo real'
      ],
      isPopular: false,
      buttonText: 'Elegir Pro',
      buttonStyle: 'bg-blt-dark hover:bg-opacity-90'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Llenás el formulario',
      description: 'Nos contás qué necesitas para tu negocio. Sin tecnicismos raros.',
      icon: MessageCircle
    },
    {
      number: '02',
      title: 'Nosotros lo construimos',
      description: 'En 72 horas max tenés tu landing y chatbot listos para vender.',
      icon: Zap
    },
    {
      number: '03',
      title: 'Vos lanzás tu negocio',
      description: 'Solo te enfocás en vender. Nosotros nos encargamos de lo técnico.',
      icon: Smartphone
    }
  ];

  return (
    <div className="min-h-screen bg-blt-white">
      <PublicHeader />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-blt-dark via-blt-dark to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Creamos <span className="text-blt-neon blt-text-glow">landing pages</span> y{' '}
              <span className="text-blt-neon blt-text-glow">chatbots con IA</span> en 72 horas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Para negocios que necesitan vender <strong>YA</strong>, sin complicaciones técnicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/register"
                className="bg-blt-neon text-blt-dark px-8 py-4 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl"
              >
                Empezar ahora
              </Link>
              <a
                href="#planes"
                className="border-2 border-blt-neon text-blt-neon px-8 py-4 rounded-lg text-lg font-bold hover:bg-blt-neon hover:text-blt-dark transition-all"
              >
                Ver Planes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-blt-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blt-dark mb-4">
              Cómo funciona (súper fácil)
            </h2>
            <p className="text-xl text-gray-600">
              En 3 pasos simples tenés tu negocio online funcionando
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blt-neon text-blt-dark w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl">
                    {step.number}
                  </div>
                  <Icon className="w-12 h-12 mx-auto mb-4 text-blt-dark" />
                  <h3 className="text-2xl font-bold text-blt-dark mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blt-dark mb-4">
              Planes que se adaptan a tu bolsillo
            </h2>
            <p className="text-xl text-gray-600">
              Elegí el que mejor vaya con tu negocio. Siempre podés cambiar después.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  plan.isPopular ? 'ring-4 ring-blt-neon transform scale-105' : ''
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blt-neon text-blt-dark px-4 py-2 rounded-full text-sm font-bold">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-blt-dark mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blt-dark">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-blt-neon mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/register"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all ${plan.buttonStyle} text-white`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-blt-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blt-dark mb-4">
              Preguntas que nos hacen seguido
            </h2>
            <p className="text-xl text-gray-600">
              Respondemos las dudas más comunes de nuestros clientes
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-blt-dark mb-3">
                ¿Realmente pueden hacerlo en 72 horas?
              </h3>
              <p className="text-gray-600">
                Sí, ese es nuestro compromiso. Si no cumplimos, te devolvemos la plata. Simple.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-blt-dark mb-3">
                ¿Qué pasa si no me gusta el resultado?
              </h3>
              <p className="text-gray-600">
                Tenés 30 días para pedir cambios sin costo extra. Queremos que quedes 100% satisfecho.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-blt-dark mb-3">
                ¿Necesito conocimientos técnicos?
              </h3>
              <p className="text-gray-600">
                Para nada. Vos solo nos decís qué querés y nosotros nos encargamos de todo lo técnico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blt-dark mb-4">
            ¿Tenés alguna duda?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Mandanos un mensaje y te respondemos al toque
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/50379263274"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center justify-center"
            >
              <MessageCircle className="mr-2" />
              WhatsApp
            </a>
            <a
              href="https://instagram.com/broslab.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-600 transition-all"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blt-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Bros Lab <span className="text-blt-neon">Tech</span>
              </h3>
              <p className="text-gray-300">
                Creamos landing pages y chatbots con IA para negocios que necesitan vender YA.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Landing Pages</li>
                <li>Chatbots con IA</li>
                <li>Automatización</li>
                <li>Soporte 24/7</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blt-neon">Nosotros</a></li>
                <li><a href="#" className="hover:text-blt-neon">Blog</a></li>
                <li><a href="#" className="hover:text-blt-neon">Carreras</a></li>
                <li><a href="#" className="hover:text-blt-neon">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blt-neon">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-blt-neon">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-blt-neon">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Bros Lab Tech. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
