import { useEffect, useState } from "react";

import API from "../../services/api";
import AdminSidebar from "../../components/admin/AdminSidebar";

function ManageProjects() {
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

  const deleteProject = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex bg-slate-950 text-white">
      <AdminSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-10">
          Manage Projects
        </h1>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-slate-900 p-6 rounded-xl flex justify-between items-center"
            >
              <div>
                <h2 className="text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="text-gray-400">
                  {project.description}
                </p>
              </div>

              <button
                onClick={() => deleteProject(project._id)}
                className="bg-red-500 px-5 py-3 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageProjects;