const Hero = ({ title }) => {
  return (
    <section className="hero h-auto py-2 bg-teal-500">
      <div className="hero-content max-w-xl text-center">
        <h1 className="text-xl md:text-4xl text-white font-bold">{title}</h1>
      </div>
    </section>
  );
};

export default Hero;
