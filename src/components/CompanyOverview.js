import React from "react";
import { FaLightbulb, FaShieldAlt, FaLeaf, FaUsers, FaStar } from "react-icons/fa";

function CompanyOverview() {
  return (
    <section className="company-overview py-5">
      <div className="container">
        <h2 className="fw-bold mb-5">Who We Are</h2>

        {/* Our Story */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3>Our Story</h3>
            <p>
              Founded in 2020, Capital Growth Partners emerged from a visionary ambition to position Sri Lanka as a
              prime destination for foreign investments. Our founders established a firm that navigates the
              complexities of finance while contributing to Sri Lanka's prosperity.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="assets/images/company-overview.jpg"
              alt="Our Story"
              className="img-fluid"
              style={{ maxHeight: "250px" }}
            />
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h4 className="card-title fw-semibold">Our Mission</h4>
                <p className="card-text">
                  To unlock the potential of investments in Sri Lanka, fostering long-term growth and prosperity for our
                  investors and the communities we serve.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h4 className="card-title fw-semibold">Our Vision</h4>
                <p className="card-text">
                  To be the leading investment partner in Sri Lanka, transforming the financial landscape with
                  innovation, integrity, and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-5">
          <h3 className=" mb-4">Our Core Values</h3>
          <div className="row text-center g-4">
            <div className="col-sm-6 col-lg-4">
              <div className="p-4 shadow-sm rounded h-100">
                <FaLightbulb size={36} className="text-warning mb-2" />
                <h5>Innovation</h5>
                <p className="text-muted">Unique strategies that drive superior returns.</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="p-4 shadow-sm rounded h-100">
                <FaShieldAlt size={36} className="text-primary mb-2" />
                <h5>Integrity</h5>
                <p className="text-muted">Transparency and ethical operations.</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="p-4 shadow-sm rounded h-100">
                <FaLeaf size={36} className="text-success mb-2" />
                <h5>Sustainability</h5>
                <p className="text-muted">Environmentally conscious investments.</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="p-4 shadow-sm rounded h-100">
                <FaUsers size={36} className="text-info mb-2" />
                <h5>Collaboration</h5>
                <p className="text-muted">Teamwork and long-term partnerships.</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="p-4 shadow-sm rounded h-100">
                <FaStar size={36} className="text-danger mb-2" />
                <h5>Excellence</h5>
                <p className="text-muted">Constantly exceeding expectations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CSR Section */}
        <div className="text-center">
          <h3 className="mb-3">Corporate Social Responsibility</h3>
          <p className="lead">
            We're committed to making a meaningful impact. Our CSR initiatives target environmental conservation,
            education, and social welfare—driving change for a sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;