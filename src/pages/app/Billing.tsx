
import React, { useState } from 'react';
import { 
  CreditCard, 
  Download, 
  AlertCircle, 
  CheckCircle, 
  Calendar,
  Building,
  Edit3,
  Plus
} from 'lucide-react';

const Billing: React.FC = () => {
  const [editingPayment, setEditingPayment] = useState(false);
  const [editingBilling, setEditingBilling] = useState(false);

  // Datos demo
  const invoices = [
    { id: 'INV-001', date: '2024-01-15', amount: '$29.99', status: 'paid', plan: 'BLT Starter' },
    { id: 'INV-002', date: '2023-12-15', amount: '$29.99', status: 'paid', plan: 'BLT Starter' },
    { id: 'INV-003', date: '2023-11-15', amount: '$0.00', status: 'paid', plan: 'BLT Free' },
  ];

  const paymentMethod = {
    type: 'visa',
    last4: '4242',
    expiry: '12/25'
  };

  const billingData = {
    name: 'Juan Pérez',
    company: 'Mi Empresa SRL',
    nit: '0614-123456-001-2',
    address: 'San Salvador, El Salvador'
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blt-dark mb-2">
          Facturación y Pagos
        </h1>
        <p className="text-gray-600">
          Manejá tus pagos, facturas y datos de facturación desde acá
        </p>
      </div>

      {/* Método de Pago */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-blt-dark flex items-center">
            <CreditCard className="mr-2 text-blt-neon" size={24} />
            Método de Pago
          </h2>
          <button
            onClick={() => setEditingPayment(!editingPayment)}
            className="flex items-center px-4 py-2 bg-blt-neon text-blt-dark rounded-lg hover:bg-blt-neon/80 transition-colors font-medium"
          >
            <Edit3 size={16} className="mr-1" />
            {editingPayment ? 'Cancelar' : 'Editar'}
          </button>
        </div>

        {!editingPayment ? (
          <div className="flex items-center space-x-4">
            <div className="bg-blt-dark text-white px-3 py-1 rounded text-sm font-medium">
              VISA
            </div>
            <span className="text-gray-700">•••• •••• •••• {paymentMethod.last4}</span>
            <span className="text-gray-500">Vence {paymentMethod.expiry}</span>
            <div className="flex items-center text-green-600">
              <CheckCircle size={16} className="mr-1" />
              Activa
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Número de Tarjeta
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blt-neon focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vencimiento
                  </label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blt-neon focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blt-neon focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-blt-neon text-blt-dark rounded-lg hover:bg-blt-neon/80 transition-colors font-medium">
                Guardar Tarjeta
              </button>
              <button
                onClick={() => setEditingPayment(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Datos de Facturación */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-blt-dark flex items-center">
            <Building className="mr-2 text-blt-neon" size={24} />
            Datos de Facturación
          </h2>
          <button
            onClick={() => setEditingBilling(!editingBilling)}
            className="flex items-center px-4 py-2 bg-blt-neon text-blt-dark rounded-lg hover:bg-blt-neon/80 transition-colors font-medium"
          >
            <Edit3 size={16} className="mr-1" />
            {editingBilling ? 'Cancelar' : 'Editar'}
          </button>
        </div>

        {!editingBilling ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-500">Nombre/Razón Social</label>
              <p className="text-gray-900">{billingData.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Empresa</label>
              <p className="text-gray-900">{billingData.company}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">NIT/NRC</label>
              <p className="text-gray-900">{billingData.nit}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Dirección</label>
              <p className="text-gray-900">{billingData.address}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre/Razón Social
                </label>
                <input
                  type="text"
                  defaultValue={billingData.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blt-neon focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  defaultValue={billingData.company}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blt-neon focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  NIT/NRC
                </label>
                <input
                  type="text"
                  defaultValue={billingData.nit}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blt-neon focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dirección
                </label>
                <input
                  type="text"
                  defaultValue={billingData.address}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blt-neon focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-blt-neon text-blt-dark rounded-lg hover:bg-blt-neon/80 transition-colors font-medium">
                Guardar Cambios
              </button>
              <button
                onClick={() => setEditingBilling(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Historial de Facturas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-blt-dark mb-4 flex items-center">
          <Calendar className="mr-2 text-blt-neon" size={24} />
          Historial de Facturas
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 text-sm font-medium text-gray-700">Factura</th>
                <th className="text-left py-3 text-sm font-medium text-gray-700">Fecha</th>
                <th className="text-left py-3 text-sm font-medium text-gray-700">Plan</th>
                <th className="text-left py-3 text-sm font-medium text-gray-700">Monto</th>
                <th className="text-left py-3 text-sm font-medium text-gray-700">Estado</th>
                <th className="text-left py-3 text-sm font-medium text-gray-700">Acción</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 text-sm font-medium text-gray-900">{invoice.id}</td>
                  <td className="py-3 text-sm text-gray-600">{invoice.date}</td>
                  <td className="py-3 text-sm text-gray-600">{invoice.plan}</td>
                  <td className="py-3 text-sm font-medium text-gray-900">{invoice.amount}</td>
                  <td className="py-3">
                    <div className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-1" />
                      <span className="text-sm text-green-600 capitalize">{invoice.status}</span>
                    </div>
                  </td>
                  <td className="py-3">
                    <button className="flex items-center px-3 py-1 text-sm text-blt-neon hover:bg-blt-neon hover:text-blt-dark rounded-lg transition-colors">
                      <Download size={14} className="mr-1" />
                      PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-4 bg-blt-gray rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="text-blue-500 mt-0.5" size={20} />
            <div>
              <p className="text-sm text-gray-700">
                <strong>Recordá:</strong> Podés descargar tus facturas en cualquier momento. 
                Si tenés problemas con algún pago, <span className="text-blt-neon cursor-pointer hover:underline">contactanos por acá</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
