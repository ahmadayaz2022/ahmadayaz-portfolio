import { useEffect, useState } from "react";
import API from "../../services/api";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    fetchProjects();

  }, []);

  const fetchProjects = async () => {

    const res = await API.get("/projects");

    setProjects(res.data);
  };

  return (
    <section id="projects" className="p-10">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {projects.map((project) => (

          <div
            key={project._id}
            className="bg-slate-800 p-5 rounded-xl"
          >

            <h2 className="text-2xl font-bold mb-3">
              {project.title}
            </h2>

            <p className="text-gray-300">
              {project.description}
            </p>

            <div className="flex gap-4 mt-4">

              <a
                href={project.github}
                target="_blank"
                className="bg-cyan-500 px-4 py-2 rounded"
              >
                Github
              </a>

              <a
                href={project.live}
                target="_blank"
                className="bg-green-500 px-4 py-2 rounded"
              >
                Live
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;