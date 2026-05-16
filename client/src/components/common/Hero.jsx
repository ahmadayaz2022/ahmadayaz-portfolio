import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Ahmad Ayaz
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl text-cyan-400 mb-6"
        >
          Junior Software Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 text-lg leading-8"
        >
          MERN Stack Developer with experience in React.js,
          Node.js, MongoDB, Express.js and Python.
          Passionate about building scalable web applications
          and AI-powered solutions.
        </motion.p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/ahmadayaz2022"
            target="_blank"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ahmadayaz99/"
            target="_blank"
            className="border border-cyan-400 px-6 py-3 rounded-lg"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;