import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-3xl font-bold text-cyan-400">
          Ahmad Ayaz
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <Link
          to="/login"
          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg"
        >
          Admin Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;