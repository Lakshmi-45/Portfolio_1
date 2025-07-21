import React from 'react';
import './Sidebar.css';
import profileImg from '../../assets/images/lakshmi.jpeg'; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h2 className="name">Prashant Aditya</h2>
      </div>
      <nav className="nav-links">
        <a href="#hero" className="active">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">What I Do</a>
        <a href="#projects">Portfolio</a>
        <a href="#resume">Resume</a>
        {/* <a href="#testimonials">Testimonial</a> */}
        <a href="#contact">Contact</a>
      </nav>
      <div className="social-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-github"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </aside>
  );
};

export default Sidebar;