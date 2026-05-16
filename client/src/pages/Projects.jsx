import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/common/Navbar";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-lg"
              className="glass rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-cyan-500 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="bg-white text-black px-4 py-2 rounded-lg"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="bg-cyan-500 px-4 py-2 rounded-lg"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
