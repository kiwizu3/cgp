import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Our Head Office</h3>
            <p>No. 23, Sri Parakumba Mawatha, Kotte Road, Ethul Kotte, Sri Lanka</p>
            <p>Call: +94 77 220 2506</p>
            <p>Email: connect@cgp.lk</p>
          </div>
          <form className="space-y-4 bg-white p-6 shadow-subtle rounded-lg">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Subject"
              />
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-all"
              >
                Send Message
              </button>
        </form>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
