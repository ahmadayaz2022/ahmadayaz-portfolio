import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

    try {

      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 rounded-xl w-[400px]"
      >

        <h1 className="text-3xl font-bold mb-5 text-center">
          Admin Login
        </h1>

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
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;