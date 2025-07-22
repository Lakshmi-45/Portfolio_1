import React from 'react';
import './Hero.css';
import profilePic from '../../assets/images/girl.jpeg'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image">
          {/* <img src="/profile.jpg" alt="Profile" /> */}
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm a Software Engineer</h1>
          <p className="hero-subtitle">Building modern, scalable web experiences with React, Angular, Node.js, and clean UI/UX design</p>
          <div className="hero-tech">
            <span>🛠 React</span>
            <span>⚙️ Node.js</span>
            <span>🧩 Angular</span>
            <span>📜 JavaScript</span>
            <span>🌐 TypeScript</span>
            <span>🚀 MongoDB</span>
          </div>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn outline">Contact Me</a>
          </div>
          <div className="hero-socials">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
