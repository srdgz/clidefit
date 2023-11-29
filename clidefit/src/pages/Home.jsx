import Carousel from "../components/Carousel.jsx";
import Hero from "../components/Hero.jsx";
import CardIzq from "../components/CardIzq.jsx";
import CardDer from "../components/CardDer.jsx";

import ClidefitInterior from "../assets/ClidefitInterior.jpg";
import ClidefitFisioAvanzada from "../assets/ClidefitFisioAvanzada.jpg";
import ClidefitPsico from "../assets/ClidefitPsico.jpg";
import ClidefitNutricion from "../assets/ClidefitNutricion.jpg";
import ClidefitPilates from "../assets/ClidefitPilates.jpg";

const Home = () => {
  return (
    <>
      <Carousel />
      <Hero title="Somos tu clínica de fisioterapia avanzada y salud" />
      <CardIzq
        img={ClidefitInterior}
        title="Clidefit, tu destino integral para el bienestar físico y emocional"
        description="En nuestra clínica de fisioterapia y salud, ofrecemos una gama
            completa de servicios diseñados para cuidar de ti de manera
            holística.
            En Clidefit, tu salud y bienestar son nuestra prioridad. Descubre una vida más saludable con nosotros. ¡Te esperamos para cuidar de ti de la manera más completa!"
      />
      <Hero title="Descubre todos nuestros servicios" />
      <CardDer
        img={ClidefitFisioAvanzada}
        title="Fisioterapia avanzada"
        description="Descubre la excelencia en fisioterapia avanzada, donde nuestro
            equipo de profesionales altamente capacitados utiliza las últimas
            técnicas y tecnologías para acelerar tu recuperación y mejorar tu
            calidad de vida."
      />
      <CardIzq
        img={ClidefitPsico}
        title="Psicología para todas las edades"
        description="En Clidefit, nos preocupamos por tu bienestar mental tanto como tu salud física. Nuestros servicios de psicología te brindan el apoyo necesario para enfrentar desafíos emocionales y encontrar el equilibrio en tu vida."
      />
      <CardDer
        img={ClidefitNutricion}
        title="Nutrición"
        description="La nutrición es clave para un cuerpo saludable. Nuestros expertos en nutrición te guiarán hacia hábitos alimenticios equilibrados y personalizados que te ayudarán a alcanzar tus metas de salud."
      />
      <CardIzq
        img={ClidefitPilates}
        title="Pilates y entrenamiento personal"
        description="¿Buscas fortalecer tu cuerpo y mente de una manera suave pero efectiva? Descubre los beneficios del pilates en Clidefit. Nuestras clases te ayudarán a mejorar la flexibilidad, la fuerza y la postura, ¡todo en un ambiente acogedor y dirigido por instructores dedicados!"
      />
    </>
  );
};
export default Home;
