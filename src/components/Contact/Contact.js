import React, { useState } from 'react';
import './Contact.css';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
           <h3 className="section-here">PROFILES</h3>
              <div className="profile-links">
                <a href="https://leetcode.com/u/lakshmi-9839/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code"></i> LeetCode
                </a>
                <a href="https://codeforces.com/profile/ritika_pathak_09" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-bolt"></i> Codeforces
                </a>
                <a href="https://www.codechef.com/users/lakshmi_543" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-utensils"></i> CodeChef
                </a>
              </div>
          <h3 className="section-heading">FOLLOW ME</h3>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/lakshmi-kar-pathak-646190209/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              <a href="https://www.instagram.com/lakshmi.pathak.503?utm_source=qr&igsh=d3kxdWQyY3hhd24=" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.facebook.com/share/1HzizKmmDi/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
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
