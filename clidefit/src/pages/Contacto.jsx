import { useState } from "react";
import { Link } from "react-router-dom";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    mensaje: "",
    aceptarTerminos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar formulario
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:max-w-3xl"
        onSubmit={handleSubmit}
      >
        {/* Columna izquierda: Formulario */}
        <div className="mt-32 lg:mt-0 mx-2 lg:mx-0">
          <h2 className="text-2xl text-blue-900 font-bold mb-6">Contacto</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-500 text-sm font-bold mb-2">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre..."
                value={formData.nombre}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-900"
                required
              />
            </div>
            <div>
              <label className="block text-gray-500 text-sm font-bold mb-2">
                Apellido
              </label>
              <input
                type="text"
                name="apellido"
                placeholder="Tu apellido..."
                value={formData.apellido}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-900"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              placeholder="Tu teléfono..."
              value={formData.telefono}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-900"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="tuemail@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-900"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              placeholder="Tu mensaje..."
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-900"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="aceptarTerminos"
                checked={formData.aceptarTerminos}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <span className="text-sm">
                Acepto los{" "}
                <Link
                  to={"/privacidad"}
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  términos y condiciones
                </Link>
                .
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="btn rounded-full shadow-lg bg-blue-900 text-white border-2 border-blue-900 hover:bg-white hover:text-gray-800 hover:border-blue-900"
          >
            ENVIAR
          </button>
        </div>
        {/* Columna derecha: Información de CLIDEFIT */}
        <div className="lg:col-span-1 bg-gray-100 p-6 mb-10 lg:mb-0 rounded-md">
          <h2 className="text-xl text-blue-900 font-bold mt-12 mb-4">
            CLIDEFIT
          </h2>
          <p>C. Berna, 21, 10005 Cáceres</p>
          <p>927 618 621</p>
          <p>623 537 891</p>
          <a href="mailto:clidefit@gmail.com" className="text-teal-500">
            clidefit@gmail.com
          </a>

          {/* Enlace de Google Maps */}
          <iframe
            className="mt-10"
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.5516482792423!2d-6.383898523540002!3d39.4568646134992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd15dfade065ac31%3A0xff9023bebf5b5f7c!2sClidefit!5e0!3m2!1ses!2ses!4v1700675567535!5m2!1ses!2ses"
            width="320"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
