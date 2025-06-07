import React, { useState } from 'react';
import { 
  HelpCircle, 
  MessageSquare, 
  Bell, 
  Search,
  Plus,
  Clock,
  CheckCircle,
  AlertTriangle,
  Send,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState('faqs');
  const [searchTerm, setSearchTerm] = useState('');
  const [newTicket, setNewTicket] = useState({ subject: '', message: '' });
  const [notifications, setNotifications] = useState({
    email: true,
    inApp: false
  });

  const faqs = [
    {
      question: "¿Cómo creo mi primer chatbot?",
      answer: "Es súper fácil. Una vez que tengas tu cuenta, llenás el formulario con los detalles de tu negocio y nosotros nos encargamos de todo. En 72 horas tenés tu bot listo para usar."
    },
    {
      question: "¿Puedo modificar mi chatbot después?",
      answer: "¡Por supuesto! Podés hacer cambios las veces que quieras. Solo creá un ticket de soporte y nosotros lo ajustamos según lo que necesités."
    },
    {
      question: "¿Qué pasa si cancelo mi suscripción?",
      answer: "Tu chatbot seguirá funcionando hasta el final del período que ya pagaste. Después de eso, se pausará pero no se elimina. Podés reactivarlo cuando gustés."
    },
    {
      question: "¿Cómo integro el bot con WhatsApp?",
      answer: "Eso está incluido en el plan BLT Max. Nosotros nos encargamos de toda la configuración técnica. Solo necesitás darnos acceso a tu cuenta de WhatsApp Business."
    }
  ];

  const tickets = [
    {
      id: 'TK-001',
      subject: 'Problema con mi chatbot',
      status: 'open',
      date: '2024-01-15',
      priority: 'high'
    },
    {
      id: 'TK-002',
      subject: 'Solicitud de cambio en landing',
      status: 'resolved',
      date: '2024-01-10',
      priority: 'medium'
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "Nueva integración con Instagram disponible",
      date: "2024-01-20",
      content: "Ya podés conectar tu chatbot con Instagram Direct. Esta función está disponible para todos los planes."
    },
    {
      id: 2,
      title: "Mantenimiento programado",
      date: "2024-01-15",
      content: "Vamos a hacer una actualización el próximo viernes de 2-4 AM. Durante este tiempo podría haber interrupciones menores."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <Clock className="text-yellow-500" size={16} />;
      case 'resolved':
        return <CheckCircle className="text-green-500" size={16} />;
      default:
        return <AlertTriangle className="text-red-500" size={16} />;
    }
  };

  const handleCreateTicket = () => {
    if (newTicket.subject && newTicket.message) {
      // Aquí iría la lógica para crear el ticket
      alert('Ticket creado exitosamente. Te contactaremos pronto.');
      setNewTicket({ subject: '', message: '' });
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blt-dark mb-2">
          Soporte y Comunicación
        </h1>
        <p className="text-gray-600">
          Acá tenés todo lo que necesitás para resolver dudas y mantenerte al día
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6">
        {[
          { id: 'faqs', label: 'Preguntas Frecuentes', icon: HelpCircle },
          { id: 'tickets', label: 'Mis Tickets', icon: MessageSquare },
          { id: 'announcements', label: 'Anuncios', icon: Bell }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blt-neon text-blt-dark'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon size={16} className="mr-2" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* FAQs Tab */}
      {activeTab === 'faqs' && (
        <div className="space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscá en las preguntas frecuentes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blt-neon focus:border-transparent"
            />
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-blt-dark mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
                <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">¿Te ayudó esta respuesta?</span>
                  <button className="flex items-center text-green-600 hover:text-green-700">
                    <ThumbsUp size={16} className="mr-1" />
                    Sí
                  </button>
                  <button className="flex items-center text-red-600 hover:text-red-700">
                    <ThumbsDown size={16} className="mr-1" />
                    No
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tickets Tab */}
      {activeTab === 'tickets' && (
        <div className="space-y-6">
          {/* Create New Ticket */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blt-dark mb-4 flex items-center">
              <Plus className="mr-2 text-blt-neon" size={24} />
              Crear Nuevo Ticket
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <input
                  type="text"
                  placeholder="Describí brevemente tu consulta"
                  value={newTicket.subject}
                  onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blt-neon focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  placeholder="Contanos con detalle qué necesitás. Entre más específico seas, mejor te vamos a poder ayudar."
                  value={newTicket.message}
                  onChange={(e) => setNewTicket({ ...newTicket, message: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blt-neon focus:border-transparent"
                />
              </div>
              <button
                onClick={handleCreateTicket}
                className="flex items-center px-6 py-2 bg-blt-neon text-blt-dark rounded-lg hover:bg-blt-neon/80 transition-colors font-medium"
              >
                <Send size={16} className="mr-2" />
                Enviar Ticket
              </button>
            </div>
          </div>

          {/* Existing Tickets */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blt-dark mb-4">
              Mis Tickets de Soporte
            </h2>
            <div className="space-y-3">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(ticket.status)}
                    <div>
                      <h3 className="font-medium text-gray-900">{ticket.subject}</h3>
                      <p className="text-sm text-gray-500">Ticket #{ticket.id} • {ticket.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      ticket.status === 'open' 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {ticket.status === 'open' ? 'Abierto' : 'Resuelto'}
                    </span>
                    <button className="text-blt-neon hover:text-blt-neon/80 font-medium">
                      Ver detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Announcements Tab */}
      {activeTab === 'announcements' && (
        <div className="space-y-6">
          {/* Notification Settings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blt-dark mb-4 flex items-center">
              <Bell className="mr-2 text-blt-neon" size={24} />
              Configurar Notificaciones
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Notificaciones por Email</h3>
                  <p className="text-sm text-gray-500">Recibí anuncios y actualizaciones en tu correo</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.email}
                    onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blt-neon/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blt-neon"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Notificaciones en la App</h3>
                  <p className="text-sm text-gray-500">Mostrá notificaciones cuando estés navegando</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.inApp}
                    onChange={(e) => setNotifications({ ...notifications, inApp: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blt-neon/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blt-neon"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Announcements List */}
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-blt-dark">
                    {announcement.title}
                  </h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    {announcement.date}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {announcement.content}
                </p>
              </div>
            ))}
          </div>

          {/* Feedback Section */}
          <div className="bg-blt-gray rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blt-dark mb-3">
              ¿Tenés alguna sugerencia?
            </h3>
            <p className="text-gray-600 mb-4">
              Nos encanta escuchar ideas para mejorar BLT. Contanos qué te gustaría ver.
            </p>
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Escribí tu sugerencia acá..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blt-neon focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blt-neon text-blt-dark rounded-lg hover:bg-blt-neon/80 transition-colors font-medium">
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
