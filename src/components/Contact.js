import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always open to discussing new projects and opportunities.</p>

            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:chetannamne2609@gmail.com">chetannamne2609@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+918828438843">+91 8828438843</a>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt />
                <div>
                  <h4>Location</h4>
                  <p>Navi Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/chetan080808" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/chetan-namane/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <footer className="footer">
          <p>&copy; 2025 Chetan Namane. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
