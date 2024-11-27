import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const Page =() =>  {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
      {
        title: "We Deliver 14.4% Yearly Net Returns.",
        subtitle: "Discover Lasting Investment Opportunities in Sri Lanka with a Trusted Partner",
        image: "https://placehold.co/1080.png",
      },
      {
        title: "Customized Investment Strategies",
        subtitle: "For Client's Specific Needs",
        image: "https://placehold.co/1080.png",
      },
    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
  
      return () => clearInterval(timer);
    }, [slides.length]);

  return (
    <div className="min-h-screen bg-white">
   
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="https://placehold.co/1080.png" alt="Logo" width={120} height={40} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

           {/* Hero Slider */}
           <div className="position-relative">
      <div className="carousel slide" style={{ height: '600px' }}>
        <div className="carousel-inner h-100">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item h-100 ${index === currentSlide ? 'active' : ''}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="d-block w-100 object-cover"
                style={{ height: '600px', objectFit: 'cover' }}
              />
              <div className="carousel-caption text-start h-100 d-flex flex-column justify-content-center">
                <div className="container">
                  <h1 className="display-3 fw-bold mb-4">{slide.title}</h1>
                  <p className="lead mb-4">{slide.subtitle}</p>
                  <button className="btn btn-primary btn-lg">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        >
          <ChevronLeft className="size-8" />
        </button>
        <button
          className="carousel-control-next"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          <ChevronRight className="size-8" />
        </button>
      </div>
    </div>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {[
              { number: "14.4%", label: "Yearly Returns" },
              { number: "15+", label: "Years Experience" },
              { number: "3,800+", label: "Satisfied Clients" },
              { number: "$12B", label: "Assets Under Management" }
            ].map((stat, index) => (
              <div key={index} className="col-md-3">
                <div className="stat-card text-center">
                  <h2 className="stat-number mb-2">{stat.number}</h2>
                  <p className="mb-0 text-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Customized Investment Strategies</h2>
          <div className="row g-4">
            {[
              {
                title: "Transparency",
                description: "Clear communication and reporting on all investment activities",
                icon: "bi-shield-check"
              },
              {
                title: "Safety",
                description: "Rigorous risk assessment and management protocols",
                icon: "bi-lock"
              },
              {
                title: "Innovation",
                description: "Cutting-edge investment strategies and technologies",
                icon: "bi-graph-up"
              }
            ].map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="service-card h-100 p-4">
                  <div className="text-center mb-4">
                    <i className={`bi ${service.icon} text-primary fs-1`}></i>
                  </div>
                  <h3 className="h4 text-center mb-3">{service.title}</h3>
                  <p className="text-muted text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Innovative Products For Your Investment Needs</h2>
          <div className="row text-center g-4">
            {[
              { number: "32+", label: "Investment Products" },
              { number: "24+", label: "Global Markets" },
              { number: "12+", label: "Years of Innovation" }
            ].map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="stat-card">
                  <h3 className="stat-number mb-2">{item.number}</h3>
                  <p className="mb-0 text-muted">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-title">Trust, Commitment & Professionalism</h2>
              <p className="lead mb-4">We are committed to providing our clients with the highest level of service and expertise in the investment industry.</p>
              <button className="btn btn-custom">Learn More</button>
            </div>
            <div className="col-lg-6">
              <img src="https://placehold.co/600x400.png" alt="Trust and Commitment" width={600} height={400} className="img-fluid rounded shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Contact Us</h2>
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <form className="contact-form">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows={4} placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-custom">Send Message</button>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="bg-white p-4 h-100 rounded shadow">
                <h3 className="h4 mb-4">Our Head Office</h3>
                <p className="mb-2">No. 23, Sir Razik Fareed Mawatha,</p>
                <p className="mb-2">Colombo 01, Sri Lanka</p>
                <p className="mb-2">+94 77 230 2506</p>
                <p className="mb-0">contact@cgp.lk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4 text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-0">© 2024 Capital Growth Partners. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
              <a href="#" className="text-white text-decoration-none">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Page