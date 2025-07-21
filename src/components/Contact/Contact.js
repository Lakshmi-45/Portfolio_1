import React, { useState } from 'react';
import './Contact.css';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Mail, Phone, Printer } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim()) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Please fill out this field.";
    if (!email.trim()) newErrors.email = "Please fill out this field.";
    if (name.trim() && email.trim() && !message.trim()) {
    newErrors.message = "Please fill out this field.";
}

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <section className="contact-section">
      <ToastContainer />
      <h2 className="contact-title">
        <span className="title-text">Get in Touch</span>
        <span className="title-underline" />
        <span className="background-title">CONTACT</span>
      </h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3 className="section-heading">ADDRESS</h3>
          <p>4th Floor, Plot No.22,</p>
          <p>145 Murphy Canyon Rd.</p>
          <p>San Diego CA 2028</p>
          <div className="contact-details">
            <p><Phone size={18} className="icon" /> (060) 444 434 444</p>
            <p><Printer size={18} className="icon" /> (060) 555 545 555</p>
            <p><Mail size={18} className="icon" /> chat@simone.com</p>
          </div>
          <h3 className="section-heading">FOLLOW ME</h3>
          <div className="social-icons">
            <i className="fab fa-dribbble" />
            <i className="fab fa-twitter" />
            <i className="fab fa-facebook-f" />
            <i className="fab fa-google" />
            <i className="fab fa-github" />
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h3 className="section-heading">SEND US A NOTE</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>
            <div className="input-group">
              <textarea
                name="message"
                placeholder="Tell us more about your needs........"
                value={formData.message}
                onChange={handleChange}
                rows="6"
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
