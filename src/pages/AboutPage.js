import React from "react";
import CompanyOverview from "../components/CompanyOverview";

function AboutPage() {
  const teamMembers = [
    {
      name: "Nipun Samaratunga",
      role: "Director, Legal Affairs and Administration",
      description:
        "Nipun brings a wealth of experience in legal affairs and administrative management. His expertise helps navigate complex legal landscapes and support strategic initiatives.",
      image: "nipun",
    },
    {
      name: "Dinesh Tennakoon",
      role: "Director, Operations and Strategic Management",
      description:
        "Dinesh drives our operations with a strategic mindset, ensuring flawless execution of investment strategies and company-wide efficiency.",
      image: "dinesh",
    },
    {
      name: "Dr. R H S Samaratunga",
      role: "Advisor",
      description:
        "A distinguished Sri Lankan economist with high-level public service experience since 1984, Dr. Samaratunga offers invaluable insights into financial governance.",
      image: "rhs",
    },
    {
      name: "Dr. Ravi Ratnayake",
      role: "Advisor",
      description:
        "With over four decades in international development and economic policy, Dr. Ratnayake adds global vision and strategic value to our organization.",
      image: "ravi",
    },
  ];

  return (
    <div className="container py-5 about-page">
      <CompanyOverview />

      {/* Team Section */}
      <section>
        <h3 className="mb-4 text-center">Meet Our Team</h3>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div className="col-sm-6 col-lg-3" key={index}>
              <div className="card border-0 shadow h-100">
                <img
                  src={`assets/images/team/${member.image}.png`}
                  alt={member.name}
                  className="card-img-top"
                  style={{ objectPosition: "top", objectFit: "cover", height: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{member.name}</h5>
                  <p className="text-primary fw-medium">{member.role}</p>
                  <p className="card-text text-muted small">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;