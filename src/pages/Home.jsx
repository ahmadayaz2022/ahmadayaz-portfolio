import { useEffect, useState } from "react";
import "./Home.css";

import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "MERN Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const scrollToProjects = () => {
    window.location.href = "/projects";
  };

  return (
    <section className="home-section">
      <div className="background-animation">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">
              <span className="bracket">{"<"}</span>
              Hi, my name is
              <span className="bracket">{"/>"}</span>
            </p>

            <h1 className="hero-name">
              {["A", "h", "m", "a", "d", " ", "A", "y", "a", "z"].map(
                (char, i) => (
                  <span
                    key={i}
                    className="name-char"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ),
              )}
            </h1>
            
            <h2 className="hero-tagline">
              <span className="typing-text">{text}</span>
              <span className="cursor-blink">|</span>
            </h2>

            {/* <p className="hero-description">
              I'm a passionate <span className="highlight">Software Engineer</span> specializing 
              in building exceptional digital experiences. I have Completed  
              <span className="highlight"> BS Software Engineering</span> and creating 
              scalable full-stack web applications using the MERN stack.
            </p> */}

            <p className="hero-description">
              I'm a{" "}
              <span className="highlight">Software Engineering graduate</span>{" "}
              and passionate
              <span className="highlight"> Software Engineer</span> who
              specializes in building modern, high-performance digital
              experiences. I hold a degree,
              <span className="highlight">
                {" "}
                Bachelor of Science in Software Engineering
              </span>{" "}
              and focus on developing scalable, secure, and user-centric
              full-stack web applications using the
              <span className="highlight"> MERN stack</span>.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                <span>View My Work</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <a href="/contact" className="btn btn-secondary">
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-buttons">
                  <span className="btn-close"></span>
                  <span className="btn-minimize"></span>
                  <span className="btn-maximize"></span>
                </div>
                <span className="window-title">ahmad-ayaz.js</span>
              </div>
              <div className="window-content">
                <pre className="code">
                  {`const developer = {
  name: "Ahmad Ayaz",
  role: "MERN Stack Developer",
  education: "BS Software Engineering",
  skills: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "JavaScript",
    "Python",
    "Generative AI"
  ],
  passion: "Building amazing things",
  status: "Available for hire"
};

export default developer;`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="tech-stack">
          <p className="tech-label">Tech Stack</p>
          <div className="tech-icons">
            {[
              "Node.js",
              "Express",
              "MongoDB",
              "React",
              "JavaScript",
              "Python",
              "Prompt engi",
              
              
            ].map((tech, i) => (
              <div
                key={tech}
                className="tech-item"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="tech-icon">{tech.charAt(0)}</div>
                <span className="tech-name">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </div>

      <section id="About">
        <About />
      </section>

      <section id="Projects">
        <Projects />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </section>
  );
}
