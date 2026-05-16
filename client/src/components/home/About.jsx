import { motion } from "framer-motion";

function About() {
  return (
    <section className="section-padding">
      <div className="container-custom grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass p-3 rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Profile"
              className="rounded-[24px]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 mb-4">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold mb-8 leading-tight">
            Passionate About Building
            <span className="gradient-text">
              {" "}Modern Web Apps
            </span>
          </h2>

          <p className="text-gray-300 leading-9 text-lg">
            Enthusiastic Full-Stack Developer experienced
            in MERN Stack and Python development.
            Skilled in building responsive frontend interfaces,
            scalable backend APIs, MongoDB databases,
            and AI-powered applications.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-4xl font-bold text-cyan-400">
                10+
              </h3>

              <p className="text-gray-300 mt-2">
                Projects Completed
              </p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-4xl font-bold text-cyan-400">
                1+
              </h3>

              <p className="text-gray-300 mt-2">
                Years Experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;