import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <div className="mt-32 p-8 xl:mx-32">
      <h1 className="text-4xl text-blue-900 font-bold text-center mb-6">
        Nuestros Servicios
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
        {/* Servicio 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
          <img
            src="https://placehold.co/400x300"
            alt="Fisioterapia"
            className="w-full h-80 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl text-blue-900 font-semibold mb-4">
            Fisioterapia avanzada
          </h2>
          <p className="text-gray-500 text-md mb-4 flex-grow">
            En Clidefit, no solo ofrecemos servicios de fisioterapia, sino que
            nos destacamos por nuestra tecnología, la cual marca la diferencia
            en tu proceso de recuperación.
            <br />
            La <strong>Bomba Diamagnética</strong> consigue estimular y acelerar
            de forma impactante los propios procesos curativos del cuerpo
            aplicando 4 mecanismos principales de acción.
            <br />
            La <strong>Onda de Choque Focal</strong> con generador diamagnético
            que bioestimula la regeneración de tejidos, drena líquidos retenidos
            y no genera dolor durante el tratamiento. Entra en el futuro de la
            fisioterapia y de la rehabilitación, logrando tratamientos
            personalizados, totalmente inocuos, no dolorosos, no ionizante y no
            adictivos.
          </p>
          <Link
            to="/fisioterapia"
            className="btn rounded-full shadow-lg bg-blue-900 text-white text-xl border-2 border-blue-900 hover:bg-white hover:text-gray-800 hover:border-blue-900"
          >
            Más Detalles
          </Link>
        </div>

        {/* Servicio 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
          <img
            src="https://placehold.co/400x300"
            alt="Dietética"
            className="w-full h-80 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl text-blue-900 font-semibold mb-4">
            Nutrición y Dietética
          </h2>
          <p className="text-gray-500 text-md mb-4 flex-grow">
            ¡Transforma tu estilo de vida y alcanza tus metas de bienestar con
            el servicio de dietética de Clidefit!
            <br />
            Cuenta con nuestro equipo profesional, asesoramiento personalizado,{" "}
            <strong>nutrición balanceada</strong>, educación nutricional y apoyo
            y seguimiento continuo para transformar tu relación con la comida y
            lograr una vida más saludable.
          </p>
          <Link
            to="/nutricion"
            className="btn rounded-full shadow-lg bg-blue-900 text-white text-xl border-2 border-blue-900 hover:bg-white hover:text-gray-800 hover:border-blue-900"
          >
            Más Detalles
          </Link>
        </div>
        {/* Servicio 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
          <img
            src="https://placehold.co/400x300"
            alt="Psicología"
            className="w-full h-80 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl text-blue-900 font-semibold mb-4">
            Psicología
          </h2>
          <p className="text-gray-500 text-md mb-4 flex-grow">
            ¡Prioriza tu bienestar mental con nuestro servicio de psicología en
            Clidefit!
            <br />
            Nuestro equipo de psicólogos altamente capacitados está aquí para
            guiarte en tu viaje hacia la salud mental y emocional.
            <br />
            Ofrecemos <strong>terapia individualizada</strong> adaptada a tus
            necesidades, brindándote el apoyo necesario en cada paso.
            <br />
            Prioriza tu salud mental y comienza tu viaje hacia el equilibrio
            emocional con nosotros.
          </p>
          <Link
            to="/nutricion"
            className="btn rounded-full shadow-lg bg-blue-900 text-white text-xl border-2 border-blue-900 hover:bg-white hover:text-gray-800 hover:border-blue-900"
          >
            Más Detalles
          </Link>
        </div>
        {/* Servicio 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
          <img
            src="https://placehold.co/400x300"
            alt="Podologia"
            className="w-full h-80 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl text-blue-900 font-semibold mb-4">
            Podología
          </h2>
          <p className="text-gray-500 text-md mb-4 flex-grow">
            En Clidefit, tu salud es nuestra prioridad.
            <br />
            Confía en nuestro equipo de profesionales en{" "}
            <strong>podología</strong> dedicados a ofrecerte los mejores
            cuidados.
            <br />
            ¡Cuida tus pies y disfruta de una vida activa y sin molestias!
          </p>
          <Link
            to="/podologia"
            className="btn rounded-full shadow-lg bg-blue-900 text-white text-xl border-2 border-blue-900 hover:bg-white hover:text-gray-800 hover:border-blue-900"
          >
            Más Detalles
          </Link>
        </div>
        {/* Servicio 5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
          <img
            src="https://placehold.co/400x300"
            alt="Pilates"
            className="w-full h-80 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl text-blue-900 font-semibold mb-4">Pilates</h2>
          <p className="text-gray-500 text-md mb-4 flex-grow">
            En Clidefit realizamos clases con grupos reducidos de máximo 7
            personas, asegurando atención personalizada.
            <br />
            Nos especializamos en <strong>pilates</strong> para embarazadas y
            postparto, proporcionando un enfoque cuidadoso y adaptado a cada
            etapa.
            <br />
            Aprovecha para fortalecer cuerpo y mente con nuestros expertos
            fisioterapeutas y profesionales de pilates.
          </p>
          <Link
            to="/pilates"
            className="btn rounded-full shadow-lg bg-blue-900 text-white text-xl border-2 border-blue-900 hover:bg-white hover:text-gray-800 hover:border-blue-900"
          >
            Más Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
