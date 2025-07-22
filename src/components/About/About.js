import React from 'react';
import './About.css';
import resumeHere from '../../assets/resume/LAKSHMI_KAR_PATHAK_SDE-1.pdf'

const About = () => {
  return (
    <div className ="main-content">
    <section className="about-section" id="about">
      <div className="about-heading">
        <h2>Know Me More</h2>
        <h1>ABOUT ME</h1>
      </div>

      <div className="about-content">
        <div className="about-left">
          <h3>
            I'm <span className="highlight">Lakshmi Kar Pathak</span>, a Software Engineer
          </h3>
          <p>
           I specialize in building AI-driven and scalable web applications using React, Angular, Node.js, and MySQL. With hands-on experience in voice-controlled apps, real-time messaging systems, and secure onboarding flows, I focus on creating seamless user experiences.
          </p>
          <p>
           Passionate about solving real-world problems through clean, efficient code, I aim to deliver impactful digital solutions that are both reliable and user-friendly.
          </p>
        </div>

        <div className="about-right">
          <ul>
            <li><strong>Name:</strong> Lakshmi Kar Pathak</li>
            <li><strong>Email:</strong> <a href="mailto:lakshmi@example.com">lakshmikarpathak369@gmail.com</a></li>
            <li><strong>Age:</strong> 23</li>
            <li><strong>From:</strong> Gorakhpur, India</li>
          </ul>
          <a href={resumeHere} className="btn-download" download>Download CV</a>
        </div>
      </div>

      <div className="about-stats">
        <div><h3>1+</h3><p>Years Experience</p></div>
        <div><h3>6+</h3><p>Projects Done</p></div>
      </div>
    </section>
    </div>
  );
};
export default About;