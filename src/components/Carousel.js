import React, { useState, useEffect } from 'react';
import './Carousel.css';

const slides = [
  {
    id: 1,
    title: "Welcome to Capital Growth Partners",
    subtitle: "Discover Lasting Investment Opportunities in Sri Lanka with a Trusted Partner",
    image: "/assets/images/slide01.jpg",
  },
  {
    id: 2,
    title: "Your Success, Our Achievement",
    subtitle: "We look forward to a prosperous partnership and to making a meaningful impact on your business!",
    image: "/assets/images/slide02.jpg",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel slide">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <img
                src={slide.image}
                className="carousel-img d-block w-100"
                alt={`Slide ${slide.id}`}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.title}</h5>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Previous button */}
        <button
          className="carousel-control-prev"
          type="button"
          onClick={goToPrevSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next button */}
        <button
          className="carousel-control-next"
          type="button"
          onClick={goToNextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
