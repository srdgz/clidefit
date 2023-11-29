const blobSvg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path fill="#B0F7F0" d="M46.9,-49.5C60.6,-44.4,71.3,-29.4,68.6,-16.3C66,-3.1,49.9,8.2,41,23.9C32.2,39.6,30.6,59.7,21.1,67.1C11.5,74.6,-5.9,69.4,-22.6,63C-39.3,56.5,-55.2,48.8,-63.2,36C-71.2,23.2,-71.2,5.3,-62,-4.7C-52.9,-14.8,-34.5,-17,-22.6,-22.4C-10.7,-27.8,-5.4,-36.3,5.6,-43C16.6,-49.7,33.2,-54.5,46.9,-49.5Z" transform="translate(100 100)" />
</svg>`;

const CardIzq = ({ img, title, description }) => {
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

      <div className="flex flex-col lg:flex-row items-center relative">
        <div className="lg:w-1/2">
          <img
            src={img}
            alt="Clidefit"
            className="object-cover w-full h-full rounded-3xl mb-4 lg:mb-0"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-12 flex flex-col items-start z-10 relative">
          <h2 className="text-xl lg:text-4xl font-bold text-blue-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-500 text-md lg:text-xl">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default CardIzq;
