import { Link } from "react-router-dom";

const Podologia = () => {
  return (
    <div className="mt-32 p-8 xl:mx-32">
      <h1 className="text-4xl text-blue-900 font-bold text-center mb-6">
        Podología
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:gap-12">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
          <img
            src="https://placehold.co/400x300"
            alt="Podología"
            className="w-full lg:w-1/2 h-80 object-cover mb-4 lg:mr-8 rounded-md"
          />
          <div className="lg:w-1/2">
            <ul className="text-xl text-blue-900 list-disc list-inside mb-4 ps-8">
              <li>Estudio de la marcha</li>
              <li>Tratamiento para úlceras</li>
              <li>Revisión de plantillas</li>
              <li>Terapia diamagnética</li>
            </ul>
          </div>
        </div>

        {/* Información sobre los servicios */}
        <div className="flex-grow mt-8 lg:mt-0 mb-20">
          <h2 className="text-2xl text-blue-900 font-semibold mb-4">
            Estudio de la marcha
          </h2>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Identificamos cualquier anomalía en tu forma de caminar para
            ofrecerte soluciones personalizadas y mejorar tu calidad de vida.
          </p>

          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Tratamiento para úlceras
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            En Clidefit, nos tomamos muy en serio la salud de tus pies. Nuestro
            equipo experto está capacitado para tratar y prevenir úlceras,
            protegiendo tu bienestar a cada paso.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Revisión de plantillas
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Personalizamos tus plantillas ortopédicas para garantizar la máxima
            comodidad y eficacia, adaptadas a las necesidades específicas de tus
            pies.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Terapia diamagnética
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            ¡Descubre una terapia innovadora que promueve la recuperación y el
            bienestar! Nuestros especialistas utilizan la última tecnología en
            terapia diamagnética para aliviar el dolor y acelerar la curación.
          </p>
        </div>
      </div>
      <div className="mb-14">
        <Link
          to="https://app.clinic-cloud.com/citaonline.php/CLIDEFIT"
          target="_blank"
          className="btn rounded-full shadow-lg bg-blue-900 text-white border-2 border-blue-900 hover:bg-white hover:text-gray-800 hover:border-blue-900"
        >
          RESERVA TU CITA
        </Link>
      </div>
    </div>
  );
};
export default Podologia;
