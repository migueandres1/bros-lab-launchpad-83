
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  User, 
  CreditCard, 
  Receipt, 
  HelpCircle, 
  Shield, 
  LogOut,
  Settings,
  Users,
  BarChart3,
  MessageSquare
} from 'lucide-react';

const AppSidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const userMenuItems = [
    { path: '/app', icon: User, label: 'Mi Cuenta' },
    { path: '/app/subscription', icon: CreditCard, label: 'Suscripción' },
    { path: '/app/billing', icon: Receipt, label: 'Facturación' },
    { path: '/app/support', icon: HelpCircle, label: 'Soporte' },
    { path: '/app/privacy', icon: Shield, label: 'Privacidad' },
  ];

  const adminMenuItems = [
    { path: '/admin', icon: BarChart3, label: 'Dashboard' },
    { path: '/admin/users', icon: Users, label: 'Usuarios' },
    { path: '/admin/support', icon: MessageSquare, label: 'Tickets' },
    { path: '/admin/settings', icon: Settings, label: 'Configuración' },
  ];

  const menuItems = user?.isAdmin ? adminMenuItems : userMenuItems;

  return (
    <div className="bg-blt-dark text-blt-white w-64 min-h-screen flex flex-col">
      <div className="p-6 border-b border-blt-neon/20">
        <h2 className="text-xl font-bold">
          Bros Lab <span className="text-blt-neon">Tech</span>
        </h2>
        <p className="text-sm text-gray-300 mt-1">
          {user?.isAdmin ? 'Panel de Admin' : 'Mi Panel'}
        </p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'bg-blt-neon text-blt-dark font-semibold'
                      : 'hover:bg-blt-neon/10 hover:text-blt-neon'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-blt-neon/20">
        <div className="mb-4">
          <p className="text-sm text-gray-300">Conectado como:</p>
          <p className="font-medium text-blt-neon">{user?.name}</p>
          <p className="text-xs text-gray-400">{user?.email}</p>
        </div>
        <button
          onClick={logout}
          className="flex items-center space-x-3 px-4 py-3 w-full rounded-lg hover:bg-red-600/20 hover:text-red-400 transition-all"
        >
          <LogOut size={20} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
};

export default AppSidebar;
