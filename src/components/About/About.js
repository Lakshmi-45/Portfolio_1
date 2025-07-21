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
            B.Tech in Civil Engineering from IIT (BHU) Varanasi with a CGPA of 8.49. Passionate
            about software development, I specialize in building scalable web applications using
            React, Node.js, and MySQL.
          </p>
          <p>
            I focus on delivering clean and efficient solutions within time and budget. I enjoy
            building meaningful digital experiences for real-world problems.
          </p>
        </div>

        <div className="about-right">
          <ul>
            <li><strong>Name:</strong> Lakshmi Kar Pathak</li>
            <li><strong>Email:</strong> <a href="mailto:lakshmi@example.com">lakshmikarpathak369@gmail.com</a></li>
            <li><strong>Age:</strong> 23</li>
            <li><strong>From:</strong> Varanasi, India</li>
          </ul>
          <a href={resumeHere} className="btn-download" download>Download CV</a>
        </div>
      </div>

      <div className="about-stats">
        <div><h3>1+</h3><p>Years Experience</p></div>
        <div><h3>6+</h3><p>Projects Done</p></div>
        {/* <div><h3>15+</h3><p>Happy Clients</p></div>
        <div><h3>5</h3><p>Get Awards</p></div> */}
      </div>
    </section>
    </div>
  );
};
export default About;