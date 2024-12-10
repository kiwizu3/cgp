import React from 'react';
import { ReactComponent as DiversifiedInvestmentPortfolio } from '../assets/icons/diversified-investment-portfolio.svg';
import { ReactComponent as StrategicPlanning } from '../assets/icons/strategic-planning.svg';
import { ReactComponent as LocalExpertise } from '../assets/icons/local-expertise.svg';
import { ReactComponent as ClientFocus } from '../assets/icons/client-focus.svg';
import { ReactComponent as DedicatedSupport } from '../assets/icons/dedicated-support.svg';
import { ReactComponent as DiversifiedPortfolios } from '../assets/icons/diversified-portfolio.svg';
import { ReactComponent as SustainableGrowth } from '../assets/icons/sustainable-growth.svg';
import { ReactComponent as RiskManagement } from '../assets/icons/risk-management.svg';

const Why = () => {
    const whyus = [
        {
            title: "Diversified Investment Portfolios",
            description: "Suggests a balanced approach to risk management and maximizing returns, key for diversified portfolios.",
            icon: <DiversifiedInvestmentPortfolio />,
        },
        {
            title: "Strategic Planning",
            description: "Reflects the innovative and detailed approach required for long-term strategic planning.",
            icon: <StrategicPlanning />,
        },
        {
            title: "Local Expertise",
            description: "Symbolizes in-depth market analysis and knowledge needed to identify local growth opportunities.",
            icon: <LocalExpertise />,
        },
        {
            title: "Client Focus",
            description: "Reflects the personalized, people-focused approach to building long-term relationships.",
            icon: <ClientFocus />,
        },
        {
            title: "Dedicated Support",
            description: "Represents continuous support and assistance, similar to customer service in an online business setting.",
            icon: <DedicatedSupport />,
        },
        {
            title: "Diversified Portfolios",
            description: "A balanced approach to risk management and maximizing returns, essential for diversified portfolios.",
            icon: <DiversifiedPortfolios />,
        },
        {
            title: "Sustainable Growth",
            description: "Represents growth and sustainability in financial returns.",
            icon: <SustainableGrowth />,
        },
        {
            title: "Risk Management",
            description: "Symbolizes careful tracking of performance and balancing risks in investment strategies.",
            icon: <RiskManagement />,
        },
    ];

    return (
        <section className="automation py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 text-center mb-4">
                        <p className="title-tops">Consulting Services</p>
                        <h2 className="display-7">Why Capital Growth Partners?</h2>
                    </div>
                    {whyus.map((item, index) => (
                        <div key={index} className="col-lg-4 mb-4">
                            <div className="card h-100 text-center p-4 border-0">
                                {/* Icon */}
                                <div className="icon whyus-icon mb-3">
                                    {item.icon}
                                </div>
                                {/* Title */}
                                <h5 className="mb-3">{item.title}</h5>
                                {/* Description */}
                                <p className="mb-0 text-muted">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why;
