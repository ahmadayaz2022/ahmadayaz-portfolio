import { useState } from "react";

import API from "../../services/api";
import AdminSidebar from "../../components/admin/AdminSidebar";

function AddProject() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
    liveLink: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/projects",
        {
          ...formData,
          technologies: formData.technologies.split(","),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Project Added Successfully");

      setFormData({
        title: "",
        description: "",
        technologies: "",
        githubLink: "",
        liveLink: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex bg-slate-950 text-white">
      <AdminSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-10">
          Add New Project
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-3xl"
        >
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-900"
            required
          />

          <textarea
            name="description"
            placeholder="Project Description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-900"
            required
          />

          <input
            type="text"
            name="technologies"
            placeholder="React, Node, MongoDB"
            value={formData.technologies}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-900"
            required
          />

          <input
            type="text"
            name="githubLink"
            placeholder="GitHub Link"
            value={formData.githubLink}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-900"
          />

          <input
            type="text"
            name="liveLink"
            placeholder="Live Project Link"
            value={formData.liveLink}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-900"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-900"
          />

          <button
            type="submit"
            className="bg-cyan-500 px-8 py-4 rounded-lg"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProject;