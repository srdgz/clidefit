import PropTypes from "prop-types";
import { BlobSvg } from "../utils/BlobSvg.js";

const CardIzq = ({ img, title, description }) => {
  return (
    <section className="container mx-auto my-10 p-8 bg-white relative">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center hidden lg:block"
        style={{
          height: "100%",
          width: "100%",
          background: `url('data:image/svg+xml,${encodeURIComponent(
            BlobSvg
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

CardIzq.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardIzq;
