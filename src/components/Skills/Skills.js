import React from 'react';
import './Skills.css';
import { FaDesktop, FaPencilRuler, FaMobileAlt, FaRobot, FaLock, FaMicrophone } from "react-icons/fa";

const skills = [

    {
    title: "Voice-Enabled Applications",
    description:
      "Build AI-driven, voice-controlled platforms using Louie SDK and VAD tuning for fast, smooth interactions.",
    icon: <FaMicrophone />,
  },
  {
    title: "Web Design",
    description:
      "Create modern, responsive websites that blend aesthetics with usability for optimal performance.",
    icon: <FaDesktop />,
  },
  {
    title: "UI/UX Design",
    description:
      "Craft user-centric interfaces and workflows that are intuitive, accessible, and visually appealing.",
    icon: <FaPencilRuler />,
  },
  {
    title: "App Design & Development",
    description:
      "Develop secure, scalable apps using React, Angular, and REST APIs, tailored to real-world use cases.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Authentication & Security",
    description:
      "Implement secure logins, role-based access, and encrypted sessions using JWT and bcrypt.",
    icon: <FaLock />,
  },
  {
    title: "Real-Time Communication",
    description:
      "Build real-time chat and event systems with MERN stack and Socket.IO for live, efficient messaging.",
    icon: <FaRobot />,
  },
 
];

const Skills = () => {
  return (
 <section className="services-section">
      <div className="services-title">
        <h2>What I Do?</h2>
        <div className="underline"></div>
      </div>
      <div className="services-grid">
        {skills.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
