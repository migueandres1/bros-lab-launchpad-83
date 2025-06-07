
import React, { useState } from 'react';
import { 
  Shield, 
  Download, 
  Trash2, 
  Eye, 
  EyeOff,
  FileText,
  Settings,
  AlertTriangle,
  CheckCircle,
  Mail,
  Smartphone
} from 'lucide-react';

const Privacy: React.FC = () => {
  const [marketingConsent, setMarketingConsent] = useState(true);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [showDataPreview, setShowDataPreview] = useState(false);

  const privacySettings = {
    email: true,
    sms: false,
    push: true,
    newsletter: true
  };

  const [settings, setSettings] = useState(privacySettings);

  const userData = {
    personalInfo: {
      nombre: 'Juan Pérez',
      email: 'juan@email.com',
      telefono: '+503 7926 3274',
      fechaRegistro: '2024-01-15'
    },
    usage: {
      chatbotsCreados: 2,
      paginasVistas: 45,
      ultimaConexion: '2024-01-20'
    },
    preferences: {
      idioma: 'Español',
      zona: 'America/El_Salvador',
      tema: 'Claro'
    }
  };

  const handleExportData = () => {
    // Simular descarga de datos
    const dataStr = JSON.stringify(userData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mis-datos-blt.json';
    link.click();
  };

  const handleDeleteAccount = () => {
    if (confirm('¿Estás seguro de que querés eliminar tu cuenta? Esta acción no se puede deshacer.')) {
      alert('Hemos recibido tu solicitud. Te contactaremos en 24-48 horas para confirmar la eliminación.');
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blt-dark mb-2">
          Privacidad y Datos
        </h1>
        <p className="text-gray-600">
          Controlá tu información personal y configurá tus preferencias de privacidad
        </p>
      </div>

      {/* Data Export */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-blt-dark mb-4 flex items-center">
          <Download className="mr-2 text-blt-neon" size={24} />
          Exportar Mis Datos
        </h2>
        <p className="text-gray-600 mb-4">
          Podés descargar una copia de toda la información que tenemos sobre vos. 
          Esto incluye tu perfil, configuraciones y datos de uso.
        </p>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleExportData}
            className="flex items-center px-6 py-2 bg-blt-neon text-blt-dark rounded-lg hover:bg-blt-neon/80 transition-colors font-medium"
          >
            <Download size={16} className="mr-2" />
            Descargar Mis Datos
          </button>
          <button
            onClick={() => setShowDataPreview(!showDataPreview)}
            className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {showDataPreview ? <EyeOff size={16} className="mr-1" /> : <Eye size={16} className="mr-1" />}
            {showDataPreview ? 'Ocultar' : 'Ver'} Vista Previa
          </button>
        </div>

        {/* Data Preview */}
        {showDataPreview && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Vista Previa de Tus Datos:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Información Personal</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Nombre: {userData.personalInfo.nombre}</li>
                  <li>• Email: {userData.personalInfo.email}</li>
                  <li>• Teléfono: {userData.personalInfo.telefono}</li>
                  <li>• Registro: {userData.personalInfo.fechaRegistro}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Datos de Uso</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Chatbots: {userData.usage.chatbotsCreados}</li>
                  <li>• Páginas vistas: {userData.usage.paginasVistas}</li>
                  <li>• Última conexión: {userData.usage.ultimaConexion}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Preferencias</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Idioma: {userData.preferences.idioma}</li>
                  <li>• Zona horaria: {userData.preferences.zona}</li>
                  <li>• Tema: {userData.preferences.tema}</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Privacy Settings */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-blt-dark mb-4 flex items-center">
          <Settings className="mr-2 text-blt-neon" size={24} />
          Configuración de Privacidad
        </h2>

        <div className="space-y-6">
          {/* Marketing Consent */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-medium text-gray-900 flex items-center">
                  <Mail className="mr-2 text-gray-500" size={18} />
                  Comunicaciones de Marketing
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Recibir ofertas, novedades y consejos sobre nuestros servicios
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blt-neon/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blt-neon"></div>
              </label>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { key: 'email', label: 'Email', icon: Mail },
                { key: 'sms', label: 'SMS', icon: Smartphone },
                { key: 'push', label: 'Push', icon: Bell },
                { key: 'newsletter', label: 'Newsletter', icon: FileText }
              ].map(({ key, label, icon: Icon }) => (
                <div key={key} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={key}
                    checked={settings[key as keyof typeof settings]}
                    onChange={(e) => setSettings({ ...settings, [key]: e.target.checked })}
                    className="rounded border-gray-300 text-blt-neon focus:ring-blt-neon"
                  />
                  <label htmlFor={key} className="text-sm text-gray-700 flex items-center">
                    <Icon size={14} className="mr-1" />
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics Consent */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Análisis y Mejoras</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Permitir el análisis de uso para mejorar nuestros servicios
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsConsent}
                  onChange={(e) => setAnalyticsConsent(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blt-neon/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blt-neon"></div>
              </label>
            </div>
          </div>

          <button className="px-6 py-2 bg-blt-neon text-blt-dark rounded-lg hover:bg-blt-neon/80 transition-colors font-medium">
            Guardar Preferencias
          </button>
        </div>
      </div>

      {/* Legal Documents */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-blt-dark mb-4 flex items-center">
          <FileText className="mr-2 text-blt-neon" size={24} />
          Documentos Legales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="#"
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div>
              <h3 className="font-medium text-gray-900">Política de Privacidad</h3>
              <p className="text-sm text-gray-500">Última actualización: Enero 2024</p>
            </div>
            <FileText className="text-gray-400" size={20} />
          </a>
          <a
            href="#"
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div>
              <h3 className="font-medium text-gray-900">Términos y Condiciones</h3>
              <p className="text-sm text-gray-500">Última actualización: Enero 2024</p>
            </div>
            <FileText className="text-gray-400" size={20} />
          </a>
        </div>
      </div>

      {/* Account Deletion */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-400">
        <h2 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
          <AlertTriangle className="mr-2" size={24} />
          Zona Peligrosa
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Eliminar Cuenta</h3>
            <p className="text-gray-600 mb-4">
              Si eliminás tu cuenta, perdés acceso a todos tus chatbots, configuraciones y datos. 
              Esta acción no se puede deshacer.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="text-red-500 mt-0.5" size={20} />
                <div>
                  <h4 className="text-red-800 font-medium">Antes de eliminar tu cuenta:</h4>
                  <ul className="text-red-700 text-sm mt-2 space-y-1">
                    <li>• Descargá una copia de tus datos</li>
                    <li>• Cancelá tu suscripción activa</li>
                    <li>• Considerá pausar tu cuenta en lugar de eliminarla</li>
                  </ul>
                </div>
              </div>
            </div>
            <button
              onClick={handleDeleteAccount}
              className="flex items-center px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              <Trash2 size={16} className="mr-2" />
              Solicitar Eliminación de Cuenta
            </button>
          </div>
        </div>
      </div>

      {/* GDPR Info */}
      <div className="bg-blt-gray rounded-lg p-6 mt-6">
        <div className="flex items-start space-x-3">
          <Shield className="text-blt-neon mt-0.5" size={24} />
          <div>
            <h3 className="font-semibold text-blt-dark mb-2">Tus Derechos de Privacidad</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Tenés derecho a acceder, corregir, eliminar o transferir tus datos personales. 
              También podés objetar el procesamiento de tus datos o solicitar que limitemos su uso. 
              Si tenés alguna pregunta sobre cómo manejamos tu información, 
              <span className="text-blt-neon cursor-pointer hover:underline ml-1">contactanos acá</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
