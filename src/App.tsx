import React from 'react';
import { Menu, X, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-gray-900">CGP</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#work" className="text-gray-600 hover:text-gray-900">Work</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Services</a>
              <a href="#work" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Work</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8">
            Building digital products, brands, and experiences
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            We're a digital consultancy focused on designing and developing exceptional digital experiences that drive real business growth.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 transition-colors"
          >
            Let's work together <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Digital Strategy",
              description: "We help organizations understand the digital landscape and create strategies that drive growth."
            },
            {
              title: "Web Development",
              description: "Building modern, scalable web applications using cutting-edge technologies."
            },
            {
              title: "UX Design",
              description: "Creating intuitive and engaging user experiences that delight customers."
            },
            {
              title: "Mobile Development",
              description: "Native and cross-platform mobile applications that perform."
            },
            {
              title: "Cloud Solutions",
              description: "Scalable cloud infrastructure and DevOps practices for modern applications."
            },
            {
              title: "Digital Marketing",
              description: "Data-driven marketing strategies that deliver measurable results."
            }
          ].map((service, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "E-commerce Platform",
              description: "A modern e-commerce solution built for scale",
              image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Banking App",
              description: "Mobile banking reimagined for the digital age",
              image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Healthcare Platform",
              description: "Connecting patients with healthcare providers",
              image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Educational Software",
              description: "Making learning accessible to everyone",
              image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            }
          ].map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's work together</h2>
          <p className="text-xl text-gray-600 mb-12">
            We're always interested in new projects and collaborations. 
            Get in touch to discuss how we can help bring your ideas to life.
          </p>
          <a 
            href="mailto:hello@cgp.lk"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-black hover:bg-gray-900 transition-colors"
          >
            Start a project
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">CGP</h3>
              <p className="text-gray-400">
                Building exceptional digital experiences since 2015.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">hello@cgp.lk</p>
              <p className="text-gray-400">+94 11 2345678</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Address</h4>
              <p className="text-gray-400">
                123 Main Street<br />
                Colombo 03<br />
                Sri Lanka
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Social</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CGP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;