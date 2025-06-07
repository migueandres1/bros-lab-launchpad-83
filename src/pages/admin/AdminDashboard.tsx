
import React from 'react';
import { Users, MessageSquare, DollarSign, TrendingUp, Activity, AlertCircle } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      icon: Users,
      label: 'Usuarios Totales',
      value: '1,247',
      change: '+12%',
      changeType: 'increase'
    },
    {
      icon: DollarSign,
      label: 'Ingresos este mes',
      value: '$24,580',
      change: '+8.2%',
      changeType: 'increase'
    },
    {
      icon: MessageSquare,
      label: 'Tickets Abiertos',
      value: '23',
      change: '-15%',
      changeType: 'decrease'
    },
    {
      icon: Activity,
      label: 'Chatbots Activos',
      value: '892',
      change: '+5.1%',
      changeType: 'increase'
    }
  ];

  const recentUsers = [
    { name: 'María González', email: 'maria@empresa.com', plan: 'BLT Starter', date: '2024-01-15' },
    { name: 'Carlos Ruiz', email: 'carlos@startup.co', plan: 'BLT Max', date: '2024-01-14' },
    { name: 'Ana López', email: 'ana@negocio.mx', plan: 'BLT Free', date: '2024-01-13' },
    { name: 'Roberto Silva', email: 'roberto@tech.ar', plan: 'BLT Starter', date: '2024-01-12' },
  ];

  const alerts = [
    { type: 'warning', message: 'Servidor de chatbots con alta carga', time: 'Hace 15 min' },
    { type: 'info', message: '5 nuevos tickets de soporte', time: 'Hace 1 hora' },
    { type: 'success', message: 'Backup completado exitosamente', time: 'Hace 2 horas' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blt-dark mb-2">
          Panel de Administración BLT
        </h1>
        <p className="text-gray-600">
          Vista general de la plataforma y métricas principales
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <Icon className="w-8 h-8 text-blt-neon" />
                <span className={`text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-blt-dark mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Users */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-blt-dark">Usuarios Recientes</h2>
            <button className="text-blt-neon hover:underline text-sm font-medium">
              Ver todos
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Usuario</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Plan</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Fecha</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.plan === 'BLT Max' ? 'bg-purple-100 text-purple-800' :
                        user.plan === 'BLT Starter' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {user.plan}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{user.date}</td>
                    <td className="py-3 px-4">
                      <button className="text-blt-neon hover:underline text-sm">Ver</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-blt-dark mb-6">Alertas del Sistema</h2>
          
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                alert.type === 'info' ? 'bg-blue-50 border-blue-400' :
                'bg-green-50 border-green-400'
              }`}>
                <div className="flex items-start">
                  <AlertCircle className={`w-5 h-5 mt-0.5 mr-3 ${
                    alert.type === 'warning' ? 'text-yellow-600' :
                    alert.type === 'info' ? 'text-blue-600' :
                    'text-green-600'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 text-center text-sm text-blt-neon hover:underline">
            Ver todas las alertas
          </button>
        </div>
      </div>

      {/* Revenue Chart Placeholder */}
      <div className="mt-8 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-blt-dark mb-6">Ingresos Mensuales</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Gráfico de ingresos se mostraría aquí</p>
            <p className="text-sm text-gray-400">Integración con Recharts disponible</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid md:grid-cols-4 gap-4">
        <button className="bg-blt-neon text-blt-dark p-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
          Backup Base de Datos
        </button>
        <button className="bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 transition-all">
          Enviar Comunicado
        </button>
        <button className="bg-purple-600 text-white p-4 rounded-lg font-semibold hover:bg-purple-700 transition-all">
          Generar Reporte
        </button>
        <button className="bg-gray-600 text-white p-4 rounded-lg font-semibold hover:bg-gray-700 transition-all">
          Configuración
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
