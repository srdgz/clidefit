const blobSvg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path fill="#B0F7F0" d="M29.4,-40.8C37.4,-28.4,42.6,-18.4,47.4,-6.2C52.2,6.1,56.5,20.6,52.9,33.9C49.2,47.1,37.5,59.1,25.9,57.5C14.2,55.8,2.5,40.5,-10.4,33.7C-23.3,26.8,-37.4,28.2,-50.5,21.5C-63.6,14.7,-75.7,-0.4,-72.7,-12C-69.7,-23.6,-51.6,-31.8,-37,-43C-22.3,-54.3,-11.2,-68.7,-0.2,-68.4C10.7,-68.2,21.5,-53.3,29.4,-40.8Z" transform="translate(100 100)" />
</svg>`;

const CardDer = ({ img, title, description }) => {
  return (
    <section className="container mx-auto my-10 p-8 bg-white relative">
      {/* Blob SVG como background - Visible solo en pantallas lg y mayores */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center hidden lg:block"
        style={{
          height: "100%",
          width: "100%",
          background: `url('data:image/svg+xml,${encodeURIComponent(
            blobSvg
          )}')`,
        }}
      ></div>
      <div className="lg:flex lg:flex-row items-center relative">
        {/* Contenido para pantallas grandes */}
        <div className="hidden lg:w-1/2 lg:pr-12 lg:flex flex-col items-end">
          <h2 className="text-xl lg:text-4xl font-bold text-blue-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-500 text-md lg:text-xl text-end mb-4">
            {description}
          </p>
        </div>

        {/* Imagen para todas las pantallas */}
        <div className="lg:w-1/2">
          <img
            src={img}
            alt="ClidefitInterior"
            className="object-cover w-full h-full rounded-3xl mb-4 lg:mb-0"
          />
        </div>

        {/* Contenido para pantallas pequeñas */}
        <div className="lg:hidden flex flex-col items-start">
          <h2 className="text-xl lg:text-4xl font-bold text-blue-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-500 text-md lg:text-xl text-start mb-4">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardDer;
