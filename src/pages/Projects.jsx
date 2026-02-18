import { useState } from "react";
import "./projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration using Stripe.",
      image: "ecommerce",
      technologies: ["React", "Node.js", "MongoDB", "Express", "html/css"],
      category: "fullstack",
      github: "https://github.com/ahmadayaz2022/Ecommerce-Management-System",
      live: "#",
      featured: false
    },
    {
      title: "UOH-Admission-Chatbot",
      description: "Chatbot with real-time updates,  guide students about admission information, and progress tracking.",
      image: "taskmanager",
      technologies: ["python", "gradio UI", "Grok-Api", "Hugging-Face"],
      category: "Chatbot",
      github: "https://github.com/ahmadayaz2022/UOH-Admission-Chatbot",
      live: "https://huggingface.co/spaces/ahmadayaz2022/UOH_Admission_Chatbot",
      featured: true
    },
    {
      title: "Node Auth Practice Project",
      description: "Node.js authentication practice project created to understand backend concepts like authentication, authorization, JWT, middleware, and MongoDB",
      image: "dashboard",
      technologies: ["Node.js" , "Express.js", "MongoDB" ,"Mongoose", "JSON Web Token", "bcrypt"],
      category: "backend",
      github: "https://github.com/ahmadayaz2022/node-auth-practice",
      live: "https://github.com/ahmadayaz2022/node-auth-practice",
      featured: true
    },
    {
      title: "Organ & Blood Donor Finder",
      description: "A Django-based web application designed to streamline the process of organ and blood donation by connecting patients with registered donors and healthcare providers. The platform provides an efficient, user-friendly, and secure system for managing donation requests, donor registrations, and administrative approvals.",
      image: "weather",
      technologies: ["Backend: Python (Django)", "Frontend: HTML, CSS, Tailwind CSS", "Database: db.SQLite3"],
      category: "fullstack",
      github: "https://github.com/ahmadayaz2022/organ-blood-donor-finder",
      live: "https://github.com/ahmadayaz2022/organ-blood-donor-finder",
      featured: false
    },
    {
      title: "React Scientific Calculator",
      description: "A fully functional Scientific Calculator built with React",
      image: "api",
      technologies: ["React.js = Frontend library", "Math.js= Math evaluation library","CSS = Styling and responsive design","JavaScript = Application logic"],
      category: "frontend",
      github: "https://github.com/ahmadayaz2022/react-scientific-calculator",
      live: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with animations, responsive design, and interactive elements showcasing projects and skills.",
      image: "portfolio",
      technologies: ["React", "CSS3", "Framer Motion"],
      category: "frontend",
      github: "https://github.com/ahmadayaz",
      live: "#",
      featured: false
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "Chatbot", label: "Chatbot"}
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="projects-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02.</span>
          <h2 className="section-title">My Projects</h2>
          <div className="title-line"></div>
        </div>

        <p className="section-description">
          Here are some of my recent projects that showcase my skills and experience 
          in building modern web applications. Each project is crafted with attention 
          to detail and best practices.
        </p>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="featured-section">
            <h3 className="featured-title">Featured Projects</h3>
            <div className="featured-grid">
              {featuredProjects.map((project, index) => (
                <div 
                  key={index}
                  className="featured-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="featured-content">
                    <span className="featured-badge">Featured</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tech">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>GitHub</span>
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 7l10 10M7 17V7h10"/>
                        </svg>
                      </a>
                      <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>Live Demo</span>
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 7l10 10M7 17V7h10"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="featured-visual">
                    <div className="project-image">
                      <div className="image-overlay"></div>
                      <span className="project-icon">{project.image.charAt(0).toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="filter-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? "active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-header">
                <div className="folder-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div className="card-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
              </div>

              <div className="card-footer">
                <div className="card-tech">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
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