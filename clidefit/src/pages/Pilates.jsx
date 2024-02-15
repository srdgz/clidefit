const Pilates = () => {
  return (
    <div className="mt-32 p-8 xl:mx-32">
      <h1 className="text-4xl text-blue-900 font-bold text-center mb-6">
        Pilates
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
              <li>Escuela de espalda</li>
              <li>Entrenamiento personal</li>
              <li>Pilates</li>
              <li>Pilates para embarazadas</li>
              <li>Pilates para postparto</li>
            </ul>
          </div>
        </div>

        {/* Información sobre los servicios */}
        <div className="flex-grow mt-8 lg:mt-0 mb-20">
          <h2 className="text-2xl text-blue-900 font-semibold mb-4">
            Pilates y entramiento personal
          </h2>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Clidefit proporciona una gama completa de servicios que abordan
            tanto la prevención como la recuperación, combinando enfoques
            especializados para atender las necesidades individuales de sus
            clientes en áreas clave como la espalda, el entrenamiento
            personalizado y los beneficios terapéuticos del Pilates en diversas
            etapas de la vida, incluido el embarazo y el postparto. Realizamos
            clases con grupos reducidos de máximo 7 personas, asegurando
            atención personalizada.
          </p>

          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Escuela de espalda
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Nos enfocamos en la prevención y tratamiento de problemas
            relacionados con la columna vertebral y la espalda. A través de
            programas diseñados por nuestros especialistas, se imparten clases y
            ejercicios específicos para fortalecer la musculatura, mejorar la
            postura y aliviar posibles dolencias en la espalda.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Entrenamiento personal
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Ofrecemos servicios de entrenamiento personalizado, donde cada
            cliente recibe atención individualizada según sus objetivos, nivel
            de condición física y necesidades específicas. Nuestros
            especialistas diseñan programas adaptados, combinando ejercicios de
            resistencia, cardiovasculares y flexibilidad para lograr resultados
            óptimos de forma segura y efectiva.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">Pilates</h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Nos centramos en el fortalecimiento del núcleo, la mejora de la
            flexibilidad y la promoción de una buena postura. Las sesiones de
            Pilates incluyen ejercicios controlados, ofreciendo beneficios para
            la salud física y mental.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Pilates para embarazadas
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Este servicio está diseñado específicamente para mujeres
            embarazadas. Las clases de Pilates adaptadas para el embarazo se
            centran en fortalecer los músculos clave, mejorar la postura y
            promover la conexión mente-cuerpo, contribuyendo así al bienestar
            durante el período gestacional.
          </p>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Pilates para postparto
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Después del parto, Clidefit ofrece programas de Pilates diseñados
            para ayudar en la recuperación física y fortalecimiento progresivo.
            Estos programas se adaptan a las necesidades específicas de las
            mujeres que han dado a luz, centrándose en la rehabilitación de la
            musculatura abdominal, la corrección postural y la recuperación de
            la fuerza y la flexibilidad.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Pilates;
