import { motion } from "framer-motion";

function About() {
  return (
    <section className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="Profile"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            Enthusiastic Full-Stack Developer and Junior Software Engineer
            with hands-on experience in MERN Stack development and Python.
            Passionate about building scalable web applications, REST APIs,
            and AI-powered solutions.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-cyan-400">Experience</h3>
              <p>5 Months Internship</p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-400">Projects</h3>
              <p>10+ Completed Projects</p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-400">Location</h3>
              <p>Lahore, Pakistan</p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-400">Specialization</h3>
              <p>MERN Stack & AI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;