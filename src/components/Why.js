import React, { useState, useEffect } from 'react';

const Why = () => {
    const [selected, setSelected] = useState(0);

    const whyus = [
        {
            title: "Diversified Investment Portfolios",
            description: "Suggests a balanced approach to risk management and maximizing returns, key for diversified portfolios.",
            image: "https://placehold.co/800x600?text=Diversified+Investment+Portfolios",
        },
        {
            title: "Strategic Planning",
            description: "Reflects the innovative and detailed approach required for long-term strategic planning.",
            image: "https://placehold.co/800x600?text=Strategic+Planning",
        },
        {
            title: "Local Expertise",
            description: "Symbolizes in-depth market analysis and knowledge needed to identify local growth opportunities.",
            image: "https://placehold.co/800x600?text=Local+Expertise",
        },
        {
            title: "Client Focus",
            description: "Reflects the personalized, people-focused approach to building long-term relationships.",
            image: "https://placehold.co/800x600?text=Client+Focus",
        },
        {
            title: "Dedicated Support",
            description: "Represents continuous support and assistance, similar to customer service in an online business setting.",
            image: "https://placehold.co/800x600?text=Dedicated+Support",
        },
        {
            title: "Diversified Portfolios",
            description: "A balanced approach to risk management and maximizing returns, essential for diversified portfolios.",
            image: "https://placehold.co/800x600?text=Diversified+Portfolios",
        },
        {
            title: "Sustainable Growth",
            description: "Represents growth and sustainability in financial returns.",
            image: "https://placehold.co/800x600?text=Sustainable+Growth",
        },
        {
            title: "Risk Management",
            description: "Symbolizes careful tracking of performance and balancing risks in investment strategies.",
            image: "https://placehold.co/800x600?text=Risk+Management",
        },
    ];

    const onSelectWhy = (index) => {
        setSelected(index); // Update the selected state
    };

    useEffect(() => {
        // Use setTimeout to update the selected index every 5 seconds (5000ms)
        const timeoutId = setTimeout(() => {
            setSelected((prevSelected) => (prevSelected + 1) % whyus.length); // Cycle through the items
        }, 5000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, [selected]); // Dependency on selected ensures it updates after each change

    return (
        <section className="automation py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 d-flex flex-column align-items-center">
                        <div>
                            <p className="title-tops">Consulting Services</p>
                            <h2 className="display-6 fw-bold mb-4">Why Capital Growth Partners?</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="automation-image p-4">
                            <img
                                src={whyus[selected]?.image}
                                alt={whyus[selected]?.title || "Automation Preview"}
                                className="img-fluid rounded shadow-lg"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="features">
                            {whyus.map((item, index) => (
                                <div
                                    key={index}
                                    className={`feature ${selected === index ? 'selected-feature' : ''}`}
                                    onClick={() => onSelectWhy(index)}
                                >
                                    <h5 className="mb-0">{item.title}</h5>
                                    {selected === index && <p className="text-muted mb-0">{item.description}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;
