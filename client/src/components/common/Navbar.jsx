import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 glass"
    >
      <div className="container-custom flex justify-between items-center py-5 px-6">
        <Link
          to="/"
          className="text-3xl font-bold gradient-text"
        >
          Ahmad Ayaz
        </Link>

        <div className="hidden md:flex gap-8 text-gray-300">
          <Link to="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link
            to="/projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="hover:text-cyan-400 transition"
          >
            Admin
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;