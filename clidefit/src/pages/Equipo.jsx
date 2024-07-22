import Fisio from "../assets/equipo/Fisio.jpg";
import Dietista from "../assets/equipo/Dietista.jpg";
import Pilates from "../assets/equipo/Pilates.jpg";
import Podologo from "../assets/equipo/Podologo.jpg";
import Psicologa from "../assets/equipo/Psicologa.jpg";
import Logo from "../assets/ClidefitLogoCompleto1.png";
const Equipo = () => {
  return (
    <div className="p-8 mt-32 xl:mx-32">
      <div className="text-center mb-32">
        <img
          src={Logo}
          alt="Equipo Clidefit"
          className="mx-auto mb-4 w-1/2 h-auto"
        />
        <p className="text-4xl text-blue-900 font-bold mb-6">Equipo Clidefit</p>
        <p className="text-gray-500 text-lg">
          Conoce al increíble equipo detrás de Clidefit.
        </p>
      </div>

      <div className="mt-8 mb-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Primer miembro del equipo */}
        <div className="text-center">
          <img
            src="https://placehold.co/300x300"
            alt="Recepción"
            className="mx-auto mb-4"
          />
          <p className="text-blue-900 font-semibold">Estefanía Fernández</p>
          <p className="text-gray-500 text-md">Recepcionista</p>
        </div>

        {/* Segundo miembro del equipo */}
        <div className="text-center">
          <img src={Fisio} alt="Fisioterapia" className="mx-auto mb-4" />
          <p className="text-blue-900 font-semibold">Sergio Contreras</p>
          <p className="text-gray-500 text-md">Fisioterapeuta</p>
        </div>

        {/* Tercer miembro del equipo */}
        <div className="text-center">
          <img src={Dietista} alt="Nutrición" className="mx-auto mb-4" />
          <p className="text-blue-900 font-semibold">Alejandro Rodríguez</p>
          <p className="text-gray-500 text-md">Dietista</p>
        </div>

        {/* Cuarto miembro del equipo */}
        <div className="text-center">
          <img src={Psicologa} alt="Psicología" className="mx-auto mb-4" />
          <p className="text-blue-900 font-semibold">Laura Morales</p>
          <p className="text-gray-500 text-md">Psicóloga</p>
        </div>

        {/* Quinto miembro del equipo */}
        <div className="text-center">
          <img src={Pilates} alt="Pilates" className="mx-auto mb-4" />
          <p className="text-blue-900 font-semibold">Laura Fernández</p>
          <p className="text-gray-500 text-md">Instructora de Pilates</p>
        </div>

        {/* Sexto miembro del equipo */}
        <div className="text-center">
          <img
            src="https://placehold.co/300x300"
            alt="Pilates"
            className="mx-auto mb-4"
          />
          <p className="text-blue-900 font-semibold">Juan Luis Ruíz</p>
          <p className="text-gray-500 text-md">
            Fisioterapeuta e Instructor de Pilates Terapéutico
          </p>
        </div>

        {/* Séptimo miembro del equipo */}
        <div className="text-center">
          <img src={Podologo} alt="Pilates" className="mx-auto mb-4" />
          <p className="text-blue-900 font-semibold">Carlos Dieguez</p>
          <p className="text-gray-500 text-md">Podólogo</p>
        </div>
      </div>
    </div>
  );
};

export default Equipo;
