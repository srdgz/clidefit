import PropTypes from "prop-types";
import { BlobSvg } from "../utils/BlobSvg";

const CardDer = ({ img, title, description }) => {
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
      <div className="lg:flex lg:flex-row items-center relative">
        <div className="hidden lg:w-1/2 lg:pr-12 lg:flex flex-col items-end">
          <h2 className="text-xl lg:text-4xl font-bold text-blue-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-500 text-md lg:text-xl text-end mb-4">
            {description}
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={img}
            alt="ClidefitInterior"
            className="object-cover w-full h-full rounded-3xl mb-4 lg:mb-0"
          />
        </div>
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

CardDer.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardDer;
