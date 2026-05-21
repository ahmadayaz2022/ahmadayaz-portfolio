import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await API.post("/auth/signup", formData);

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 rounded-xl w-[400px]"
      >

        <h1 className="text-3xl font-bold mb-5 text-center">
          Admin Signup
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        />

        <button className="w-full bg-cyan-500 p-3 rounded">
          Signup
        </button>

      </form>

    </div>
  );
}

export default Signup;