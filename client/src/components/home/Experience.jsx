// Experience.jsx - Enhanced with timeline design and animations
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full-Stack Development Intern",
    company: "SeeBiz Pvt. Ltd.",
    duration: "Dec 2025 - May 2026",
    description: "Worked on full-stack web applications using MERN stack, collaborated with cross-functional teams, and implemented responsive UI components.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    icon: "💼",
  },
  {
    title: "Python Developer Trainee",
    company: "UET Peshawar",
    duration: "Jul 2024 - Oct 2024",
    description: "Developed Python applications, learned advanced programming concepts, and worked on automation scripts.",
    technologies: ["Python", "Django", "SQL", "REST APIs"],
    icon: "🐍",
  },
];

function Experience() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-semibold">WORK EXPERIENCE</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%] md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950 shadow-lg shadow-cyan-500/50 hidden md:block"></div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative glass p-8 rounded-2xl border border-cyan-500/20 bg-slate-800/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{exp.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-cyan-400 font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                      <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;