import React from 'react';

const slideData = [
  {
    title: "Welcome to Capital Growth Partners",
    subtitle: "Discover lasting investment opportunities in Sri Lanka with a trusted partner",
    image: "./assets/images/bg-0.jpg",
    actionBtn: "Contact Us",
    otherBtn: "Book a Demo",
  },
  {
    title: "Your success our achievement",
    subtitle: "We look forward to a prosperous partnership and to making a meaningful impact on your business!",
    image: "./assets/images/bg-1.jpg",
    actionBtn: "Try for Free",
    otherBtn: "Book a Demo",
  },
];

const Hero = () => {
  return (
    <section className="hero">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slideData.map(({ title, subtitle, image, actionBtn, otherBtn }, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div
                className="carousel-background"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  // filter: 'brightness(0.5)',
                  height: '100vh', // Full screen height
                }}
              >
                <div className="container d-flex justify-content-center align-items-center h-100">
                  <div className="text-center text-white">
                    <h1 className="display-4 fw-bold mb-4">{title}</h1>
                    <p className="lead mb-4">{subtitle}</p>
                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                      <button className="btn btn-primary px-4 py-2">{actionBtn}</button>
                      <button className="btn btn-outline-light px-4 py-2">{otherBtn}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
