
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { CreditCard, Calendar, Zap, MessageSquare } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      icon: CreditCard,
      label: 'Plan Actual',
      value: 'BLT Starter',
      color: 'text-green-600'
    },
    {
      icon: Calendar,
      label: 'Próximo Cobro',
      value: '15 Enero',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      label: 'Chatbots Activos',
      value: '1 de 1',
      color: 'text-blt-neon'
    },
    {
      icon: MessageSquare,
      label: 'Mensajes este mes',
      value: '1,234',
      color: 'text-purple-600'
    }
  ];

  const recentActivity = [
    { action: 'Chatbot configurado', time: 'Hace 2 horas', status: 'success' },
    { action: 'Landing page actualizada', time: 'Hace 1 día', status: 'success' },
    { action: 'Pago procesado - $49', time: 'Hace 3 días', status: 'success' },
    { action: 'Ticket de soporte cerrado', time: 'Hace 1 semana', status: 'info' }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blt-dark mb-2">
          ¡Hola, {user?.name}! 👋
        </h1>
        <p className="text-gray-600">
          Acá está todo lo que está pasando con tu cuenta de BLT
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-blt-dark mb-4">Acciones Rápidas</h2>
          <div className="space-y-3">
            <button className="w-full text-left p-4 bg-blt-neon/10 hover:bg-blt-neon/20 rounded-lg transition-colors">
              <h3 className="font-semibold text-blt-dark">Configurar mi chatbot</h3>
              <p className="text-sm text-gray-600">Personaliza las respuestas automáticas</p>
            </button>
            <button className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <h3 className="font-semibold text-blue-700">Ver métricas</h3>
              <p className="text-sm text-gray-600">Chequea el rendimiento de tu bot</p>
            </button>
            <button className="w-full text-left p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <h3 className="font-semibold text-purple-700">Actualizar landing</h3>
              <p className="text-sm text-gray-600">Hace cambios en tu página</p>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-blt-dark mb-4">Actividad Reciente</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  activity.status === 'success' ? 'bg-green-500' : 
                  activity.status === 'info' ? 'bg-blue-500' : 'bg-gray-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-8 bg-gradient-to-r from-blt-dark to-purple-900 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">¿Necesitás ayuda?</h3>
            <p className="text-gray-300 mb-4">
              Nuestro equipo está disponible para ayudarte con cualquier duda
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-blt-neon text-blt-dark px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
              Chat en vivo
            </button>
            <button className="border border-blt-neon text-blt-neon px-4 py-2 rounded-lg font-semibold hover:bg-blt-neon hover:text-blt-dark transition-all">
              Ver guías
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
