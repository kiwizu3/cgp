import React from 'react';

function Contact() {
  return (
    <div className="contact py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="p-4 border rounded shadow-sm">
              <p><strong>Our Head Office:</strong> No: 23, Sri Parakumba Mawatha, Kotte Road, Ethul Kotte, Sri Lanka</p>
              <p><strong>Call for Information:</strong> +94 77 220 2506 | +94 71 373 6000</p>
              <p><strong>Email for Information:</strong> connect@cgp.lk</p>
            </div>
          </div>
          <div className="col-md-6">
            <form className="contact-form">
              <input type="text" className="form-control mb-3" placeholder="Your Name" />
              <input type="email" className="form-control mb-3" placeholder="Your Email" />
              <input type="text" className="form-control mb-3" placeholder="Subject" />
              <textarea className="form-control mb-3" placeholder="Message"></textarea>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
