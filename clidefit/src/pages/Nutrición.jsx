const Nutricion = () => {
  return (
    <div className="mt-32 p-8 xl:mx-32">
      <h1 className="text-4xl text-blue-900 font-bold text-center mb-6">
        Nutrición
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:gap-12">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
          <img
            src="https://placehold.co/400x300"
            alt="Dietética y nutrición"
            className="w-full lg:w-1/2 h-80 object-cover mb-4 lg:mr-8 rounded-md"
          />
          <div className="lg:w-1/2">
            <ul className="text-xl text-blue-900 list-disc list-inside mb-4 ps-8">
              <li>Nutrición deportiva</li>
              <li>Trastornos alimenticios</li>
              <li>Intolerancias alimenticias</li>
              <li>Control de peso</li>
              <li>Planificación dietética</li>
            </ul>
          </div>
        </div>

        {/* Información sobre los servicios */}
        <div className="flex-grow mt-8 lg:mt-0 mb-20">
          <h2 className="text-2xl text-blue-900 font-semibold mb-4">
            Descubre el secreto de una vida salubable
          </h2>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Transforma tu estilo de vida y alcanza tus metas de bienestar con el
            servicio de dietética de Clidefit.
          </p>

          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Asesoramiento personalizado
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Nuestros expertos en dietética te ofrecen un plan alimenticio
            adaptado a tus necesidades individuales y metas específicas.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Nutrición balanceada
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Descubre el equilibrio perfecto entre sabor y salud. Creamos planes
            nutricionales deliciosos que se ajustan a tu estilo de vida.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Apoyo continuo
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            En Clidefit, no estás solo en tu viaje hacia la salud. Te brindamos
            el respaldo necesario para mantenerte enfocado y motivado.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Seguimiento detallado
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Monitoreamos tu progreso de cerca y ajustamos tu plan según sea
            necesario para garantizar resultados efectivos y sostenibles.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Educación nutricional
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Aprende sobre hábitos alimenticios saludables y adquiere
            conocimientos que te empoderarán a tomar decisiones informadas sobre
            tu alimentación.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Equipo profesional
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Confía en la experiencia de nuestros dietistas para recibir
            orientación experta y alcanzar tus objetivos de bienestar.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Nutricion;
