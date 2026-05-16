import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          Ahmad Ayaz
        </h1>

        <div className="flex gap-6 text-sm md:text-base">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Admin</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;