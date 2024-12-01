import React from 'react';

const slideData = [
  {
    title: "Welcome to Capital Growth Partners",
    subtitle: "Discover lasting investment opportunities in Sri Lanka with a trusted partner",
    image: "https://placehold.co/600x400?text=Dashboard+Preview",
    actionBtn: "Contact Us",
    otherBtn: "Book a Demo",
  },
  {
    title: "Your success our achievement",
    subtitle: "We look forward to a prosperous partnership and to making a meaningful impact on your business!",
    image: "https://placehold.co/600x400?text=Dashboard+Preview+Slide+2",
    actionBtn: "Try for Free",
    otherBtn: "Book a Demo",
  },
]

const Hero = () => {
  return (
    <section className="hero">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          {slideData.map(({ title, subtitle, image, actionBtn, otherBtn }, index) => {
            return (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <div className={`container bg-img bg-${index}`}>
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0 order-lg-1 order-2">
                      <h1 className="display-4 fw-bold mb-4">{title}</h1>
                      <p className="lead mb-4">
                        {subtitle}
                      </p>
                      <div className="d-flex flex-column flex-lg-row flex-md-row gap-3">
                        <button className="btn btn-primary px-4 py-2">{actionBtn}</button>
                        <button className="btn btn-outline-dark px-4 py-2">{otherBtn}</button>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2 order-1">
                      <div className="hero-image text-center">
                        <img
                          src={image}
                          alt="Dashboard Preview"
                          className="img-fluid rounded shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Slide 2 */}
          {/* <div className="carousel-item">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0 order-lg-1 order-2">
                  <h1 className="display-4 fw-bold mb-4">Your success our achievement</h1>
                  <p className="lead mb-4">
                    
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3">
                    <button className="btn btn-primary px-4 py-2">Try for free</button>
                    <button className="btn btn-outline-dark px-4 py-2">Book a Demo</button>
                  </div>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2 order-1">
                  <div className="hero-image text-center">
                    <img 
                      src="" 
                      alt="Dashboard Preview Slide 2" 
                      className="img-fluid rounded shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
