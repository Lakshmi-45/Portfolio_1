import React from 'react';
import './Resume.css';

const Resume = () =>{
 return(
    <section className="resume-section">
      <h2 className="section-title">Resume</h2>

      <div className="resume-container">
        <div className="education">
          <h3>My Education</h3>
          <div className="resume-item">
            <span className="year">2020 - 2024</span>
            <h4>Bachelor of Technology</h4>
            <p>Civil Engineering</p>
            <p>CGPA - 8.49</p>
            <p>Indian Institute of Technology BHU (Varanasi)</p>
          </div>

           <div className="resume-item">
                <span className="year">2017 - 2018</span>
                <h4>Intermediate</h4>
                <p>Percentage - 85.40 %</p>
                <p>Pandit Jawaharlal Nehru Inter College, Maharajganj</p>
                <p className="description">
                Specialized in Physics, Chemistry, and Mathematics (PCM); developed strong analytical thinking and problem-solving skills.
                </p>
          </div>

            <div className="resume-item">
                <span className="year">2015 - 2016</span>
                <h4>High School</h4>
                <p>Percentage - 95 %</p>
                <p>Pandit Jawaharlal Nehru Inter College, Maharajganj</p>
                <p className="description">
                    Focused on foundational subjects including Mathematics and Science, with consistent top performance across academic and co-curricular activities.
                </p>
          </div>
        </div>

        <div className="experience">
          <h3>My Experience</h3>

          <div className="resume-item">
            <span className="year">Feb 2025 - Jul 2025</span>
            <h4>Software Engineer</h4>
            <p>Visioapps Technology</p>
            <ul>
              <li>Developing AI-driven voice-controlled mutual fund app using Angular and Louie Voice SDK</li>
              <li>Enhanced UI and improved user interaction speed by 40%</li>
              <li>Designed KYC/non-KYC workflows including SIP/lump-sum and folio creation</li>
              <li>Reduced onboarding time by 30%</li>
              <li>Improved VAD by optimizing mic input timing for better accuracy</li>
            </ul>
          </div>

          <div className="resume-item">
            <span className="year">Sep 2024 - Feb 2025</span>
            <h4>Demo Banking App (Project)</h4>
            <ul>
              <li>Speech-controlled app supporting IMPS, NEFT, RTGS, OTP</li>
              <li>Tested across 50+ user scenarios</li>
              <li>Integrated multilingual TTS for better accessibility</li>
            </ul>
          </div>

          <div className="resume-item">
            <span className="year">May 2023 - Jul 2023</span>
            <h4>Software Developer Intern</h4>
            <p>TechCospace Technologies</p>
            <ul>
              <li>Developed responsive dashboard with role-based access using ReactJS and MySQL</li>
              <li>Created and optimized RESTful APIs with Node.js and Django</li>
              <li>Improved backend performance and API response time by ~20%</li>
              <li>Designed newsletter subscription system to boost retention</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="skills">
        <h3>My Skills</h3>
        <div className="skill">
          <span>HTML/CSS</span>
          <div className="progress-bar"><div style={{ width: "95%" }} /></div>
        </div>
        <div className="skill">
          <span>JavaScript</span>
          <div className="progress-bar"><div style={{ width: "90%" }} /></div>
        </div>
        <div className="skill">
          <span>React JS</span>
          <div className="progress-bar"><div style={{ width: "88%" }} /></div>
        </div>
        <div className="skill">
          <span>Angular</span>
          <div className="progress-bar"><div style={{ width: "88%" }} /></div>
        </div>
        <div className="skill">
          <span>Bootstrap</span>
          <div className="progress-bar"><div style={{ width: "95%" }} /></div>
        </div>
        <div className="skill">
          <span>Web Design</span>
          <div className="progress-bar"><div style={{ width: "88%" }} /></div>
        </div>
      </div>
    </section>
 )
}
export default Resume;