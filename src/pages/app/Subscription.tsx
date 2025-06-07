
import React from 'react';
import { Check, Crown, Zap } from 'lucide-react';

const Subscription: React.FC = () => {
  const currentPlan = {
    name: 'BLT Starter',
    price: '$49',
    period: '/mes',
    nextBilling: '15 de Enero, 2024',
    features: [
      '1 chatbot personalizado',
      'Personalización básica',
      'Soporte por correo',
      'Dashboard de métricas básico',
      'Integración con redes sociales'
    ]
  };

  const availablePlans = [
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
      isCurrent: false,
      isPopular: false,
      buttonText: 'Cambiar a Free',
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
      isCurrent: true,
      isPopular: true,
      buttonText: 'Plan Actual',
      buttonStyle: 'bg-blt-neon text-blt-dark cursor-not-allowed'
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
      isCurrent: false,
      isPopular: false,
      buttonText: 'Mejorar Plan',
      buttonStyle: 'bg-blt-dark hover:bg-opacity-90'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blt-dark mb-2">
          Tu Suscripción
        </h1>
        <p className="text-gray-600">
          Gestiona tu plan y billing acá
        </p>
      </div>

      {/* Current Plan Status */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Crown className="w-6 h-6 text-blt-neon" />
            <h2 className="text-xl font-bold text-blt-dark">Plan Actual</h2>
          </div>
          <span className="bg-blt-neon text-blt-dark px-3 py-1 rounded-full text-sm font-semibold">
            Activo
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold text-blt-dark mb-2">
              {currentPlan.name}
            </h3>
            <div className="text-lg text-gray-600 mb-4">
              <span className="text-3xl font-bold text-blt-dark">{currentPlan.price}</span>
              {currentPlan.period}
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Próximo cobro: <span className="font-semibold">{currentPlan.nextBilling}</span>
            </p>
            
            <div className="flex space-x-3">
              <button className="bg-blt-neon text-blt-dark px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                Gestionar Pago
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Cancelar Plan
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-blt-dark mb-3">Lo que incluye:</h4>
            <ul className="space-y-2">
              {currentPlan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-4 h-4 text-blt-neon mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Usage Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-700">Chatbots</h3>
            <Zap className="w-5 h-5 text-blt-neon" />
          </div>
          <div className="text-2xl font-bold text-blt-dark">1 <span className="text-sm text-gray-500">de 1</span></div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-blt-neon h-2 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-700">Mensajes</h3>
            <Zap className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-blt-dark">1,234 <span className="text-sm text-gray-500">este mes</span></div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '62%' }}></div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-700">Soporte</h3>
            <Zap className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-blt-dark">Email <span className="text-sm text-gray-500">incluido</span></div>
          <div className="text-sm text-green-600 mt-2">
            ✓ Respuesta en 24hs
          </div>
        </div>
      </div>

      {/* Available Plans */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blt-dark mb-6">
          Cambiar o Mejorar Plan
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {availablePlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-sm border p-6 ${
                plan.isCurrent ? 'border-blt-neon ring-2 ring-blt-neon/20' : 'border-gray-200'
              } ${plan.isPopular && !plan.isCurrent ? 'border-blt-neon' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blt-neon text-blt-dark px-3 py-1 rounded-full text-xs font-bold">
                    Más Popular
                  </span>
                </div>
              )}

              {plan.isCurrent && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Plan Actual
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-blt-dark mb-2">{plan.name}</h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-blt-dark">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-4 h-4 text-blt-neon mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                disabled={plan.isCurrent}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all ${plan.buttonStyle} text-white`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Code Section */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-bold text-blt-dark mb-4">
          ¿Tenés un código promocional?
        </h3>
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Ingresá tu código"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blt-neon focus:border-blt-neon"
          />
          <button className="bg-blt-neon text-blt-dark px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
