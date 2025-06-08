
import React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '@/components/layout/PublicHeader';
import { Mail, ArrowLeft } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blt-white">
      <PublicHeader />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to home link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-blt-dark hover:text-blt-neon transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blt-dark mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-lg text-gray-600">
            <strong>Bros Lab Tech</strong>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Última actualización: junio 2025
          </p>
        </div>

        {/* Terms content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 leading-relaxed">
              Al contratar nuestros servicios o utilizar cualquiera de nuestros productos, aceptás estos Términos y Condiciones. Si no estás de acuerdo, no deberías usar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">2. Servicios Ofrecidos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BLT proporciona soluciones digitales rápidas y accesibles, incluyendo (pero no limitado a):
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Desarrollo de landing pages y sitios web</li>
              <li>Integración de chatbots con IA</li>
              <li>Automatización de procesos de atención al cliente</li>
              <li>Diseño visual básico para web</li>
              <li>Soporte técnico limitado</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              BLT se reserva el derecho de modificar o descontinuar cualquier servicio en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">3. Propiedad Intelectual</h2>
            <p className="text-gray-700 leading-relaxed">
              Todo el contenido generado por BLT (salvo materiales provistos por el cliente) es propiedad intelectual de BLT hasta que el servicio sea pagado en su totalidad. Una vez saldado, los derechos se transfieren al cliente, con excepción de herramientas licenciadas o de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">4. Responsabilidad del Cliente</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El cliente se compromete a:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Proporcionar información clara y precisa</li>
              <li>Revisar y aprobar contenido dentro de los plazos establecidos</li>
              <li>No solicitar tareas fuera del alcance del plan contratado sin una cotización adicional</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">5. Revisiones</h2>
            <p className="text-gray-700 leading-relaxed">
              Las revisiones están limitadas por cada plan contratado. Revisiones adicionales tendrán un costo extra. Revisiones ilimitadas no significan rediseños completos ni cambios estructurales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">6. Limitaciones</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BLT no se hace responsable por:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Resultados comerciales derivados del uso del sitio o chatbot</li>
              <li>Errores causados por información incorrecta provista por el cliente</li>
              <li>Falta de respuesta por parte del cliente durante la ejecución del proyecto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">7. Soporte y Garantías</h2>
            <p className="text-gray-700 leading-relaxed">
              El soporte se brinda únicamente en horario hábil y por los canales establecidos. Los planes PRO o personalizados pueden incluir soporte extendido según lo acordado por contrato.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">8. Pagos y Reembolsos</h2>
            <p className="text-gray-700 leading-relaxed">
              Todos los pagos son por adelantado. No se ofrecen reembolsos por servicios entregados, tiempo dedicado o falta de respuesta del cliente. Casos especiales se analizarán individualmente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blt-dark mb-4">9. Cancelación</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BLT puede cancelar un servicio si:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>El cliente incumple con los pagos</li>
              <li>Se presentan faltas de respeto, abusos o situaciones que comprometan la integridad del equipo</li>
            </ul>
          </section>

          {/* Contact section */}
          <section className="bg-blt-gray rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-blt-dark mb-4">Contacto</h2>
            <p className="text-gray-700 mb-4">
              Si tenés dudas sobre estos términos, escribinos a:
            </p>
            <a 
              href="mailto:support@broslab.tech"
              className="inline-flex items-center bg-blt-neon text-blt-dark px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              <Mail className="w-4 h-4 mr-2" />
              support@broslab.tech
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
