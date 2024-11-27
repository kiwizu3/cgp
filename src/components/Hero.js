import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0 order-lg-1 order-2">
                  <h1 className="display-4 fw-bold mb-4">Welcome to Capital Growth Partners</h1>
                  <p className="lead mb-4">
                    Discover lasting investment opportunities in Sri Lanka with a trusted partner
                  </p>
                  <div className="d-flex flex-column flex-lg-row flex-md-row gap-3">
                    <button className="btn btn-primary px-4 py-2">Contact Us</button>
                    <button className="btn btn-outline-dark px-4 py-2">Book a Demo</button>
                  </div>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2 order-1">
                  <div className="hero-image text-center">
                    <img 
                      src="https://placehold.co/600x400?text=Dashboard+Preview" 
                      alt="Dashboard Preview" 
                      className="img-fluid rounded shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0 order-lg-1 order-2">
                  <h1 className="display-4 fw-bold mb-4">Your success our achievement</h1>
                  <p className="lead mb-4">
                    We look forward to a prosperous partnership and to making a meaningful impact on your business!
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3">
                    <button className="btn btn-primary px-4 py-2">Try for free</button>
                    <button className="btn btn-outline-dark px-4 py-2">Book a Demo</button>
                  </div>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2 order-1">
                  <div className="hero-image text-center">
                    <img 
                      src="https://placehold.co/600x400?text=Dashboard+Preview+Slide+2" 
                      alt="Dashboard Preview Slide 2" 
                      className="img-fluid rounded shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
