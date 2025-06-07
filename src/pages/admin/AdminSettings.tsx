
import React, { useState } from 'react';
import { Settings, Building, Key, Mail, FileText, Save, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const AdminSettings: React.FC = () => {
  const [companySettings, setCompanySettings] = useState({
    companyName: 'Bros Lab Tech',
    companyEmail: 'hola@broslab.tech',
    supportEmail: 'soporte@broslab.tech',
    billingEmail: 'facturacion@broslab.tech',
    companyAddress: 'San Salvador, El Salvador',
    taxId: 'NRC-123456-7',
    phone: '+503 7926 3274'
  });

  const [apiSettings, setApiSettings] = useState({
    stripeApiKey: '',
    supabaseUrl: '',
    supabaseAnonKey: '',
    whatsappWebhook: '',
    emailWebhook: ''
  });

  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    newRegistrations: true,
    systemMessage: 'Bienvenido a Bros Lab Tech - Creamos tu presencia digital en 72 horas',
    footerText: '© 2024 Bros Lab Tech. Hecho con ❤️ en El Salvador.',
    maxUsersPerPlan: {
      free: 1000,
      starter: 5000,
      max: 10000
    }
  });

  const handleCompanyChange = (field: string, value: string) => {
    setCompanySettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleApiChange = (field: string, value: string) => {
    setApiSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSystemChange = (field: string, value: any) => {
    setSystemSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveSettings = () => {
    console.log('Guardando configuraciones...');
    // Aquí se conectará con Supabase para guardar las configuraciones
  };

  const handleTestConnection = (service: string) => {
    console.log(`Probando conexión con ${service}...`);
    // Aquí se probará la conexión con el servicio
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blt-dark mb-2">
          Configuración del Sistema
        </h1>
        <p className="text-gray-600">
          Administrá la configuración general de la plataforma BLT
        </p>
      </div>

      <div className="grid gap-8">
        {/* Company Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="w-5 h-5 text-blt-neon" />
              Información de la Empresa
            </CardTitle>
            <CardDescription>
              Datos generales de Bros Lab Tech para facturación y contacto
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Nombre de la Empresa</Label>
                <Input
                  id="companyName"
                  value={companySettings.companyName}
                  onChange={(e) => handleCompanyChange('companyName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="taxId">NRC / NIT</Label>
                <Input
                  id="taxId"
                  value={companySettings.taxId}
                  onChange={(e) => handleCompanyChange('taxId', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyEmail">Email Principal</Label>
                <Input
                  id="companyEmail"
                  type="email"
                  value={companySettings.companyEmail}
                  onChange={(e) => handleCompanyChange('companyEmail', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={companySettings.phone}
                  onChange={(e) => handleCompanyChange('phone', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="companyAddress">Dirección</Label>
              <Input
                id="companyAddress"
                value={companySettings.companyAddress}
                onChange={(e) => handleCompanyChange('companyAddress', e.target.value)}
              />
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="supportEmail">Email de Soporte</Label>
                <Input
                  id="supportEmail"
                  type="email"
                  value={companySettings.supportEmail}
                  onChange={(e) => handleCompanyChange('supportEmail', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="billingEmail">Email de Facturación</Label>
                <Input
                  id="billingEmail"
                  type="email"
                  value={companySettings.billingEmail}
                  onChange={(e) => handleCompanyChange('billingEmail', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Keys and Integrations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="w-5 h-5 text-blt-neon" />
              APIs e Integraciones
            </CardTitle>
            <CardDescription>
              Configurá las claves de API para servicios externos (Stripe, Supabase, etc.)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="stripeApiKey">Stripe API Key</Label>
                <div className="flex gap-2">
                  <Input
                    id="stripeApiKey"
                    type="password"
                    placeholder="sk_test_..."
                    value={apiSettings.stripeApiKey}
                    onChange={(e) => handleApiChange('stripeApiKey', e.target.value)}
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleTestConnection('Stripe')}
                  >
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div>
                <Label htmlFor="supabaseUrl">Supabase URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="supabaseUrl"
                    placeholder="https://xxx.supabase.co"
                    value={apiSettings.supabaseUrl}
                    onChange={(e) => handleApiChange('supabaseUrl', e.target.value)}
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleTestConnection('Supabase')}
                  >
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="supabaseAnonKey">Supabase Anon Key</Label>
              <Input
                id="supabaseAnonKey"
                type="password"
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                value={apiSettings.supabaseAnonKey}
                onChange={(e) => handleApiChange('supabaseAnonKey', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="whatsappWebhook">WhatsApp Webhook</Label>
                <Input
                  id="whatsappWebhook"
                  placeholder="https://api.whatsapp.com/webhook"
                  value={apiSettings.whatsappWebhook}
                  onChange={(e) => handleApiChange('whatsappWebhook', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="emailWebhook">Email Webhook</Label>
                <Input
                  id="emailWebhook"
                  placeholder="https://api.sendgrid.com/webhook"
                  value={apiSettings.emailWebhook}
                  onChange={(e) => handleApiChange('emailWebhook', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blt-neon" />
              Configuración del Sistema
            </CardTitle>
            <CardDescription>
              Mensajes del sistema, límites y configuraciones generales
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="systemMessage">Mensaje de Bienvenida</Label>
              <Input
                id="systemMessage"
                value={systemSettings.systemMessage}
                onChange={(e) => handleSystemChange('systemMessage', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="footerText">Texto del Footer</Label>
              <Input
                id="footerText"
                value={systemSettings.footerText}
                onChange={(e) => handleSystemChange('footerText', e.target.value)}
              />
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="maxUsersFree">Límite BLT Free</Label>
                <Input
                  id="maxUsersFree"
                  type="number"
                  value={systemSettings.maxUsersPerPlan.free}
                  onChange={(e) => handleSystemChange('maxUsersPerPlan', {
                    ...systemSettings.maxUsersPerPlan,
                    free: parseInt(e.target.value)
                  })}
                />
              </div>
              <div>
                <Label htmlFor="maxUsersStarter">Límite BLT Starter</Label>
                <Input
                  id="maxUsersStarter"
                  type="number"
                  value={systemSettings.maxUsersPerPlan.starter}
                  onChange={(e) => handleSystemChange('maxUsersPerPlan', {
                    ...systemSettings.maxUsersPerPlan,
                    starter: parseInt(e.target.value)
                  })}
                />
              </div>
              <div>
                <Label htmlFor="maxUsersMax">Límite BLT Max</Label>
                <Input
                  id="maxUsersMax"
                  type="number"
                  value={systemSettings.maxUsersPerPlan.max}
                  onChange={(e) => handleSystemChange('maxUsersPerPlan', {
                    ...systemSettings.maxUsersPerPlan,
                    max: parseInt(e.target.value)
                  })}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="maintenanceMode"
                  checked={systemSettings.maintenanceMode}
                  onChange={(e) => handleSystemChange('maintenanceMode', e.target.checked)}
                  className="w-4 h-4 text-blt-neon"
                />
                <Label htmlFor="maintenanceMode">Modo Mantenimiento</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newRegistrations"
                  checked={systemSettings.newRegistrations}
                  onChange={(e) => handleSystemChange('newRegistrations', e.target.checked)}
                  className="w-4 h-4 text-blt-neon"
                />
                <Label htmlFor="newRegistrations">Permitir Nuevos Registros</Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSaveSettings} className="bg-blt-neon text-blt-dark hover:bg-blt-neon/90">
            <Save className="w-4 h-4 mr-2" />
            Guardar Configuración
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
