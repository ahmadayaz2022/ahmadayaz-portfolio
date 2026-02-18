import { useState } from "react";
import "./About.css";

import profileImage from "../assets/profilepic.jpg";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = {
    frontend: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Next.js",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      ,
      "REST APIs",
      "JWT",
      "Python Programming",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "Figma",
      "Prompt Engineering",
      "GEN AI tools",
    ],
  };

  const experience = [
    {
      title: "MERN Stack Developer (Intern)",
      company: "SeeBiz PVT LTD, lahore pakistan",
      period: "Dec 2025 - Present",
      description:
        "Building full-stack web applications for various clients using MongoDB, Express, React, and Node.js. Delivering scalable and performant solutions.",
    },
    {
      title: "Software Development Intern",
      company: "Smart Moves Lab PVT LTD, Lahore pakistan",
      period: "July 2025 - Dec 2025",
      description:
        "Worked on frontend development using React.js. Collaborated with the team to implement new features and fix bugs.",
    },
  ];

  const education = [
    {
      degree: "BS Software Engineering",
      institution: "University of Haripur, Pakistan",
      period: "2021 - 2025",
      description:
        "Completed Bachelor's degree in Software Engineering with a Strong focus on web technologies, Prompt Engineering, software development and Gen AI.",
    },
  ];

  return (
    <section className="about-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="title-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="intro-box">
              <p className="intro-paragraph">
                Hello! I'm <span className="highlight">Ahmad Ayaz</span>, a
                passionate software engineer specializing in building
                exceptional digital experiences on the web. My journey in
                software development started during my university years, where I
                fell in love with creating solutions that make a difference.
              </p>

              <p className="intro-paragraph">
                I'm currently pursuing my{" "}
                <span className="highlight">BS in Software Engineering</span>
                while working on exciting projects that challenge me to grow
                every day. I specialize in the{" "}
                <span className="highlight">MERN stack</span> (MongoDB, Express,
                React, Node.js) and love bringing ideas to life through clean,
                efficient code.
              </p>

              <p className="intro-paragraph">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source, or sharing knowledge with the
                developer community. I'm always eager to learn and take on new
                challenges that push my boundaries.
              </p>
            </div>

            <div className="quick-facts">
              <div className="fact-item">
                <span className="fact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Lahore, pakistan</p>
                </div>
              </div>
              <div className="fact-item">
                <span className="fact-icon">💼</span>
                <div>
                  <h4>Status</h4>
                  <p>Available for Work</p>
                </div>
              </div>
              <div className="fact-item">
                <span className="fact-icon">🎓</span>
                <div>
                  <h4>Education</h4>
                  <p>BS Software Engineering</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <img
                    src={profileImage}
                    alt="Ahmad Ayaz"
                    className="profile-img"
                  />
                </div>
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  Available for hire
                </div>
              </div>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-value">10+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-value">0-1</span>
                  <span className="stat-label">Years Exp</span>
                </div>
                <div className="stat">
                  <span className="stat-value">15+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="tabs-container">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              <span className="tab-icon">⚡</span>
              Skills
            </button>
            <button
              className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              <span className="tab-icon">💼</span>
              Experience
            </button>
            <button
              className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              <span className="tab-icon">🎓</span>
              Education
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "skills" && (
              <div className="skills-grid">
                <div className="skill-category">
                  <h3 className="category-title">
                    <span className="category-icon">🎨</span>
                    Frontend
                  </h3>
                  <div className="skills-list">
                    {skills.frontend.map((skill, index) => (
                      <div
                        key={skill}
                        className="skill-tag"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h3 className="category-title">
                    <span className="category-icon">⚙️</span>
                    Backend
                  </h3>
                  <div className="skills-list">
                    {skills.backend.map((skill, index) => (
                      <div
                        key={skill}
                        className="skill-tag"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h3 className="category-title">
                    <span className="category-icon">🛠️</span>
                    Tools & Others
                  </h3>
                  <div className="skills-list">
                    {skills.tools.map((skill, index) => (
                      <div
                        key={skill}
                        className="skill-tag"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="timeline">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="timeline-item"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-period">{exp.period}</span>
                      <h3 className="timeline-title">{exp.title}</h3>
                      <h4 className="timeline-company">{exp.company}</h4>
                      <p className="timeline-description">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div className="timeline">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="timeline-item"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-period">{edu.period}</span>
                      <h3 className="timeline-title">{edu.degree}</h3>
                      <h4 className="timeline-company">{edu.institution}</h4>
                      <p className="timeline-description">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
}
