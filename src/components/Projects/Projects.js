import React, { useState } from 'react';
import './Projects.css';
import tataFundImg from '../../assets/images/tataFund.jpeg';
import bankTransfer from '../../assets/images/bankTransfer.jpeg';
import foodie from '../../assets/images/foodie.jpeg';
import chatterBox from '../../assets/images/chatterBox.jpeg';
import adminDashboard from '../../assets/images/adminDashboard.jpeg';

const categories = ['All', 'Voice', 'Web', 'Real-Time'];

const allProjects = [
  {
    title: "Tata Mutual Fund App",
    category: "Voice",
    image: tataFundImg,
    description: "AI-driven voice investment platform with VAD and KYC workflow.",
  },
  {
    title: "Demo Banking App",
    category: "Voice",
    image: bankTransfer,
    description: "Speech-controlled banking app with IMPS/NEFT/RTGS and multilingual TTS.",
  },
  {
    title: "Foodie",
    category: "Web",
    image: foodie,
    description: "React-based food ordering with secure JWT auth and cart system.",
  },
  {
    title: "Chatter-Box",
    category: "Real-Time",
    image: chatterBox,
    description: "Real-time messaging using MERN stack and Socket.IO.",
  },
  {
    title: "Admin Dashboard",
    category: "Web",
    image: adminDashboard,
    description: "Role-based dashboard with REST APIs built using React and MySQL.",
  },
];

const Projects = () => {

    const [selected, setSelected] = useState('All');

  const filtered = selected === 'All'
    ? allProjects
    : allProjects.filter((proj) => proj.category === selected);

  return (
    <section className="projects-section">
      <div className="projects-title">
        <h2>My Work</h2>
        <div className="underline"></div>
        <div className="projects-tabs">
          {categories.map((cat) => (
            <span
              key={cat}
              onClick={() => setSelected(cat)}
              className={selected === cat ? 'active' : ''}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filtered.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
