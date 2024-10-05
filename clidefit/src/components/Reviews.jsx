import PropTypes from "prop-types";

const reviews = [
  {
    name: "Cristian Martínez",
    rating: 5,
    review:
      "Increíble la profesionalidad y los recursos de maquinaria y tecnología que tienen. Llevaba meses arrastrando una lesión y he venido desde Badajoz y gracias a ellos he podido recuperarme.",
  },
  {
    name: "Luis Díaz",
    rating: 5,
    review:
      "Muy buen trato. La clínica muy espaciosa y ambiente cómodo. Fui por un dolor de cabeza de origen muscular. Juan Luis me trató, salí bastante mejor y muy relajado. El lunes vuelvo pero esta primera experiencia fue genial! Muy recomendable.",
  },
  {
    name: "Beatriz Barrado",
    rating: 5,
    review:
      "Tenía un dolor de hombro horrible hace un par de días y hoy me duele bastante menos. Trato muy profesional y amable. Juan Luis me mandó ejercicios para casa y parece que va todo bien. Tengo que volver pero estoy muy contenta porque la atención y los resultados son inmejorables. Muy recomendable.",
  },
];

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-yellow-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.25l-6.518 3.424 1.237-7.2L2.25 8.576l7.26-1.056L12 1.5l2.49 6.02 7.26 1.056-4.469 4.898 1.237 7.2L12 17.25z"
          />
        </svg>
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Lo que dicen nuestros clientes de nosotros
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-start"
          >
            <h3 className="text-lg font-bold mb-2">{review.name}</h3>
            <StarRating rating={review.rating} />
            <p className="text-gray-700 mt-4">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Reviews;
