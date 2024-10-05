import { Link } from "react-router-dom";

const Psicologia = () => {
  return (
    <div className="mt-32 p-8 xl:mx-32">
      <h1 className="text-4xl text-blue-900 font-bold text-center mb-6">
        Psicología
      </h1>
      <div className="grid grid-cols-1 gap-8 lg:gap-12">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
          <img
            src="https://placehold.co/400x300"
            alt="Psicología"
            className="w-full lg:w-1/2 h-80 object-cover mb-4 lg:mr-8 rounded-md"
          />
          <div className="lg:w-1/2">
            <ul className="text-xl text-blue-900 list-disc list-inside mb-4 ps-8">
              <li>Psicología para adultos</li>
              <li>Psicología infanto-juvenil</li>
              <li>Psicología deportiva</li>
              <li>Trastornos alimenticios</li>
            </ul>
          </div>
        </div>
        <div className="flex-grow mt-8 lg:mt-0 mb-20">
          <h2 className="text-2xl text-blue-900 font-semibold mb-4">
            Psicología para todos
          </h2>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Nuestro equipo de psicólogos altamente capacitados está aquí para
            guiarte en tu viaje hacia la salud mental y emocional.
          </p>

          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Servicios personalizados
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Ofrecemos terapia individualizada adaptada a tus necesidades,
            brindándote el apoyo necesario en cada paso.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Ambiente de confianza
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            En Clidefit, creamos un espacio seguro y confidencial donde puedes
            expresarte libremente.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Herramientas para el crecimiento personal
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Trabajamos contigo para proporcionarte las herramientas necesarias
            para superar desafíos y potenciar tu bienestar emocional.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Enfoque holístico
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Abordamos tu bienestar desde una perspectiva integral, considerando
            aspectos emocionales, cognitivos y conductuales.
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
export default Psicologia;
