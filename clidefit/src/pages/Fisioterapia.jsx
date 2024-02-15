import { Link } from "react-router-dom";

const Fisioterapia = () => {
  return (
    <div className="mt-32 p-8 xl:mx-32">
      <h1 className="text-4xl text-blue-900 font-bold text-center mb-6">
        Fisioterapia avanzada
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:gap-12">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
          <img
            src="https://placehold.co/400x300"
            alt="Fisioterapia"
            className="w-full lg:w-1/2 h-80 object-cover mb-4 lg:mr-8 rounded-md"
          />
          <div className="lg:w-1/2">
            <ul className="text-xl text-blue-900 list-disc list-inside mb-4 ps-8">
              <li>Rehabilitación</li>
              <li>Electrólisis Percutánea (EPI/EPTE)</li>
              <li>Bomba Diamagnética CTU mega 20</li>
              <li>Ondas de Choque focal CTU S</li>
              <li>Ecografía</li>
              <li>Neuromodulación</li>
              <li>Seguimiento deportivo</li>
              <li>Medkey</li>
              <li>Punción seca / Acupuntura</li>
              <li>Terapia manual</li>
            </ul>
          </div>
        </div>

        {/* Información sobre los servicios */}
        <div className="flex-grow mt-8 lg:mt-0 mb-20">
          <h2 className="text-2xl text-blue-900 font-semibold mb-4">
            Terapia Diamagnética
          </h2>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Es una terapia no invasiva y totalmente indolora que emplea campos
            electromagnéticos pulsados de alta intensidad y baja frecuencia.
            Permite reducir considerablemente el tiempo necesario para la
            resolución de múltiples patologías.
          </p>

          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Bomba diamagnética CTU Mega 20:
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Se trata de un acelerador de los procesos diamagnéticos que
            aprovecha el hecho de que las estructuras corporales tengan un
            elevado porcentaje de líquido en su composición, siendo éste un
            material diamagnético, para tener una gran capacidad de actuación en
            nuestros tejidos. Presenta cuatro mecanismos de acción:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-500 mb-4">
            <li>
              Desplazamiento de líquidos, ayudando a resolver edemas e
              inflamaciones. Permite trabajar tanto a nivel instersticial como
              intracelular.
            </li>
            <li>
              Estimulación endógena, favoreciendo la regeneración tisular.
            </li>
            <li>
              Neuromodulación del dolor, tanto nociceptivo como neuropático.
            </li>
            <li>
              Implante molecular, favoreciendo la administración y absorción de
              fármacos, moléculas y principios activos dentro de los tejidos.
            </li>
          </ul>

          <p className="text-gray-500 text-lg mb-4 flex-grow">
            También permite la posibilidad de combinar esta tecnología con la
            aplicación de diatermia provocando efectos térmicos, vasodilatación
            e hiperemia, mejorando el flujo de líquidos.
          </p>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Presenta un abanico de aplicaciones muy amplio, incluyendo lesiones
            musculares, articulares, tendinosas, óseas, patología de hombro,
            patología de espalda, lesiones neurológicas, flebología y
            linfología, rehabilitación postquirúrgica, terapia del dolor,
            odontología, dermatología, y síndromes complejos.
          </p>

          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Onda de choque focal CTU S wave:
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Combina la onda acústica con el efecto del campo magnético de alta
            intensidad. Su aplicación es totalmente indolora y, gracias al
            efecto diamagnético, el paciente experimenta un alivio inmediato de
            los síntomas en cada sesión. Es especialmente eficaz en patologías
            tendinosas, bursitis, retrasos de la consolidación ósea, espolones,
            osteocondropatías, necrosis avascular y patologías musculares
            crónicas.
          </p>

          <h2 className="text-2xl text-blue-900 font-semibold mt-10 mb-4">
            Ecografía Musculoesquelética
          </h2>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Valoración de la presencia o no de patologías y realización de
            tratamientos ecoguiados.
          </p>

          <h2 className="text-2xl text-blue-900 font-semibold mt-10 mb-4">
            Fisioterapia Invasiva
          </h2>
          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Electrolisis Percutánea Intratisular (EPI):
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Aplicación percutánea ecoguiada de una corriente galvánica a través
            de una aguja de acupuntura, consiguiendo la fagocitosis y la
            reparación de lesiones en tejidos blandos.
          </p>

          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Neuromodulación Percutánea:
          </h3>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Se basa en la estimulación de puntos neuroreactivos del organismo a
            través de agujas y equipos de electroterapia. Útil para la mejora
            del dolor y las disfunciones neuro-músculoesqueléticas.
          </p>

          <h3 className="text-lg text-blue-900 font-semibold mb-2">
            Electropunción Seca.
          </h3>

          <h2 className="text-2xl text-blue-900 font-semibold mt-10 mb-4">
            Terapia Manual
          </h2>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Técnicas específicas para el tratamiento del dolor y otros síntomas
            de disfunción neuromúsculo-esquelética. Se realiza, principalmente,
            mediante la manipulación de músculos y articulaciones.
          </p>
          <p className="text-gray-500 text-lg mb-4 flex-grow">
            Los objetivos principales de la técnica son aliviar el dolor
            articular y muscular, recuperar el movimiento ante la presencia de
            restricciones y mejorar la funcionalidad del paciente.
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

export default Fisioterapia;
