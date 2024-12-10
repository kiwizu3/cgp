import React from 'react';

const About = () => {
    return (
        <section className="about py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Column 1: Image */}
                    <div className="col-lg-6">
                        <div className="about-image p-4">
                            <img
                                src="/assets/images/about.png"
                                alt="About Us"
                                className="img-fluid rounded shadow-lg"
                            />
                        </div>
                    </div>
                    {/* Column 2: Description */}
                    <div className="col-lg-6">
                        <div className="about-description p-4">
                            <p className="title-tops">Learn About Us</p>
                            <h2 className="display-7 fw-bold mb-4">Years of Experience</h2>
                            <p className="text-muted">
                            At Capital Growth Partners, we are dedicated to unlocking the full potential of your investments. Based in Sri Lanka, our mission is to create unparalleled investment opportunities that pave the way for sustainable financial growth. We specialize in identifying and capitalizing on unique market prospects, offering a platform for both individual investors and companies eager to invest and expand. With a focus on long-term growth, we employ strategic investment approaches tailored to your financial aspirations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
