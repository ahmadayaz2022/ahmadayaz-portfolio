import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import API from "../services/api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
      await API.post("/messages", formData);

      alert("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white py-24 px-6">
        <div className="max-w-3xl mx-auto bg-slate-900 p-10 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold mb-10 text-center text-cyan-400">
            Contact Me
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700"
              required
            />

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;