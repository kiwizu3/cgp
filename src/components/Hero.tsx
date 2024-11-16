const Hero = () => {
    return (
      <section
        id="home"
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: 'url(/path/to/hero-background.jpg)' }}
      >
        <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold text-white leading-tight mb-4">
            Welcome to Capital Growth Partners
          </h1>
          <p className="text-xl text-white mb-6">
            Discover Lasting Investment Opportunities in Sri Lanka with a Trusted Partner.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded shadow-md hover:bg-secondary"
          >
            Get in Touch
          </a>
        </div>
      </section>
    );
  };

  export default Hero;
  