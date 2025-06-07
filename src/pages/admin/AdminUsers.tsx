
import React, { useState } from 'react';
import { Users, Search, Filter, Edit, Pause, Play, Mail, Calendar, CreditCard } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const AdminUsers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [planFilter, setPlanFilter] = useState('todos');
  const [statusFilter, setStatusFilter] = useState('todos');

  // Datos de ejemplo - esto se conectará con Supabase más adelante
  const users = [
    {
      id: 1,
      name: 'María González',
      email: 'maria@empresa.com',
      plan: 'BLT Starter',
      status: 'activo',
      registrationDate: '2024-01-15',
      lastLogin: '2024-01-20',
      revenue: '$29'
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      email: 'carlos@startup.co',
      plan: 'BLT Max',
      status: 'activo',
      registrationDate: '2024-01-14',
      lastLogin: '2024-01-19',
      revenue: '$99'
    },
    {
      id: 3,
      name: 'Ana López',
      email: 'ana@negocio.mx',
      plan: 'BLT Free',
      status: 'suspendido',
      registrationDate: '2024-01-13',
      lastLogin: '2024-01-13',
      revenue: '$0'
    },
    {
      id: 4,
      name: 'Roberto Silva',
      email: 'roberto@tech.ar',
      plan: 'BLT Starter',
      status: 'activo',
      registrationDate: '2024-01-12',
      lastLogin: '2024-01-18',
      revenue: '$29'
    },
    {
      id: 5,
      name: 'Laura Mendoza',
      email: 'laura@digital.pe',
      plan: 'BLT Max',
      status: 'activo',
      registrationDate: '2024-01-10',
      lastLogin: '2024-01-17',
      revenue: '$99'
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlan = planFilter === 'todos' || user.plan === planFilter;
    const matchesStatus = statusFilter === 'todos' || user.status === statusFilter;
    
    return matchesSearch && matchesPlan && matchesStatus;
  });

  const getPlanBadgeColor = (plan: string) => {
    switch (plan) {
      case 'BLT Max':
        return 'bg-purple-100 text-purple-800';
      case 'BLT Starter':
        return 'bg-green-100 text-green-800';
      case 'BLT Free':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    return status === 'activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const handleSuspendUser = (userId: number) => {
    console.log('Suspender usuario:', userId);
    // Aquí se conectará con Supabase
  };

  const handleEditUser = (userId: number) => {
    console.log('Editar usuario:', userId);
    // Aquí se conectará con Supabase
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blt-dark mb-2">
          Gestión de Usuarios
        </h1>
        <p className="text-gray-600">
          Administrá todos los usuarios registrados en la plataforma BLT
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Usuarios</p>
                <p className="text-2xl font-bold text-blt-dark">1,247</p>
              </div>
              <Users className="w-8 h-8 text-blt-neon" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Activos</p>
                <p className="text-2xl font-bold text-green-600">1,156</p>
              </div>
              <Play className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Suspendidos</p>
                <p className="text-2xl font-bold text-red-600">91</p>
              </div>
              <Pause className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Nuevos (7 días)</p>
                <p className="text-2xl font-bold text-blue-600">23</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl">Filtros y Búsqueda</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar por nombre o email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={planFilter} onValueChange={setPlanFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los planes</SelectItem>
                <SelectItem value="BLT Free">BLT Free</SelectItem>
                <SelectItem value="BLT Starter">BLT Starter</SelectItem>
                <SelectItem value="BLT Max">BLT Max</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los estados</SelectItem>
                <SelectItem value="activo">Activos</SelectItem>
                <SelectItem value="suspendido">Suspendidos</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Exportar CSV
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Lista de Usuarios</CardTitle>
          <CardDescription>
            {filteredUsers.length} usuarios encontrados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Usuario</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Registro</TableHead>
                  <TableHead>Último Login</TableHead>
                  <TableHead>Ingresos</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {user.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPlanBadgeColor(user.plan)}`}>
                        {user.plan}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(user.status)}`}>
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">{user.registrationDate}</TableCell>
                    <TableCell className="text-sm text-gray-600">{user.lastLogin}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <CreditCard className="w-3 h-3 text-green-600" />
                        <span className="font-medium text-green-600">{user.revenue}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditUser(user.id)}
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSuspendUser(user.id)}
                          className={user.status === 'activo' ? 'text-red-600 hover:text-red-700' : 'text-green-600 hover:text-green-700'}
                        >
                          {user.status === 'activo' ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUsers;
