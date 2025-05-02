import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    interest: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://formspree.io/f/manoebwk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form.");
    }
  };
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">Contact Us</h1>

      {!submitted ? (
        <form className="row g-4" onSubmit={handleSubmit} noValidate>
          <div className="col-md-6">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              required
              value={form.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="interest" className="form-label">Selected Area of Investment</label>
            <input
              type="text"
              className="form-control"
              id="interest"
              name="interest"
              value={form.interest}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      ) : (
        <div className="alert alert-success text-center" role="alert">
          Thank you! We'll get back to you shortly.
        </div>
      )}

      <hr className="my-5" />

      <div className="text-center">
        <p><strong>Email:</strong> connect@CGP.lk</p>
        <p><strong>Phone:</strong> 071 373 6300</p>
        <p><strong>Address:</strong> No 23, Sri Parakumba Mawatha, Kotte Road, Ethul Kotte, Sri Lanka</p>
        <div className="mt-3">
          <a href="#" className="me-3 text-decoration-none text-primary">Facebook</a>
          <a href="#" className="me-3 text-decoration-none text-danger">Instagram</a>
          <a href="#" className="me-3 text-decoration-none text-info">LinkedIn</a>
          <a href="#" className="text-decoration-none text-success">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
