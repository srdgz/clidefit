const Equipo = () => {
  return (
    <div className="p-8 mt-32 xl:mx-32">
      <div className="text-center mb-32">
        <img
          src="https://placehold.co/700x500"
          alt="Equipo Clidefit"
          className="mx-auto mb-4"
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
          <img
            src="https://placehold.co/300x300"
            alt="Fisioterapia"
            className="mx-auto mb-4"
          />
          <p className="text-blue-900 font-semibold">Sergio Contreras</p>
          <p className="text-gray-500 text-md">Fisioterapeuta</p>
        </div>

        {/* Tercer miembro del equipo */}
        <div className="text-center">
          <img
            src="https://placehold.co/300x300"
            alt="Nutrición"
            className="mx-auto mb-4"
          />
          <p className="text-blue-900 font-semibold">Alejandro Rodríguez</p>
          <p className="text-gray-500 text-md">Nutricionista</p>
        </div>

        {/* Cuarto miembro del equipo */}
        <div className="text-center">
          <img
            src="https://placehold.co/300x300"
            alt="Psicología"
            className="mx-auto mb-4"
          />
          <p className="text-blue-900 font-semibold">Nombre Miembro 4</p>
          <p className="text-gray-500 text-md">Psicóloga</p>
        </div>

        {/* Quinto miembro del equipo */}
        <div className="text-center">
          <img
            src="https://placehold.co/300x300"
            alt="Pilates"
            className="mx-auto mb-4"
          />
          <p className="text-blue-900 font-semibold">Nombre Miembro 5</p>
          <p className="text-gray-500 text-md">Instructora de Pilates</p>
        </div>
      </div>
    </div>
  );
};

export default Equipo;
